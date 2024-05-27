const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpack = require('webpack');

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    port: 3000,
    compress: false, // gzip压缩，开发环境不开启，提升热更新速度
    hot: true,
    // open: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'window.ENV': JSON.stringify('development'),
    }),
  ],
});
