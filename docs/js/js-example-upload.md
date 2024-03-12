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

## 断点续传

<a target="_blank" href="https://juejin.cn/post/6844904046436843527?searchId=20240312102713E48DA1188C5672261F8F#heading-17">参考</a>

断点续传的原理在于前端/服务端需要记住已上传的切片，这样下次上传就可以跳过之前已上传的部分，有两种方案实现记忆的功能

前端使用 localStorage 记录已上传的切片 hash
服务端保存已上传的切片 hash，前端每次上传前向服务端获取已上传的切片

第一种是前端的解决方案，第二种是服务端，而前端方案有一个缺陷，如果换了个浏览器就失去了记忆的效果，所以这里选后者

无论是前端还是服务端，都必须要生成文件和切片的 hash，之前我们使用文件名 + 切片下标作为切片 hash，这样做文件名一旦修改就失去了效果，而事实上只要文件内容不变，hash 就不应该变化，所以正确的做法是根据文件内容生成 hash，所以我们修改一下 hash 的生成规则

webpack 的产物 contenthash 也是基于这个思路实现的

这里用到另一个库 spark-md5，它可以根据文件内容计算出文件的 hash 值
另外考虑到如果上传一个超大文件，读取文件内容计算 hash 是非常耗费时间的，并且会引起 UI 的阻塞，导致页面假死状态，所以我们使用 web-worker 在 worker 线程计算 hash，这样用户仍可以在主界面正常的交互
由于实例化 web-worker 时，参数是一个 js 文件路径且不能跨域，所以我们单独创建一个 hash.js 文件放在 public 目录下，另外在 worker 中也是不允许访问 dom 的，但它提供了 importScripts 函数用于导入外部脚本，通过它导入 spark-md5

```js


// /public/hash.js
​
// 导入脚本
self.importScripts("/spark-md5.min.js");
​
// 生成文件 hash
self.onmessage = e => {
  const { fileChunkList } = e.data;
  const spark = new self.SparkMD5.ArrayBuffer();
  let percentage = 0;
  let count = 0;
  const loadNext = index => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(fileChunkList[index].file);
    reader.onload = e => {
      count++;
      spark.append(e.target.result);
      if (count === fileChunkList.length) {
        self.postMessage({
          percentage: 100,
          hash: spark.end()
        });
        self.close();
      } else {
        percentage += 100 / fileChunkList.length;
        self.postMessage({
          percentage
        });
        // calculate recursively
        loadNext(count);
      }
    };
  };
  loadNext(0);
};

```

## 文件秒传

在实现断点续传前先简单介绍一下文件秒传
所谓的文件秒传，即在服务端已经存在了上传的资源，所以当用户再次上传时会直接提示上传成功
文件秒传需要依赖上一步生成的 hash，即在上传前，先计算出文件 hash，并把 hash 发送给服务端进行验证，由于 hash 的唯一性，所以一旦服务端能找到 hash 相同的文件，则直接返回上传成功的信息即可

## 总结

大文件上传

前端上传大文件时使用 Blob.prototype.slice 将文件切片，并发上传多个切片，最后发送一个合并的请求通知服务端合并切片
服务端接收切片并存储，收到合并请求后使用流将切片合并到最终文件
原生 XMLHttpRequest 的 upload.onprogress 对切片上传进度的监听
使用 Vue 计算属性根据每个切片的进度算出整个文件的上传进度

断点续传

使用 spark-md5 根据文件内容算出文件 hash
通过 hash 可以判断服务端是否已经上传该文件，从而直接提示用户上传成功（秒传）
通过 XMLHttpRequest 的 abort 方法暂停切片的上传
上传前服务端返回已经上传的切片名，前端跳过这些切片的上传
