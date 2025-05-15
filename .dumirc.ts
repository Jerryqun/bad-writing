// webpack.config.js
const MySimplePlugin = require('./MySimplePlugin');
export default {
  // ...其它配置
  // outputPath: 'root',
  // base: './bad-writing/',
  history: { type: 'hash' },
  publicPath: '/bad-writing/',
  // 手写一个webpack plugin 示例
  chainWebpack(memo: any, { env, webpack }: any) {
    console.log('chainWebpack');
    memo.plugin('MySimplePlugin').use(new MySimplePlugin({ showTime: true }));
  },
  themeConfig: {
    name: '编程小径',
    logo: 'https://wisdomhammer.oss-cn-hangzhou.aliyuncs.com/pmsaas/1025/1/20230721/02be82d4e18bc3e7e155e1f744cf4586.jpeg?Expires=3267854213&OSSAccessKeyId=LTAI5t5fwTBbu4WT1PJCaeCS&Signature=MM2nS5lj6%2FEr7X%2FKkbeEP15bKsc%3D',
    socialLinks: {
      github: 'https://github.com/Jerryqun/bad-writing',
    },
  },
};
