const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpack = require('webpack');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin.js'); //开启scope hosting webpack5默认开启

module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    clean: true, // 每次构建前清除输出目录  webpack4需要配置clean-webpack-plugin来删除dist文件,webpack5内置了
    filename: '[name].[contenthash:8].js', // contenthash依据文件内容来，文件内容改变hash值才会改变
    // publicPath: 'http//:xxx.xxx', //修改所有静态url的前缀
  },
  module: {
    rules: [
      // 可单独配置publicPath
      {
        test: /\.(png|jpg|jpeg|git)$/,
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          },
        },
        generator: {
          filename: 'images/[contenthash:8][ext]', // 文件输出目录和命名
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'window.ENV': JSON.stringify('production'),
    }),
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),
    // new ModuleConcatenationPlugin(),
  ],
  // 压缩配置
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(), //压缩js
      new CssMinimizerPlugin(), // 压缩css
    ],
    splitChunks: {
      // chunks: 'initial', //入口chunks，对于异步导入的文件不处理
      // chunks: 'async', //异步chunks，只对异步导入的文件做处理
      chunks: 'all', //全部处理

      cacheGroups: {
        // 第三方包
        vendor: {
          name: 'vendor', // chunk的名字
          priority: 1, //配置抽离的权重，权重越高 越先抽离
          minSize: 0, //大小限制 达到这个权重才会进行差分
          minChunks: 1, // 最少复用过几次
          test: /node_modules/,
        },
        // 公共模块
        commons: {
          name: 'commons', // chunk的名字
          priority: 0, //配置抽离的权重，权重越高 越先抽离
          minSize: 0, //大小限制 达到这个权重才会进行差分
          minChunks: 2, // 最少复用过几次
        },
      },
    },
  },
  // resolve: {
  //   mainFields: ['jsnext:main', 'browser', 'main'],
  // },
});
