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

1、有损压缩  
2、无损压缩  
3、webpack 压缩（ image-webpack-loader ）

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

图片预加载，是指在一些需要展示大量图片的网站，将图片提前加载到本地缓存中，从而提升用户体验。

常用的方式有两种，一种是隐藏在 css 的 background 的 url 属性里面，一种是通过 javascript 的 Image 对象设置实例对象的 src 属性实现图片的预加载。

### 响应式图片加载
