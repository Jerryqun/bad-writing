const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpack = require('webpack');

module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    filename: 'bundle.[contenthash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|git)$/,
        use: [
          'url-loader',
          {
            options: {
              limit: 5 * 1024,
              outputPath: '/image/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'window.ENV': JSON.stringify('production'),
    }),
  ],
});
