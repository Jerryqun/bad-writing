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
      { title: '羽毛球C级教练', link: '/badminton' },
    ],
    // 侧边栏：覆盖考公目录自动生成的侧边栏
    // 常用公式（速查页）+ 题型方法（学习方法页）
    // （考公首页与《资料分析》笔记不出现在侧边栏，页面仍可通过链接访问）
    sidebar: {
      '/kaogong': [
        {
          title: '常用公式',
          children: [
            { title: '资料分析', link: '/kaogong/formula-data-analysis' },
            { title: '数量关系', link: '/kaogong/formula-quantity' },
          ],
        },
        {
          title: '题型方法',
          children: [
            { title: '言语理解', link: '/kaogong/method-verbal' },
            { title: '判断推理', link: '/kaogong/method-reasoning' },
            { title: '常识判断', link: '/kaogong/method-common-sense' },
          ],
        },
      ],
      // 侧边栏：覆盖羽毛球目录自动生成的侧边栏
      // 基础（目录首页）+ 运动医学（损伤与疾病）+ 训练教学（监控与计划）
      '/badminton': [
        {
          title: '基础',
          children: [
            { title: '羽毛球C级教练', link: '/badminton' },
          ],
        },
        {
          title: '运动医学',
          children: [
            { title: '常见运动损伤', link: '/badminton/injury-basics' },
            { title: '运动性疾病与处理', link: '/badminton/sports-diseases' },
          ],
        },
        {
          title: '训练教学',
          children: [
            { title: '训练监控', link: '/badminton/training-monitoring' },
            { title: '教学训练原则与计划', link: '/badminton/teaching-principles' },
          ],
        },
      ],
    },
  },
};
