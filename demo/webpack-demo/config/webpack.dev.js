const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpack = require('webpack');
const { assetsPath } = require('./path');

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    port: 3000,
    compress: false, // gzip压缩，开发环境不开启，提升热更新速度
    hot: true,
    historyApiFallback: true, // 用户直接访问一个子路由或者刷新页面，服务器会返回404错误，因为那个具体的路径在服务器上并不存在。这是因为前端路由在客户端动态管理路径，而不是依赖于服务器上的实际文件。
    //为了解决这个问题，Webpack DevServer 提供了一个名为 historyApiFallback 的配置项。当你设置了 historyApiFallback: true，所有的路由请求将被重定向到指定的页面（通常是 index.html），然后由前端路由库处理路由导航。
    static: {
      //静态资源地址  directory目录下的文件开发环境下都能通过http的形式访问
      directory: assetsPath,
      publicPath: '/static', // 定义一个或多个映射到静态资源目录的公共URL路径。
    },
    // open: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'window.ENV': JSON.stringify('development'),
    }),
  ],
  optimization: {
    minimize: false,
  },
});
