const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { srcPath, distPath } = require('./path');

module.exports = {
  entry: path.join(srcPath, 'index'),
  entry: {
    index: path.join(srcPath, 'index'),
    index1: path.join(srcPath, 'index1'),
  },
  cache: {
    type: 'filesystem',
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx|jsx)$/, // 用于声明该规则的过滤条件，只有路径名命中该正则的文件才会应用这条规则，示例中的 /\.js$/ 表示对所有 .js 后缀的文件生效
        use: ['babel-loader'], //处理ts es6
        include: srcPath,
        exclude: '/node_modules/',
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader', css通过style的方式加入到head
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
          'postcss-loader',
          // 'cache-loader', webpack5已经不需要了 有默认的缓存机制
        ], // loader 执行的顺序是从后往前
        include: srcPath,
        exclude: '/node_modules/',
      },

      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader', 'postcss-loader'], // loader 执行的顺序是从后往前
      //   include: srcPath,
      //   exclude: '/node_modules/',
      // },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public/index.html'),
      filename: 'index.html',
      inject: true, // 自动注入静态资源
      chunks: ['index', 'commons', 'vendor'], // 确保不会引入index1的js
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public/index1.html'),
      filename: 'index1.html', // 多入口的时候filename必须配置成不一样的
      inject: true, // 自动注入静态资源
      chunks: ['index1', 'commons'], // 确保不会引入index的js
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      '@': path.resolve('src'),
    },
  },
};
