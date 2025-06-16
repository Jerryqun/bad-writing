"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[2783],{46744:function(i,t,a){a.r(t);var r=a(72269),c=a(93359),h=a(61788),_=a(19977),x=a(91558),s=a(24268),p=a(96057),m=a(85939),l=a(53683),d=a(80936),u=a(67294),n=a(56002),e=a(85893);function o(){return(0,e.jsx)(l.dY,{children:(0,e.jsx)(u.Suspense,{fallback:(0,e.jsx)(d.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"\u5207\u7247\u4E0A\u4F20",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5207\u7247\u4E0A\u4F20",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u5207\u7247\u4E0A\u4F20"]}),(0,e.jsx)("p",{children:(0,e.jsx)("a",{target:"_blank",href:"https://juejin.cn/post/7177045936298786872",children:n.texts[0].value})}),(0,e.jsxs)("h3",{id:"\u524D\u7AEF\u4EE3\u7801\u793A\u4F8B",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u524D\u7AEF\u4EE3\u7801\u793A\u4F8B",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u524D\u7AEF\u4EE3\u7801\u793A\u4F8B"]}),(0,e.jsx)(s.Z,{lang:"html",children:n.texts[1].value}),(0,e.jsx)(s.Z,{lang:"js",children:n.texts[2].value}),(0,e.jsxs)("h3",{id:"\u540E\u7AEF\u4EE3\u7801\u793A\u4F8B",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u540E\u7AEF\u4EE3\u7801\u793A\u4F8B",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u540E\u7AEF\u4EE3\u7801\u793A\u4F8B"]}),(0,e.jsx)(s.Z,{lang:"js",children:n.texts[3].value}),(0,e.jsxs)("h2",{id:"\u65AD\u70B9\u7EED\u4F20",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u65AD\u70B9\u7EED\u4F20",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u65AD\u70B9\u7EED\u4F20"]}),(0,e.jsx)("p",{children:(0,e.jsx)("a",{target:"_blank",href:"https://juejin.cn/post/6844904046436843527?searchId=20240312102713E48DA1188C5672261F8F#heading-17",children:n.texts[4].value})}),(0,e.jsxs)("p",{children:[(0,e.jsx)("code",{children:n.texts[5].value}),n.texts[6].value]}),(0,e.jsx)("p",{children:n.texts[7].value}),(0,e.jsx)("p",{children:n.texts[8].value}),(0,e.jsx)("p",{children:n.texts[9].value}),(0,e.jsx)("p",{children:n.texts[10].value}),(0,e.jsxs)("p",{children:[n.texts[11].value,(0,e.jsx)("code",{children:n.texts[12].value}),n.texts[13].value,(0,e.jsx)("code",{children:n.texts[14].value}),(0,e.jsx)("br",{}),n.texts[15].value,(0,e.jsx)("br",{}),n.texts[16].value]}),(0,e.jsx)(s.Z,{lang:"js",children:n.texts[17].value}),(0,e.jsxs)("h2",{id:"\u6587\u4EF6\u79D2\u4F20",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u6587\u4EF6\u79D2\u4F20",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u6587\u4EF6\u79D2\u4F20"]}),(0,e.jsx)("p",{children:n.texts[18].value}),(0,e.jsxs)("h2",{id:"\u603B\u7ED3",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u603B\u7ED3",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u603B\u7ED3"]}),(0,e.jsx)("p",{children:n.texts[19].value}),(0,e.jsxs)("p",{children:[n.texts[20].value,(0,e.jsx)("code",{children:n.texts[21].value}),n.texts[22].value,(0,e.jsx)("br",{}),n.texts[23].value,(0,e.jsx)("br",{}),n.texts[24].value,(0,e.jsx)("br",{}),n.texts[25].value]}),(0,e.jsx)("p",{children:n.texts[26].value}),(0,e.jsxs)("p",{children:[n.texts[27].value,(0,e.jsx)("br",{}),n.texts[28].value,(0,e.jsx)("br",{}),n.texts[29].value,(0,e.jsx)("br",{}),n.texts[30].value]})]})})})})}t.default=o},56002:function(i,t,a){a.r(t),a.d(t,{texts:function(){return r}});const r=[{value:"\u53C2\u8003",paraId:0,tocIndex:0},{value:`<input type="file" id="input" />
<button id="upload">\u4E0A\u4F20</button>
<!-- \u4E0A\u4F20\u8FDB\u5EA6 -->
<div style="width: 300px" id="progress"></div>
`,paraId:1,tocIndex:1},{value:`let input = document.getElementById('input')
let upload = document.getElementById('upload')
let files = {}//\u521B\u5EFA\u4E00\u4E2A\u6587\u4EF6\u5BF9\u8C61
let chunkList = []//\u5B58\u653E\u5207\u7247\u7684\u6570\u7EC4
\u200B
// \u8BFB\u53D6\u6587\u4EF6
input.addEventListener('change', (e) => {
    files = e.target.files[0]
    console.log(files);
    //\u6CE8\u610F\u8C03\u7528\u4F4D\u7F6E\uFF0C\u4E0D\u662F\u5728\u5168\u5C40\uFF0C\u800C\u662F\u5728\u8BFB\u53D6\u6587\u4EF6\u7684\u56DE\u8C03\u91CC\u8C03\u7528
    chunkList = createChunk(files)
    console.log(chunkList);

 \xA0 \xA0//\u521B\u5EFA\u5207\u7247
 \xA0 \xA0//\u4E0A\u4F20\u5207\u7247
})


// \u521B\u5EFA\u5207\u7247
function createChunk(file, size = 2 * 1024 * 1024) {//\u4E24\u4E2A\u5F62\u53C2\uFF1Afile\u662F\u5927\u6587\u4EF6\uFF0Csize\u662F\u5207\u7247\u7684\u5927\u5C0F
    const chunkList = []
    let cur = 0
    while (cur < file.size) {
 \xA0 \xA0 \xA0 \xA0chunkList.push({
 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0file: file.slice(cur, cur + size)//\u4F7F\u7528slice()\u8FDB\u884C\u5207\u7247
 \xA0 \xA0 \xA0  })
 \xA0 \xA0 \xA0 \xA0cur += size
    }
    return chunkList
}


//\u6570\u636E\u5904\u7406
async function uploadFile(list) {
    const requestList = list.map(({file,fileName,index,chunkName}) => {
        const formData = new FormData() // \u521B\u5EFA\u8868\u5355\u7C7B\u578B\u6570\u636E
        formData.append('file', file)//\u8BE5\u6587\u4EF6
        formData.append('fileName', fileName)//\u6587\u4EF6\u540D
        formData.append('chunkName', chunkName)//\u5207\u7247\u540D
        return {formData,index}
    })
        .map(({formData,index}) =>axiosRequest({
            method: 'post',
            url: 'http://localhost:3000/upload',//\u8BF7\u6C42\u63A5\u53E3\uFF0C\u8981\u4E0E\u540E\u7AEF\u4E00\u4E00\u4E00\u5BF9\u5E94
            data: formData
        })
 \xA0 \xA0 \xA0 \xA0 \xA0  .then(res => {
 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0console.log(res);
 \xA0 \xA0 \xA0 \xA0 \xA0      //\u663E\u793A\u6BCF\u4E2A\u5207\u7247\u4E0A\u4F20\u8FDB\u5EA6
 \xA0 \xA0 \xA0 \xA0 \xA0      let p = document.createElement('p')
                p.innerHTML = \`\${list[index].chunkName}--\${res.data.message}\`
                document.getElementById('progress').appendChild(p)
 \xA0 \xA0 \xA0 \xA0 \xA0  })
        )
        await Promise.all(requestList)//\u4FDD\u8BC1\u6240\u6709\u7684\u5207\u7247\u90FD\u5DF2\u7ECF\u4F20\u8F93\u5B8C\u6BD5
}
\u200B
//\u8BF7\u6C42\u51FD\u6570
function axiosRequest({method = "post",url,data}) {
    return new Promise((resolve, reject) => {
        const config = {//\u8BBE\u7F6E\u8BF7\u6C42\u5934
            headers: 'Content-Type:application/x-www-form-urlencoded',
        }
 \xA0 \xA0 \xA0 \xA0//\u9ED8\u8BA4\u662Fpost\u8BF7\u6C42\uFF0C\u53EF\u66F4\u6539
        axios[method](url,data,config).then((res) => {
            resolve(res)
        })
    })
}
\u200B
// \u6587\u4EF6\u4E0A\u4F20
upload.addEventListener('click', () => {
    const uploadList = chunkList.map(({file}, index) => ({
        file,
        size: file.size,
        percent: 0,
        chunkName: \`\${files.name}-\${index}\`,
        fileName: files.name,
        index
    }))
    //\u53D1\u8BF7\u6C42\uFF0C\u8C03\u7528\u51FD\u6570
    uploadFile(uploadList)
\u200B
})

// \u901A\u77E5\u540E\u7AEF\u53BB\u505A\u5207\u7247\u5408\u5E76
function merge(size, fileName) {
    axiosRequest({
        method: 'post',
        url: 'http://localhost:3000/merge',//\u540E\u7AEF\u5408\u5E76\u8BF7\u6C42
        data: JSON.stringify({
            size,
            fileName
        }),
    })
}
\u200B
//\u8C03\u7528\u51FD\u6570\uFF0C\u5F53\u6240\u6709\u5207\u7247\u4E0A\u4F20\u6210\u529F\u4E4B\u540E\uFF0C\u901A\u77E5\u540E\u7AEF\u5408\u5E76
await Promise.all(requestList)
merge(files.size, files.name)



`,paraId:2,tocIndex:1},{value:`//app.js
const http = require('http')
const multiparty = require('multiparty')// \u4E2D\u95F4\u4EF6\uFF0C\u5904\u7406FormData\u5BF9\u8C61\u7684\u4E2D\u95F4\u4EF6
const path = require('path')
const fse = require('fs-extra')//\u6587\u4EF6\u5904\u7406\u6A21\u5757
\u200B
const server = http.createServer()
const UPLOAD_DIR = path.resolve(__dirname, '.', 'qiepian')// \u8BFB\u53D6\u6839\u76EE\u5F55\uFF0C\u521B\u5EFA\u4E00\u4E2A\u6587\u4EF6\u5939qiepian\u5B58\u653E\u5207\u7247
\u200B
server.on('request', async (req, res) => {
    // \u5904\u7406\u8DE8\u57DF\u95EE\u9898\uFF0C\u5141\u8BB8\u6240\u6709\u7684\u8BF7\u6C42\u5934\u548C\u8BF7\u6C42\u6E90
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
\u200B     if (req.url === '/merge') { // \u8BE5\u53BB\u5408\u5E76\u5207\u7247\u4E86
        const data = await resolvePost(req)
        const {
            fileName,
            size
        } = data
        const filePath = path.resolve(UPLOAD_DIR, fileName)//\u83B7\u53D6\u5207\u7247\u8DEF\u5F84
        await mergeFileChunk(filePath, fileName, size)
        res.end(JSON.stringify({
            code: 0,
            message: '\u6587\u4EF6\u5408\u5E76\u6210\u529F'
        }))
    }


    if (req.url === '/upload') { //\u524D\u7AEF\u8BBF\u95EE\u7684\u5730\u5740\u6B63\u786E
        const multipart = new multiparty.Form() // \u89E3\u6790FormData\u5BF9\u8C61
        multipart.parse(req, async (err, fields, files) => {
            if (err) { //\u89E3\u6790\u5931\u8D25
                return
            }
            console.log('fields=', fields);
            console.log('files=', files);
 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0
            const [file] = files.file
            const [fileName] = fields.fileName
            const [chunkName] = fields.chunkName

            const chunkDir = path.resolve(UPLOAD_DIR, \`\${fileName}-chunks\`)//\u5728qiepian\u6587\u4EF6\u5939\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u6587\u4EF6\u5939\uFF0C\u5B58\u653E\u63A5\u6536\u5230\u7684\u6240\u6709\u5207\u7247
            if (!fse.existsSync(chunkDir)) { //\u6587\u4EF6\u5939\u4E0D\u5B58\u5728\uFF0C\u65B0\u5EFA\u8BE5\u6587\u4EF6\u5939
                await fse.mkdirs(chunkDir)
            }
\u200B
            // \u628A\u5207\u7247\u79FB\u52A8\u8FDBchunkDir
            await fse.move(file.path, \`\${chunkDir}/\${chunkName}\`)
            res.end(JSON.stringify({ //\u5411\u524D\u7AEF\u8F93\u51FA
                code: 0,
                message: '\u5207\u7247\u4E0A\u4F20\u6210\u529F'
            }))
        })
    }
})
\u200B
server.listen(3000, () => {
    console.log('\u670D\u52A1\u5DF2\u542F\u52A8');
})

// \u5408\u5E76
async function mergeFileChunk(filePath, fileName, size) {
    const chunkDir = path.resolve(UPLOAD_DIR, \`\${fileName}-chunks\`)
\u200B
    let chunkPaths = await fse.readdir(chunkDir)
    chunkPaths.sort((a, b) => a.split('-')[1] - b.split('-')[1])
\u200B
    const arr = chunkPaths.map((chunkPath, index) => {
        return pipeStream(
            path.resolve(chunkDir, chunkPath),
            // \u5728\u6307\u5B9A\u7684\u4F4D\u7F6E\u521B\u5EFA\u53EF\u5199\u6D41
            fse.createWriteStream(filePath, {
                start: index * size,
                end: (index + 1) * size
            })
        )
    })
    await Promise.all(arr)//\u4FDD\u8BC1\u6240\u6709\u7684\u5207\u7247\u90FD\u88AB\u8BFB\u53D6
}
\u200B
// \u5C06\u5207\u7247\u8F6C\u6362\u6210\u6D41\u8FDB\u884C\u5408\u5E76
function pipeStream(path, writeStream) {
    return new Promise(resolve => {
        // \u521B\u5EFA\u53EF\u8BFB\u6D41\uFF0C\u8BFB\u53D6\u6240\u6709\u5207\u7247
        const readStream = fse.createReadStream(path)
        readStream.on('end', () => {
            fse.unlinkSync(path)// \u8BFB\u53D6\u5B8C\u6BD5\u540E\uFF0C\u5220\u9664\u5DF2\u7ECF\u8BFB\u53D6\u8FC7\u7684\u5207\u7247\u8DEF\u5F84
            resolve()
        })
        readStream.pipe(writeStream)//\u5C06\u53EF\u8BFB\u6D41\u6D41\u5165\u53EF\u5199\u6D41
    })
}
\u200B
// \u89E3\u6790POST\u8BF7\u6C42\u4F20\u9012\u7684\u53C2\u6570
function resolvePost(req) {
    // \u89E3\u6790\u53C2\u6570
    return new Promise(resolve => {
        let chunk = ''
        req.on('data', data => { //req\u63A5\u6536\u5230\u4E86\u524D\u7AEF\u7684\u6570\u636E
            chunk += data //\u5C06\u63A5\u6536\u5230\u7684\u6240\u6709\u53C2\u6570\u8FDB\u884C\u62FC\u63A5
        })
        req.on('end', () => {
            resolve(JSON.parse(chunk))//\u5C06\u5B57\u7B26\u4E32\u8F6C\u4E3AJSON\u5BF9\u8C61
        })
    })
}


`,paraId:3,tocIndex:2},{value:"\u53C2\u8003",paraId:4,tocIndex:3},{value:"\u65AD\u70B9\u7EED\u4F20\u7684\u539F\u7406\u5728\u4E8E\u524D\u7AEF/\u670D\u52A1\u7AEF\u9700\u8981\u8BB0\u4F4F\u5DF2\u4E0A\u4F20\u7684\u5207\u7247",paraId:5,tocIndex:3},{value:"\uFF0C\u8FD9\u6837\u4E0B\u6B21\u4E0A\u4F20\u5C31\u53EF\u4EE5\u8DF3\u8FC7\u4E4B\u524D\u5DF2\u4E0A\u4F20\u7684\u90E8\u5206\uFF0C\u6709\u4E24\u79CD\u65B9\u6848\u5B9E\u73B0\u8BB0\u5FC6\u7684\u529F\u80FD",paraId:5,tocIndex:3},{value:`\u524D\u7AEF\u4F7F\u7528 localStorage \u8BB0\u5F55\u5DF2\u4E0A\u4F20\u7684\u5207\u7247 hash
\u670D\u52A1\u7AEF\u4FDD\u5B58\u5DF2\u4E0A\u4F20\u7684\u5207\u7247 hash\uFF0C\u524D\u7AEF\u6BCF\u6B21\u4E0A\u4F20\u524D\u5411\u670D\u52A1\u7AEF\u83B7\u53D6\u5DF2\u4E0A\u4F20\u7684\u5207\u7247`,paraId:6,tocIndex:3},{value:"\u7B2C\u4E00\u79CD\u662F\u524D\u7AEF\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u7B2C\u4E8C\u79CD\u662F\u670D\u52A1\u7AEF\uFF0C\u800C\u524D\u7AEF\u65B9\u6848\u6709\u4E00\u4E2A\u7F3A\u9677\uFF0C\u5982\u679C\u6362\u4E86\u4E2A\u6D4F\u89C8\u5668\u5C31\u5931\u53BB\u4E86\u8BB0\u5FC6\u7684\u6548\u679C\uFF0C\u6240\u4EE5\u8FD9\u91CC\u9009\u540E\u8005",paraId:7,tocIndex:3},{value:"\u65E0\u8BBA\u662F\u524D\u7AEF\u8FD8\u662F\u670D\u52A1\u7AEF\uFF0C\u90FD\u5FC5\u987B\u8981\u751F\u6210\u6587\u4EF6\u548C\u5207\u7247\u7684 hash\uFF0C\u4E4B\u524D\u6211\u4EEC\u4F7F\u7528\u6587\u4EF6\u540D + \u5207\u7247\u4E0B\u6807\u4F5C\u4E3A\u5207\u7247 hash\uFF0C\u8FD9\u6837\u505A\u6587\u4EF6\u540D\u4E00\u65E6\u4FEE\u6539\u5C31\u5931\u53BB\u4E86\u6548\u679C\uFF0C\u800C\u4E8B\u5B9E\u4E0A\u53EA\u8981\u6587\u4EF6\u5185\u5BB9\u4E0D\u53D8\uFF0Chash \u5C31\u4E0D\u5E94\u8BE5\u53D8\u5316\uFF0C\u6240\u4EE5\u6B63\u786E\u7684\u505A\u6CD5\u662F\u6839\u636E\u6587\u4EF6\u5185\u5BB9\u751F\u6210 hash\uFF0C\u6240\u4EE5\u6211\u4EEC\u4FEE\u6539\u4E00\u4E0B hash \u7684\u751F\u6210\u89C4\u5219",paraId:8,tocIndex:3},{value:"webpack \u7684\u4EA7\u7269 contenthash \u4E5F\u662F\u57FA\u4E8E\u8FD9\u4E2A\u601D\u8DEF\u5B9E\u73B0\u7684",paraId:9,tocIndex:3},{value:"\u8FD9\u91CC\u7528\u5230\u53E6\u4E00\u4E2A\u5E93 ",paraId:10,tocIndex:3},{value:"spark-md5",paraId:10,tocIndex:3},{value:"\uFF0C",paraId:10,tocIndex:3},{value:"\u5B83\u53EF\u4EE5\u6839\u636E\u6587\u4EF6\u5185\u5BB9\u8BA1\u7B97\u51FA\u6587\u4EF6\u7684 hash \u503C",paraId:10,tocIndex:3},{value:`
\u53E6\u5916\u8003\u8651\u5230\u5982\u679C\u4E0A\u4F20\u4E00\u4E2A\u8D85\u5927\u6587\u4EF6\uFF0C\u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9\u8BA1\u7B97 hash \u662F\u975E\u5E38\u8017\u8D39\u65F6\u95F4\u7684\uFF0C\u5E76\u4E14\u4F1A\u5F15\u8D77 UI \u7684\u963B\u585E\uFF0C\u5BFC\u81F4\u9875\u9762\u5047\u6B7B\u72B6\u6001\uFF0C\u6240\u4EE5\u6211\u4EEC\u4F7F\u7528 web-worker \u5728 worker \u7EBF\u7A0B\u8BA1\u7B97 hash\uFF0C\u8FD9\u6837\u7528\u6237\u4ECD\u53EF\u4EE5\u5728\u4E3B\u754C\u9762\u6B63\u5E38\u7684\u4EA4\u4E92`,paraId:10,tocIndex:3},{value:`
\u7531\u4E8E\u5B9E\u4F8B\u5316 web-worker \u65F6\uFF0C\u53C2\u6570\u662F\u4E00\u4E2A js \u6587\u4EF6\u8DEF\u5F84\u4E14\u4E0D\u80FD\u8DE8\u57DF\uFF0C\u6240\u4EE5\u6211\u4EEC\u5355\u72EC\u521B\u5EFA\u4E00\u4E2A hash.js \u6587\u4EF6\u653E\u5728 public \u76EE\u5F55\u4E0B\uFF0C\u53E6\u5916\u5728 worker \u4E2D\u4E5F\u662F\u4E0D\u5141\u8BB8\u8BBF\u95EE dom \u7684\uFF0C\u4F46\u5B83\u63D0\u4F9B\u4E86 importScripts \u51FD\u6570\u7528\u4E8E\u5BFC\u5165\u5916\u90E8\u811A\u672C\uFF0C\u901A\u8FC7\u5B83\u5BFC\u5165 spark-md5`,paraId:10,tocIndex:3},{value:`

// /public/hash.js
\u200B
// \u5BFC\u5165\u811A\u672C
self.importScripts("/spark-md5.min.js");
\u200B
// \u751F\u6210\u6587\u4EF6 hash
self.onmessage = e => {
 \xA0const { fileChunkList } = e.data;
 \xA0const spark = new self.SparkMD5.ArrayBuffer();
 \xA0let percentage = 0;
 \xA0let count = 0;
 \xA0const loadNext = index => {
 \xA0 \xA0const reader = new FileReader();
 \xA0 \xA0reader.readAsArrayBuffer(fileChunkList[index].file);
 \xA0 \xA0reader.onload = e => {
 \xA0 \xA0 \xA0count++;
 \xA0 \xA0 \xA0spark.append(e.target.result);
 \xA0 \xA0 \xA0if (count === fileChunkList.length) {
 \xA0 \xA0 \xA0 \xA0self.postMessage({
 \xA0 \xA0 \xA0 \xA0 \xA0percentage: 100,
 \xA0 \xA0 \xA0 \xA0 \xA0hash: spark.end()
 \xA0 \xA0 \xA0  });
 \xA0 \xA0 \xA0 \xA0self.close();
 \xA0 \xA0  } else {
 \xA0 \xA0 \xA0 \xA0percentage += 100 / fileChunkList.length;
 \xA0 \xA0 \xA0 \xA0self.postMessage({
 \xA0 \xA0 \xA0 \xA0 \xA0percentage
 \xA0 \xA0 \xA0  });
 \xA0 \xA0 \xA0 \xA0// calculate recursively
 \xA0 \xA0 \xA0 \xA0loadNext(count);
 \xA0 \xA0  }
 \xA0  };
  };
 \xA0loadNext(0);
};

`,paraId:11,tocIndex:3},{value:`\u5728\u5B9E\u73B0\u65AD\u70B9\u7EED\u4F20\u524D\u5148\u7B80\u5355\u4ECB\u7ECD\u4E00\u4E0B\u6587\u4EF6\u79D2\u4F20
\u6240\u8C13\u7684\u6587\u4EF6\u79D2\u4F20\uFF0C\u5373\u5728\u670D\u52A1\u7AEF\u5DF2\u7ECF\u5B58\u5728\u4E86\u4E0A\u4F20\u7684\u8D44\u6E90\uFF0C\u6240\u4EE5\u5F53\u7528\u6237\u518D\u6B21\u4E0A\u4F20\u65F6\u4F1A\u76F4\u63A5\u63D0\u793A\u4E0A\u4F20\u6210\u529F
\u6587\u4EF6\u79D2\u4F20\u9700\u8981\u4F9D\u8D56\u4E0A\u4E00\u6B65\u751F\u6210\u7684 hash\uFF0C\u5373\u5728\u4E0A\u4F20\u524D\uFF0C\u5148\u8BA1\u7B97\u51FA\u6587\u4EF6 hash\uFF0C\u5E76\u628A hash \u53D1\u9001\u7ED9\u670D\u52A1\u7AEF\u8FDB\u884C\u9A8C\u8BC1\uFF0C\u7531\u4E8E hash \u7684\u552F\u4E00\u6027\uFF0C\u6240\u4EE5\u4E00\u65E6\u670D\u52A1\u7AEF\u80FD\u627E\u5230 hash \u76F8\u540C\u7684\u6587\u4EF6\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE\u4E0A\u4F20\u6210\u529F\u7684\u4FE1\u606F\u5373\u53EF`,paraId:12,tocIndex:4},{value:"\u5927\u6587\u4EF6\u4E0A\u4F20",paraId:13,tocIndex:5},{value:"\u524D\u7AEF\u4E0A\u4F20\u5927\u6587\u4EF6\u65F6\u4F7F\u7528 ",paraId:14,tocIndex:5},{value:"Blob.prototype.slice ",paraId:14,tocIndex:5},{value:"\u5C06\u6587\u4EF6\u5207\u7247\uFF0C\u5E76\u53D1\u4E0A\u4F20\u591A\u4E2A\u5207\u7247\uFF0C\u6700\u540E\u53D1\u9001\u4E00\u4E2A\u5408\u5E76\u7684\u8BF7\u6C42\u901A\u77E5\u670D\u52A1\u7AEF\u5408\u5E76\u5207\u7247",paraId:14,tocIndex:5},{value:`
\u670D\u52A1\u7AEF\u63A5\u6536\u5207\u7247\u5E76\u5B58\u50A8\uFF0C\u6536\u5230\u5408\u5E76\u8BF7\u6C42\u540E\u4F7F\u7528\u6D41\u5C06\u5207\u7247\u5408\u5E76\u5230\u6700\u7EC8\u6587\u4EF6`,paraId:14,tocIndex:5},{value:`
\u539F\u751F XMLHttpRequest \u7684 upload.onprogress \u5BF9\u5207\u7247\u4E0A\u4F20\u8FDB\u5EA6\u7684\u76D1\u542C`,paraId:14,tocIndex:5},{value:`
\u4F7F\u7528 Vue \u8BA1\u7B97\u5C5E\u6027\u6839\u636E\u6BCF\u4E2A\u5207\u7247\u7684\u8FDB\u5EA6\u7B97\u51FA\u6574\u4E2A\u6587\u4EF6\u7684\u4E0A\u4F20\u8FDB\u5EA6`,paraId:14,tocIndex:5},{value:"\u65AD\u70B9\u7EED\u4F20",paraId:15,tocIndex:5},{value:"\u4F7F\u7528 spark-md5 \u6839\u636E\u6587\u4EF6\u5185\u5BB9\u7B97\u51FA\u6587\u4EF6 hash",paraId:16,tocIndex:5},{value:`
\u901A\u8FC7 hash \u53EF\u4EE5\u5224\u65AD\u670D\u52A1\u7AEF\u662F\u5426\u5DF2\u7ECF\u4E0A\u4F20\u8BE5\u6587\u4EF6\uFF0C\u4ECE\u800C\u76F4\u63A5\u63D0\u793A\u7528\u6237\u4E0A\u4F20\u6210\u529F\uFF08\u79D2\u4F20\uFF09`,paraId:16,tocIndex:5},{value:`
\u901A\u8FC7 XMLHttpRequest \u7684 abort \u65B9\u6CD5\u6682\u505C\u5207\u7247\u7684\u4E0A\u4F20`,paraId:16,tocIndex:5},{value:`
\u4E0A\u4F20\u524D\u670D\u52A1\u7AEF\u8FD4\u56DE\u5DF2\u7ECF\u4E0A\u4F20\u7684\u5207\u7247\u540D\uFF0C\u524D\u7AEF\u8DF3\u8FC7\u8FD9\u4E9B\u5207\u7247\u7684\u4E0A\u4F20`,paraId:16,tocIndex:5}]}}]);
