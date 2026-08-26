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
    // 顶部大菜单：覆盖约定式路由自动生成的导航
    // dumi 的自动导航是"每个顶级目录一个导航项"，无法按标题合并，故此处静态声明
    nav: [
      {
        title: '前端技术',
        link: '/front-end-basic',
        children: [
          { title: '前端基础', link: '/front-end-basic' },
          { title: '前端框架', link: '/framework' },
          { title: 'Nextjs', link: '/nextjs' },
          { title: 'Http', link: '/http' },
          { title: '高阶技术', link: '/advanced' },
        ],
      },
      {
        title: '后端技术',
        link: '/java',
        children: [
          { title: 'Node', link: '/node' },
          { title: 'Java', link: '/java' },
        ],
      },
      { title: '股票', link: '/stock' },
      { title: '考公', link: '/kaogong' },
    ],
  },
};
