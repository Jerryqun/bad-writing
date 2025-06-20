---
nav: Node
group: webpack
toc: content
mobile: false
title: Babel
---

## Babel

<a target="_blank" href="https://www.babeljs.cn/">官网</a>

<a target="_blank" href="https://juejin.cn/post/6844904008679686152">参考</a>

Babel is a JavaScript compiler.

Babel 是一个工具链，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。

## 为何 proxy 不能被 polyfill

如 Class 可以用 function 模拟<br/>
如 Promise 可以用 callback 模拟<br/>
但 Proxy 的功能用 Object.defineProperty 无法模拟<br/>

## Babel Polyfill 是什么

Polyfill 是一种 JavaScript 的 API 的 Polyfill，用来模拟实现一些 JavaScript 的新特性，使得这些新特性能够在旧的浏览器中运行

Polyfill 是 core-js（不支持 generator 的转换） 和 regenerate 的集合

## babel-polyfill 和 babel-runtime、babel-plugin-transform-runtime 的区别

<a target="_blank" href="https://juejin.cn/post/6844903869353295879?searchId=20230718094626F6E170D8E496316FE991">参考</a>

1、babel-polyfill 污染全局变量，会影响其他库(栗子: window.xxx === xxx)<br/>
全部加载不会按需引入体积非常大

2、babel-runtime 不会污染全局变量，不会影响其他库(重新定义名称 如\_promise = )<br/>
按需加载 但是需要全部手动引入

3、babel-plugin-transform-runtime 装了就不需要装 babel-runtime 了，因为前者依赖后者。 总的来说，babel-plugin-transform-runtime 就是可以在我们使用新 API 时 自动 import babel-runtime 里面的 polyfill，具体插件做了以下三件事情：

当我们使用 async/await 时，自动引入 babel-runtime/regenerator  
当我们使用 ES6 的静态事件或内置对象时，自动引入 babel-runtime/core-js  
移除内联 babel helpers 并替换使用 babel-runtime/helpers 来替换

4、babel-plugin-transform-runtime 优点：

不会污染全局变量  
多次使用只会打包一次  
依赖统一按需引入,无重复引入,无多余引入  
避免 babel 编译的工具函数在每个模块里重复出现，减小库和工具包的体积

5、产出第三方 lib 要用 babel-runtime<br/>

在 Babel7.4.0 版本 之前，通常我们会安装 babel-polyfill 或 @babel/polyfill 来处理实例方法和 ES+新增的内置函数，而 7.4.0 之后，当我们选择安装 @babel/polyfill 时，会收到警告 .<br/>

所以在针对 Babel >= 7.4.0 的情况，我们需要安装 core-js 替代 babel-polyfill<br/>

思考： 到这里是不是觉得项目使用 polyfill，写代码已经可以 6 的飞起了，哈哈~。那我们假设一种应用场景，假设我们需要发布一个类库给到别人使用，我们使用 polyfill 的方式引入了内置函数 Promise，不巧的是别人的本地代码里也封装了一个函数叫 Promise，完蛋，真李逵碰上了假李逵，你说你死不死￣ □ ￣。
所以为了和平，这里就需要我们的 @babel/runtime 粉墨登场了。<br/>

babel-runtime 一般应用于两种场景：<br/>

1、开发类库/工具（生成不污染全局空间和内置对象原型的代码）<br/>
2、借助 @babel/runtime 中帮助函数（helper function）移除冗余工具函数<br/>

Babel < 7.4.0
开发类库, 选择 @babel/runtime
内部项目，@babel/polyfill

Babel >= 7.4.0，啥也不说，直接上 @babel/runtime 吧，因为你要的全都有啊

## Babel 是如何编译 Class 的

就拿下面的类来说：

```js
class Person {
  constructor({ name }) {
    this.name = name;
    this.getSex = function () {
      return 'boy';
    };
  }
  getName() {
    return this.name;
  }
  static getLook() {
    return 'sunshine';
  }
}
```

当我们在使用 babel 的这些 plugin 或者使用 preset 的时候，有一个配置属性 loose 它默认是为 false，在这样的条件下：

Class 编译后：

总体来说 Class 会被封装成一个 IIFE 立即执行函数<br/>
立即执行函数返回的是一个与类同名的构造函数<br/>
实例属性和方法定义在构造函数内(如 name 和 getSex())<br/>
类内部声明的属性方法(getName)和静态属性方法(getLook)是会被 Object.defineProperty 所处理，将其可枚举属性设置为 false
编译后的代码：

```js
'use strict';
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var Person = (function () {
  function Person(_ref) {
    var name = _ref.name;

    _classCallCheck(this, Person);

    this.name = name;

    this.getSex = function () {
      return 'boy';
    };
  }

  _createClass(
    Person,
    [
      {
        key: 'getName',
        value: function getName() {
          return this.name;
        },
      },
    ],
    [
      {
        key: 'getLook',
        value: function getLook() {
          return 'sunshine';
        },
      },
    ],
  );

  return Person;
})();
```

为什么 Babel 对于类的处理会使用 Object.defineProperty 这种形式呢？它和直接使用原型链有什么不同吗？

通过原型链声明的属性和方法是可枚举的，也就是可以被 for...of...搜寻到
而类内部声明的方法是不可枚举的
所以，babel 为了符合 ES6 真正的语义，编译类时采取了 Object.defineProperty 来定义原型方法。

但是可以通过设置 babel 的 loose 模式(宽松模式)为 true，它会不严格遵循 ES6 的语义，而采取更符合我们平常编写代码时的习惯去编译代码，在.babelrc 中可以如下设置：

{
"presets": [["env", { "loose": true }]]
}

比如上述的 Person 类的属性方法将会编译成直接在原型链上声明方法：

```js
'use strict';
var Person = (function () {
  function Person(_ref) {
    var name = _ref.name;
    this.name = name;

    this.getSex = function () {
      return 'boy';
    };
  }

  var _proto = Person.prototype;

  _proto.getName = function getName() {
    return this.name;
  };

  Person.getLook = function getLook() {
    return 'sunshine';
  };

  return Person;
})();
```

总结

当使用 Babel 编译时默认的 loose 为 false，即非宽松模式

无论哪种模式，转换后的定义在类内部的属性方法是被定义在构造函数的原型对象上的；静态属性被定义到构造函数上

只不过非宽松模式时，这些属性方法会被\_createClass 函数处理，函数内通过 Object.defineProperty()设置属性的可枚举值 enumerable 为 false

由于在\_createClass 函数内使用了 Object，所以非宽松模式下是会产生副作用的，而宽松模式下不会。

webpack 中的 UglifyJS 依旧还是会将宽松模式认为是有副作用的，而 rollup 有程序流程分析的功能，可以更好的判断代码是否真正产生副作用，所以它会认为宽松模式没有副作用。

(副作用大致理解为：一个函数会、或者可能会对函数外部变量产生影响的行为。)

## @babel/standalone

@babel/standalone 是 Babel 的一个独立运行版本，它允许你在浏览器中直接使用 Babel 的功能，而无需构建工具或 Node.js 环境。它通常用于以下场景：

客户端开发与调试：在开发过程中，你可以直接在 HTML 文件中引入 Babel，快速测试 ES6+ 代码，而不需要设置复杂的构建流程。

在线代码编辑器：一些在线代码编辑器（比如 JSFiddle、CodePen 等）可以使用 @babel/standalone 来即时转换输入的现代 JavaScript 代码，并运行它。

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Babel Standalone Example</title>
    <script src="https://g.alicdn.com/code/lib/react/18.2.0/umd/react.development.js"></script>
    <script src="https://g.alicdn.com/code/lib/react-dom/18.2.0/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>


</head>

<body>
    <script type="text/babel">
        const Greeting = () => {
            return <h1>Hello, Worl21d!</h1>;
        };

        ReactDOM.render(<Greeting />, document.getElementById('root'));
    </script>
    <div id="root"></div>
</body>

</html>
```

## "swc-loader"和 babel-loader 的区别

`swc-loader` 和 `babel-loader` 都是用于将现代 JavaScript 代码转译为浏览器兼容代码的工具，通常在使用 Webpack 的项目中使用。尽管它们的主要目标相似，但它们有一些重要的区别：

### 1. 基本原理

- **Babel**：

  - Babel 是一个广泛使用的 JavaScript 转译器，它将现代 JavaScript（ES6+）代码转换为兼容的 JavaScript 代码（例如 ES5）。
  - Babel 使用解析器（如 Babel Parser）将代码解析为抽象语法树（AST），然后根据设定的插件或预设转换 AST，最后生成新的代码。
  - 由于其灵活性和丰富的插件生态，Babel 用户能够对代码的转译过程进行精细控制。

- **SWC**：
  - SWC（Speedy Web Compiler）是一个使用 Rust 编写的编译器，旨在提供更高的性能。
  - SWC 也将现代 JavaScript 代码转译为兼容的 JavaScript，但它的速度通常比 Babel 更快，因为 SWC 使用的是 Rust 语言的高效性。
  - SWC 设计之初就考虑了速度和内存使用的优化，因此在性能上相较于 Babel 更具优势。

### 2. 性能

- **性能**：
  - `swc-loader`：由于它是用 Rust 编写的，通常能在构建速度上显著优于 Babel，特别是在较大的代码库中。
  - `babel-loader`：虽然 Babel 的性能在不断提高时，它的速度通常比 SWC 更慢，尤其是在处理大型应用程序时。

### 3. 配置和生态系统

- **生态系统**：
  - `babel-loader`：Babel 拥有更成熟的生态系统，有大量的插件和预设可以选择，用户的灵活性更高。它支持很多功能（例如 TypeScript、React 等）并有良好的社区支持。
  - `swc-loader`：SWC 的生态相对较新，支持的插件和预设数量可能比 Babel 少，但它正在快速发展。SWC 有一些内置的选项(例如支持 TypeScript 和 JSX)，通常能够满足大部分基本需求。

### 4. 兼容性

- **兼容性**：
  - 两者都可以与现代框架（如 React、Vue 等）一起使用，可以转换 JSX 和 TypeScript，但是 SWC 在某些特殊情况下的运行效果可能不如 Babel 因为其生态系统相对较小。

### 5. 教程和学习曲线

- **学习曲线**：
  - `babel-loader`：由于 Babel 在社区中的普及和文档丰富，学习资源更为广泛。
  - `swc-loader`：SWC 的社区和文档在不断扩展，虽然当前的资源不如 Babel 丰富，但也不是很难学会。

### 总结

- 如果你在意构建速度，且愿意尝试较新的技术，`swc-loader` 是一个不错的选择。
- 如果你需要丰富的插件支持和更无缝的生态集成，特别是与 Babel 相关的项目，`babel-loader` 可能是更好的选择。

选择哪个工具主要取决于你的项目需求、对性能的要求以及你的团队对新工具的适应能力。
