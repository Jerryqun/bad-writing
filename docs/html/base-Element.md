---
nav: Html
group:
  title: 基础
  order: 1
toc: content
title: Element 和 Node 的关系
mobile: false
---

## Element 和 Node 的关系

<a target="_blank" href="https://blog.csdn.net/zz_jesse/article/details/102815299">参考</a>

- DOM 是一棵树， 所有节点都是 Node
- Node 是 Element 的基类
- Element 是其他 html 元素的基类，如 HTMLDivElement

请说出下面代码的显示结果，然后说下原因

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <style>
      .box {
        width: 400px;
        border: solid 1px #000;
      }

      img {
        width: 50%;
      }
    </style>
  </head>

  <body>
    <div class="box">
      <img
        src="https://upload.jianshu.io/users/upload_avatars/11958551/8060363d-c486-4457-9a35-8bd8975a73cb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"
      />
      <img
        src="https://upload.jianshu.io/users/upload_avatars/11958551/8060363d-c486-4457-9a35-8bd8975a73cb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"
      />
      <img
        src="https://upload.jianshu.io/users/upload_avatars/11958551/8060363d-c486-4457-9a35-8bd8975a73cb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"
      />
    </div>
  </body>
</html>
```

1、换行  
2、图片与图片之间有间隙

这是因为 html 中标签后的每个换行也会被当做是一个节点，会进行渲染，也会占用空间，这个节点就是 text 节点，他不像标签那么形象，可以有具体的表示，他就是换行和空字符串的组合。

查看 node 节点

```js
const d = document.querySelector('div');
console.log('children', d.children); // HTMLCollection(3) [img, img, img]
console.log('childNodes', d.childNodes); // NodeList(7) [text, img, text, img, text, img, text]

console.log('d.children', d.children instanceof HTMLCollection); // true;
console.log('d.children', d.childNodes instanceof NodeList); // true

document.getElementsByClassName('box')[0].childNodes.forEach((item) => {
  item.nodeType === 3 ? item.appendData('text node') : null;
});
```

### 解决

1、font-size:0  
2、删除换行  
3、图片设置 vertical-align: bottom;
