"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[6397],{59436:function(r,t,n){n.r(t);var o=n(72269),u=n(93359),d=n(61788),m=n(19977),p=n(91558),s=n(24268),v=n(96057),h=n(85939),l=n(53683),_=n(80936),i=n(67294),a=n(29187),e=n(85893);function c(){return(0,e.jsx)(l.dY,{children:(0,e.jsx)(i.Suspense,{fallback:(0,e.jsx)(_.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"\u624B\u5199\u4E00\u4E2A-postcss-\u63D2\u4EF6",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u624B\u5199\u4E00\u4E2A-postcss-\u63D2\u4EF6",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u624B\u5199\u4E00\u4E2A PostCss \u63D2\u4EF6"]}),(0,e.jsx)(s.Z,{lang:"js",children:a.texts[0].value})]})})})})}t.default=c},29187:function(r,t,n){n.r(t),n.d(t,{texts:function(){return o}});const o=[{value:`// \u8BE5\u63D2\u4EF6\u8981\u5B9E\u73B0\u4EE5\u4E0B\u51E0\u70B9\u529F\u80FD\uFF1A

// \u5728 CSS \u6587\u4EF6\u7684\u9876\u90E8\u6DFB\u52A0\u7248\u6743\u58F0\u660E\u6CE8\u91CA\u4FE1\u606F\u3002
// \u5BF9\u4E8E\u6587\u4EF6\u4E2D\u7684\u6240\u6709\u9009\u62E9\u5668\uFF0C\u6839\u636E\u6307\u5B9A\u7684\u89C4\u5219\u8FDB\u884C\u8F6C\u6362\u3002
// \u5BF9\u4E8E\u6307\u5B9A\u5C5E\u6027\u503C\uFF0C\u6839\u636E\u6307\u5B9A\u7684\u89C4\u5219\u8FDB\u884C\u8F6C\u6362\u3002
// \u79FB\u9664\u4E0D\u9700\u8981\u7684 CSS \u89C4\u5219\u548C\u58F0\u660E\u3002
// \u6839\u636E\u6307\u5B9A\u7684\u6761\u4EF6\u6DFB\u52A0\u65B0\u7684 CSS \u89C4\u5219\u548C\u58F0\u660E\u3002
// \u5728\u9009\u62E9\u5668\u6DFB\u52A0\u4E0A\u6307\u5B9A\u7684\u524D\u7F00\u3002

// \u8981\u5904\u7406\u7684 CSS \u6837\u5F0F\u4EE3\u7801

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

const PostCss = require('PostCss');

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
    PostCssPlugin: 'PostCss-plugin-complex',
    Once(root, { result }) {
      // \u521B\u5EFA\u7248\u6743\u58F0\u660E\u6CE8\u91CA\u8282\u70B9
      const comment = PostCss.comment({ text: copyright });

      // \u5C06\u6CE8\u91CA\u8282\u70B9\u63D2\u5165\u5230\u6839\u8282\u70B9\u7684\u6700\u9876\u90E8
      root.prepend(comment);
    },

    Rule(rule, { result }) {
      // \u5904\u7406\u9009\u62E9\u5668\u8F6C\u6362
      rule.selectors = rule.selectors.map((selector) => {
        let updatedSelector = selector;

        // \u6839\u636E\u89C4\u5219\u8F6C\u6362\u9009\u62E9\u5668
        Object.keys(selectorRules).forEach((rule) => {
          updatedSelector = updatedSelector.replace(rule, selectorRules[rule]);
        });

        return \`\${updatedSelector}\`;
      });

      // \u79FB\u9664\u4E0D\u9700\u8981\u7684 CSS \u89C4\u5219
      if (removeSelectors.includes(rule.selector)) {
        rule.remove();
      }
    },

    Declaration(decl, { result }) {
      const prop = decl.prop;
      const value = decl.value;

      // \u5904\u7406\u5C5E\u6027\u503C\u8F6C\u6362
      Object.keys(valueConverter).forEach((property) => {
        if (prop.includes(property)) {
          const converter = valueConverter[property];
          decl.value = converter(value);
        }
      });

      // \u79FB\u9664\u4E0D\u9700\u8981\u7684 CSS \u58F0\u660E
      if (removeDeclarations.includes(decl.prop)) {
        decl.remove();
      }
    },

    OnceExit(root, { result }) {
      // \u6DFB\u52A0\u65B0\u7684 CSS \u89C4\u5219\u548C\u58F0\u660E
      Object.keys(newSelectors).forEach((selector) => {
        const rule = PostCss.rule({ selector });

        Object.keys(newDeclarations).forEach((property) => {
          const value = newDeclarations[property];
          const declaration = PostCss.decl({ prop: property, value });

          rule.append(declaration);
        });

        root.append(rule);
      });
      root.nodes
        .filter((it) => it.type === 'rule' && it.selector.startsWith('.'))
        .forEach((it) => {
          it.selector = \`.\${prefix}\${it.selector.replace('.', '')}\`;
        });
    },
  };
}

// \u89C4\u5219\u5B9A\u4E49
const selectorRules = {
  '.container': '.custom-container',
  '.title': '.custom-title',
};

// \u5C5E\u6027\u503C\u8F6C\u6362\u51FD\u6570\u5B9A\u4E49
const valueConverters = {
  margin: (value) => {
    const parsedValue = parseInt(value, 10);
    return \`\${parsedValue * 0.5}px\`; // \u5047\u8BBE\u6309\u7167\u4E00\u822C\u7684\u89C4\u5219\u8FDB\u884C\u8F6C\u6362
  },
  'background-color': (value) => {
    return value.toUpperCase(); // \u5C06\u989C\u8272\u503C\u8F6C\u6362\u4E3A\u5927\u5199\u5F62\u5F0F
  },
};

// \u9700\u8981\u79FB\u9664\u7684\u9009\u62E9\u5668\u548C\u58F0\u660E
const removeSelectors = [];
const removeDeclarations = ['color'];

// \u9700\u8981\u6DFB\u52A0\u7684\u65B0\u9009\u62E9\u5668\u548C\u58F0\u660E
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

// \u63D2\u4EF6\u914D\u7F6E\u9009\u9879
const pluginOptions = {
  prefix: 'qqx-',
  copyright: \`
             @auth: qqx
             @email: 353087890@qq.com 
            \`,
  selectorRules: selectorRules,
  valueConverter: valueConverters,
  removeSelectors: removeSelectors,
  removeDeclarations: removeDeclarations,
  newSelectors: newSelectors,
  newDeclarations: newDeclarations,
};

const css = \`#app {
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
\`;

const result = PostCss([myComplexPlugin(pluginOptions)]).process(css, {
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
`,paraId:0,tocIndex:0}]}}]);
