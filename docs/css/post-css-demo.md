---
toc: content
group:
  title: 预编译和PostCSS
  order: 3
title: 手写一个 PostCss 插件
---

# 手写一个 PostCss 插件

```js
// 该插件要实现以下几点功能：

// 在 CSS 文件的顶部添加版权声明注释信息。
// 对于文件中的所有选择器，根据指定的规则进行转换。
// 对于指定属性值，根据指定的规则进行转换。
// 移除不需要的 CSS 规则和声明。
// 根据指定的条件添加新的 CSS 规则和声明。
// 在选择器添加上指定的前缀。

// 要处理的 CSS 样式代码

// #app {
//     width: 100%;
//     height: 100vh;
//  }
//  .container {
//     margin: 20px;
//     padding: 10px;
//     background-color: #ffffff;
//   }
//  .title {
//     font-size: 16px;
//     color: red;
//   }

const postcss = require('postcss');

function myComplexPlugin(options) {
  const {
    prefix,
    copyright,
    selectorRules,
    valueConverter,
    removeSelectors,
    removeDeclarations,
    newSelectors,
    newDeclarations,
  } = options;

  return {
    postcssPlugin: 'postcss-plugin-complex',
    Once(root, { result }) {
      // 创建版权声明注释节点
      const comment = postcss.comment({ text: copyright });

      // 将注释节点插入到根节点的最顶部
      root.prepend(comment);
    },

    Rule(rule, { result }) {
      // 处理选择器转换
      rule.selectors = rule.selectors.map((selector) => {
        let updatedSelector = selector;

        // 根据规则转换选择器
        Object.keys(selectorRules).forEach((rule) => {
          updatedSelector = updatedSelector.replace(rule, selectorRules[rule]);
        });

        return `${updatedSelector}`;
      });

      // 移除不需要的 CSS 规则
      if (removeSelectors.includes(rule.selector)) {
        rule.remove();
      }
    },

    Declaration(decl, { result }) {
      const prop = decl.prop;
      const value = decl.value;

      // 处理属性值转换
      Object.keys(valueConverter).forEach((property) => {
        if (prop.includes(property)) {
          const converter = valueConverter[property];
          decl.value = converter(value);
        }
      });

      // 移除不需要的 CSS 声明
      if (removeDeclarations.includes(decl.prop)) {
        decl.remove();
      }
    },

    OnceExit(root, { result }) {
      // 添加新的 CSS 规则和声明
      Object.keys(newSelectors).forEach((selector) => {
        const rule = postcss.rule({ selector });

        Object.keys(newDeclarations).forEach((property) => {
          const value = newDeclarations[property];
          const declaration = postcss.decl({ prop: property, value });

          rule.append(declaration);
        });

        root.append(rule);
      });
      root.nodes
        .filter((it) => it.type === 'rule' && it.selector.startsWith('.'))
        .forEach((it) => {
          it.selector = `.${prefix}${it.selector.replace('.', '')}`;
        });
    },
  };
}

// 规则定义
const selectorRules = {
  '.container': '.custom-container',
  '.title': '.custom-title',
};

// 属性值转换函数定义
const valueConverters = {
  margin: (value) => {
    const parsedValue = parseInt(value, 10);
    return `${parsedValue * 0.5}px`; // 假设按照一般的规则进行转换
  },
  'background-color': (value) => {
    return value.toUpperCase(); // 将颜色值转换为大写形式
  },
};

// 需要移除的选择器和声明
const removeSelectors = [];
const removeDeclarations = ['color'];

// 需要添加的新选择器和声明
const newSelectors = {
  '.new-selector': {
    color: 'blue',
    'font-size': '14px',
  },
};

const newDeclarations = {
  padding: '5px',
  border: '1px solid black',
};

// 插件配置选项
const pluginOptions = {
  prefix: 'qqx-',
  copyright: `
             @auth: qqx
             @email: 353087890@qq.com 
            `,
  selectorRules: selectorRules,
  valueConverter: valueConverters,
  removeSelectors: removeSelectors,
  removeDeclarations: removeDeclarations,
  newSelectors: newSelectors,
  newDeclarations: newDeclarations,
};

const css = `#app {
    width: 100%;
    height: 100vh;
 }
 .container {
    margin: 20px;
    padding: 10px;
    background-color: #ffffff;
  }
 .title {
    font-size: 16px;
    color: red;
  }
`;

const result = postcss([myComplexPlugin(pluginOptions)]).process(css, {
  /* options */
});

console.log(result.css);

// /*
//              @auth: qqx
//              @email: 353087890@qq.com
//              */
//              #app {
//               width: 100%;
//               height: 100vh;
//            }
//            .qqx-custom-container {
//               margin: 0px;
//               padding: 10px;
//               background-color: #FFFFFF;
//             }
//            .qqx-custom-title {
//               font-size: 16px;
//             }
//            .qqx-new-selector {
//               padding: 5px;
//               border: 1px solid black;
//           }
```
