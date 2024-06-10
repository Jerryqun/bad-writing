---
nav: Html
group:
  title: 基础
  order: 1
toc: content
title: 站点内的图片性能优化
mobile: false
---

## 怎么进行站点内的图片性能优化

<a target='_blank' href='https://fe.ecool.fun/topic/0b096e94-b846-448b-ae4b-b4f500e96bf1?orderBy=updateTime&order=desc&tagId=20'>参考</a>

### 选择合适的图片格式

<a href='./base-select-img'>参考</a>

### 图片压缩

1、有损压缩（JPG）  
2、无损压缩（PNG）  
3、webpack 压缩（ image-webpack-loader，v4 和 v5 都一样使用，v5 的 production 环境也不会默认处理图片的压缩 ）

```bash
npm install --save-dev image-webpack-loader
```

```js
module.exports = {
  module: {
    rules: [
      {
        test: /.(png|jpe?g|gif|svg)(?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash:7].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 50,
              },
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: [0.5, 0.65],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                // 不支持WEBP就不要写这一项
                quality: 75,
              },
            },
          },
        ],
      },
    ],
  },
};
```

### 使用雪碧图

### 使用 iconfont

### 使用 base64 格式

将项目中小于 10kb 的图片转化为 base64 应用到页面中

```js
module.exports = {
  module: {
    rules: [
      {
        test: /.(png|jpe?g|gif|svg)(?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10240,
          name: utils.assetsPath('img/[name].[hash:7].[ext]'),
        },
      },
    ],
  },
};
```

### 使用 css 代替图片

### 使用 CDN 图片

### 图片懒加载

### 图片预加载

1. 使用 HTML 请注意，as 属性是必需的，它指定被加载资源的类型

```html
<link rel="preload" href="image.jpg" as="image" />
```

2. javascript 的 Image

```js
var img = new Image();
img.onload = function () {
  console.log('图片已加载');
};
img.src = 'path/to/your/image.jpg';
```

3. css

```css
#preload-container {
  background-image: url('path/to/image.jpg');
  display: none;
}
```

4. 如果你在使用 Webpack，可以考虑使用 image-webpack-loader 等插件自动优化和预加载图片资源。
   此外，结合使用 import()语法和 webpack 的 Prefetch/Preload 插件可以实现更高级的资源预加载策略，不过这通常用于模块或组件的预加载。

5. 许多现代的前端框架和库（如 React、Vue 等）提供了自己的预加载解决方案或插件，可以集成进项目中以提供预加载功能。例如，react-image 库就提供了图片加载和预加载功能。

### 响应式图片加载

```bash
// picture
<picture>
  <source media="(min-width: 800px)" srcset="large.jpg" />
  <source media="(min-width: 450px)" srcset="medium.jpg" />
  <img src="small.jpg" alt="描述" />
</picture>

// css
.bg-img {
  background-image: url(small.jpg);
}

@media (min-width: 600px) {
  .bg-img {
    background-image: url(medium.jpg);
  }
}

@media (min-width: 900px) {
  .bg-img {
    background-image: url(large.jpg);
  }
}

// js
if (window.innerWidth > 800) {
  loadImage('large.jpg');
} else {
  loadImage('small.jpg');
}

function loadImage(src) {
  const img = new Image();
  img.src = src;
  img.onload = () => document.body.appendChild(img);
}


```
