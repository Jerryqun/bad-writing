const sum = (a, b) => a + b; //   "@babel/preset-env" 可以转换
Promise.resolve(100).then((data) => data); //"@babel/preset-env"不可以转换
[20].includes(20); //"@babel/preset-env"不可以转换 babel只解析语法 需要引入polyfill 配合webpack进行api的转换
