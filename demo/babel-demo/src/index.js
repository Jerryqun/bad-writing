// import "@babel/polyfill";
const sum = (a, b) => a + b; //   "@babel/preset-env" 可以转换
Promise.resolve(100).then((data) => data); //"@babel/preset-env"不可以转换
[20].includes(20); //"@babel/preset-env"不可以转换 babel只解析语法 需要引入polyfill 配合webpack进行api的转换

// 按需引入

// "use strict";

// require("core-js/modules/es.array.includes.js");
// require("core-js/modules/es.object.to-string.js");
// require("core-js/modules/es.promise.js");
// // import "@babel/polyfill";
// var sum = function sum(a, b) {
//   return a + b;
// }; //   "@babel/preset-env" 可以转换
// Promise.resolve(100).then(function (data) {
//   return data;
// }); //"@babel/preset-env"不可以转换
// [20].includes(20); //"@babel/preset-env"不可以转换 babel只解析语法 需要引入polyfill 配合webpack进行api的转换

// ("use strict");

// var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
// var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));
// var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));
// var _context;
// // import "@babel/polyfill";
// var sum = function sum(a, b) {
//   return a + b;
// }; //   "@babel/preset-env" 可以转换
// _promise["default"].resolve(100).then(function (data) {
//   return data;
// }); //"@babel/preset-env"不可以转换
// (0, _includes["default"])(_context = [20]).call(_context, 20); //"@babel/preset-env"不可以转换 babel只解析语法 需要引入polyfill 配合webpack进行api的转换
