---
nav: Js
group: 进阶
toc: content
title: 前端操作文件
---

## 前端操作文件

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <div>
         <button id="a" type="primary">编辑文件</button>    <button
        id="b"
        type="primary"
      >
        保存文件
      </button>
         <input id="input" placeholder="请输入内容" />    
    </div>

    ​
    <script>
      document.getElementById('a').addEventListener('click', () => {
        editFile();
      });

      document.getElementById('b').addEventListener('click', () => {
        saveFile();
      });

      const editFile = async function () {
        // 选择文件
        let [fileHandle] = await window.showOpenFilePicker();
        // 复显文件内容
        fileHandle.getFile().then((blob) => {
          blob.text().then((val) => {
            console.log('val', val);
          });
        });
      };
      const saveFile = async function () {
        // 新建一个文件
        const fileHandle = await window.showSaveFilePicker({
          types: [
            {
              description: 'hello',
              accept: {
                'text/plain': ['.txt'],
                // 对于一些非常用的后缀，均使用这种方式进行定义
                // 参考：https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
                // 'application/octet-stream': ['.a','.b']
              },
            },
          ],
        });
        // 在文件内写入内容，写入内容用的是Stream Api，流式写入
        const writable = await fileHandle.createWritable();
        await writable.write('你好测试文件');
        await writable.close();
      };
    </script>
  </body>
</html>
```
