const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { srcPath } = require('./path');

module.exports = {
  entry: path.join(srcPath, 'index'),
  module: {
    rules: [
      {
        test: /\.(js|ts)$/, // 用于声明该规则的过滤条件，只有路径名命中该正则的文件才会应用这条规则，示例中的 /\.js$/ 表示对所有 .js 后缀的文件生效
        use: ['babel-loader'], //处理ts  es6
        include: srcPath,
        exclude: '/node_modules/',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'], // loader 执行的顺序是从后往前
        include: srcPath,
        exclude: '/node_modules/',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public/index.html'),
      // filename: 'index.html',
      inject: true, // 自动注入静态资源
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
