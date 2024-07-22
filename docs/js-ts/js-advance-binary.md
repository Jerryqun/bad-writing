---
nav: Js
group: 进阶
toc: content
title: JS二进制
---

## 谈谈 JS 二进制：File、Blob、FileReader、ArrayBuffer、Base64

<a href="https://juejin.cn/post/7148254347401363463" target="_blank">参考</a>

### Blob

Blob 全称为 binary large object ，即二进制大对象，它是 JavaScript 中的一个对象，表示原始的类似文件的数据
Blob 对象内置了 slice() 方法 文件分片上传就是利用此原理

```js
// Blob 创建
new Blob(array, options);

const blob = new Blob(['Hello World'], { type: 'text/plain' });

console.log(blob.size); // 11
console.log(blob.type); // "text/plain"

// 可以使用 URL.createObjectURL() 方法将将其转化为一个 URL
URL.createObjectURL(blob);
```

### File

文件（File）接口提供有关文件的信息，并允许网页中的 JavaScript 访问其内容。实际上，File 对象是特殊类型的 Blob，且可以用在任意的 Blob 类型的 context 中。Blob 的属性和方法都可以用于 File 对象。

注意：File 对象中只存在于浏览器环境中，在 Node.js 环境中不存在。

在 JavaScript 中，主要有两种方法来获取 File 对象：

1、`<input>` 元素上选择文件后返回的 FileList 对象；<br/>
2、文件拖放操作生成的 DataTransfer 对象；<br/>

每个 File 对象都包含文件的一些属性，这些属性都继承自 Blob 对象：<br/>

lastModified：引用文件最后修改日期，为自 1970 年 1 月 1 日 0:00 以来的毫秒数；<br/>
lastModifiedDate：引用文件的最后修改日期；<br/>
name：引用文件的文件名；<br/>
size：引用文件的文件大小；<br/>
type：文件的媒体类型（MIME）；<br/>
webkitRelativePath：文件的路径或 URL。<br/>

#### 拖拽获取文件

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <div
      id="drop-zone"
      style="width: 200px; height: 200px;background: red;"
    ></div>
  </body>
  <script>
    const dropZone = document.getElementById('drop-zone');

    dropZone.ondragover = (e) => {
      e.preventDefault();
    };

    dropZone.ondrop = (e) => {
      e.preventDefault();
      const files = e.dataTransfer.files;
      console.log(files);
    };
  </script>
</html>
```

### Base64

Base64 是一种基于 64 个可打印字符来表示二进制数据的表示方法

- atob：解码，解码一个 Base64 字符串<br/>
- btoa：编码，从一个字符串或者二进制数据编码一个 Base64 字符串<br/>

### 前端实现上传文件的预览

1、基于 FileReader

- 创建 FileReader 对像；
- 调用 readAsDataURL 方法读取文件；
- 调用 onload 事件监听。因为我们需要拿到完整的数据，但我们又不知道文件何时读完，所以需要第三步监听；
- 通过 FileReader 的 result 属性拿到读取结果。

```js
<body>
  <input type="file" id="fileInput" />
  <img id="preview" />
</body>;

const fileInput = document.getElementById('fileInput');
const preview = document.getElementById('preview');
const reader = new FileReader();

fileInput.onchange = (e) => {
  reader.readAsDataURL(e.target.files[0]);
};

reader.onload = (e) => {
  preview.src = e.target.result;
  console.log(e.target.result);
};
```

1、基于 window.URL.createObjectURL
方法对选择的图片数据（可以勉强理解为 input 的 value）生成一个 blob 对象路径

```js
<body>
  <input type="file" id="fileInput" />
  <img id="preview" />
</body>;

const fileInput = document.getElementById('fileInput');
const preview = document.getElementById('preview');
const reader = new FileReader();

fileInput.onchange = (e) => {
  document.querySelector('img').src = window.URL.createObjectURL(
    e.target.files[0],
  );
};
```
