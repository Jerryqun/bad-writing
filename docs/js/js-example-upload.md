---
nav: Js
group: 案例
toc: content
title: 切片上传
---

<a target="_blank" href="https://juejin.cn/post/7177045936298786872">参考</a>

## 前端

```html
<input type="file" id="input" />
<button id="upload">上传</button>
<!-- 上传进度 -->
<div style="width: 300px" id="progress"></div>
```

```js
let input = document.getElementById('input')
let upload = document.getElementById('upload')
let files = {}//创建一个文件对象
let chunkList = []//存放切片的数组
​
// 读取文件
input.addEventListener('change', (e) => {
    files = e.target.files[0]
    console.log(files);
    //注意调用位置，不是在全局，而是在读取文件的回调里调用
    chunkList = createChunk(files)
    console.log(chunkList);

    //创建切片
    //上传切片
})


// 创建切片
function createChunk(file, size = 2 * 1024 * 1024) {//两个形参：file是大文件，size是切片的大小
    const chunkList = []
    let cur = 0
    while (cur < file.size) {
        chunkList.push({
                file: file.slice(cur, cur + size)//使用slice()进行切片
        })
        cur += size
    }
    return chunkList
}


//数据处理
async function uploadFile(list) {
    const requestList = list.map(({file,fileName,index,chunkName}) => {
        const formData = new FormData() // 创建表单类型数据
        formData.append('file', file)//该文件
        formData.append('fileName', fileName)//文件名
        formData.append('chunkName', chunkName)//切片名
        return {formData,index}
    })
        .map(({formData,index}) =>axiosRequest({
            method: 'post',
            url: 'http://localhost:3000/upload',//请求接口，要与后端一一一对应
            data: formData
        })
            .then(res => {
                console.log(res);
                //显示每个切片上传进度
                let p = document.createElement('p')
                p.innerHTML = `${list[index].chunkName}--${res.data.message}`
                document.getElementById('progress').appendChild(p)
            })
        )
        await Promise.all(requestList)//保证所有的切片都已经传输完毕
}
​
//请求函数
function axiosRequest({method = "post",url,data}) {
    return new Promise((resolve, reject) => {
        const config = {//设置请求头
            headers: 'Content-Type:application/x-www-form-urlencoded',
        }
        //默认是post请求，可更改
        axios[method](url,data,config).then((res) => {
            resolve(res)
        })
    })
}
​
// 文件上传
upload.addEventListener('click', () => {
    const uploadList = chunkList.map(({file}, index) => ({
        file,
        size: file.size,
        percent: 0,
        chunkName: `${files.name}-${index}`,
        fileName: files.name,
        index
    }))
    //发请求，调用函数
    uploadFile(uploadList)
​
})

// 通知后端去做切片合并
function merge(size, fileName) {
    axiosRequest({
        method: 'post',
        url: 'http://localhost:3000/merge',//后端合并请求
        data: JSON.stringify({
            size,
            fileName
        }),
    })
}
​
//调用函数，当所有切片上传成功之后，通知后端合并
await Promise.all(requestList)
merge(files.size, files.name)



```

## 后端

```js
//app.js
const http = require('http')
const multiparty = require('multiparty')// 中间件，处理FormData对象的中间件
const path = require('path')
const fse = require('fs-extra')//文件处理模块
​
const server = http.createServer()
const UPLOAD_DIR = path.resolve(__dirname, '.', 'qiepian')// 读取根目录，创建一个文件夹qiepian存放切片
​
server.on('request', async (req, res) => {
    // 处理跨域问题，允许所有的请求头和请求源
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
​     if (req.url === '/merge') { // 该去合并切片了
        const data = await resolvePost(req)
        const {
            fileName,
            size
        } = data
        const filePath = path.resolve(UPLOAD_DIR, fileName)//获取切片路径
        await mergeFileChunk(filePath, fileName, size)
        res.end(JSON.stringify({
            code: 0,
            message: '文件合并成功'
        }))
    }


    if (req.url === '/upload') { //前端访问的地址正确
        const multipart = new multiparty.Form() // 解析FormData对象
        multipart.parse(req, async (err, fields, files) => {
            if (err) { //解析失败
                return
            }
            console.log('fields=', fields);
            console.log('files=', files);
            
            const [file] = files.file
            const [fileName] = fields.fileName
            const [chunkName] = fields.chunkName

            const chunkDir = path.resolve(UPLOAD_DIR, `${fileName}-chunks`)//在qiepian文件夹创建一个新的文件夹，存放接收到的所有切片
            if (!fse.existsSync(chunkDir)) { //文件夹不存在，新建该文件夹
                await fse.mkdirs(chunkDir)
            }
​
            // 把切片移动进chunkDir
            await fse.move(file.path, `${chunkDir}/${chunkName}`)
            res.end(JSON.stringify({ //向前端输出
                code: 0,
                message: '切片上传成功'
            }))
        })
    }
})
​
server.listen(3000, () => {
    console.log('服务已启动');
})

// 合并
async function mergeFileChunk(filePath, fileName, size) {
    const chunkDir = path.resolve(UPLOAD_DIR, `${fileName}-chunks`)
​
    let chunkPaths = await fse.readdir(chunkDir)
    chunkPaths.sort((a, b) => a.split('-')[1] - b.split('-')[1])
​
    const arr = chunkPaths.map((chunkPath, index) => {
        return pipeStream(
            path.resolve(chunkDir, chunkPath),
            // 在指定的位置创建可写流
            fse.createWriteStream(filePath, {
                start: index * size,
                end: (index + 1) * size
            })
        )
    })
    await Promise.all(arr)//保证所有的切片都被读取
}
​
// 将切片转换成流进行合并
function pipeStream(path, writeStream) {
    return new Promise(resolve => {
        // 创建可读流，读取所有切片
        const readStream = fse.createReadStream(path)
        readStream.on('end', () => {
            fse.unlinkSync(path)// 读取完毕后，删除已经读取过的切片路径
            resolve()
        })
        readStream.pipe(writeStream)//将可读流流入可写流
    })
}
​
// 解析POST请求传递的参数
function resolvePost(req) {
    // 解析参数
    return new Promise(resolve => {
        let chunk = ''
        req.on('data', data => { //req接收到了前端的数据
            chunk += data //将接收到的所有参数进行拼接
        })
        req.on('end', () => {
            resolve(JSON.parse(chunk))//将字符串转为JSON对象
        })
    })
}


```
