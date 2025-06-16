"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[5238],{87351:function(s,r,e){e.r(r);var a=e(72269),_=e(93359),p=e(61788),c=e(19977),h=e(91558),u=e(24268),m=e(96057),x=e(85939),i=e(53683),o=e(80936),l=e(67294),t=e(49573),n=e(85893);function d(){return(0,n.jsx)(i.dY,{children:(0,n.jsx)(l.Suspense,{fallback:(0,n.jsx)(o.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h2",{id:"\u7F16\u8BD1\u539F\u7406",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u7F16\u8BD1\u539F\u7406",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u7F16\u8BD1\u539F\u7406"]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("a",{href:"https://github.com/jamiebuilds/the-super-tiny-compiler",children:t.texts[0].value}),t.texts[1].value,(0,n.jsx)("br",{}),(0,n.jsx)("a",{href:"https://www.yuque.com/lpldplws/web/abbfgk?singleDoc#lxivQ",children:t.texts[2].value}),t.texts[3].value,(0,n.jsx)("br",{}),t.texts[4].value,(0,n.jsx)("br",{})]}),(0,n.jsxs)("h3",{id:"\u8FC7\u7A0B",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u8FC7\u7A0B",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u8FC7\u7A0B"]}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:t.texts[5].value}),(0,n.jsx)("li",{children:t.texts[6].value}),(0,n.jsx)("li",{children:t.texts[7].value}),(0,n.jsx)("li",{children:t.texts[8].value})]}),(0,n.jsxs)("h3",{id:"\u7B80\u5355\u6817\u5B50",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u7B80\u5355\u6817\u5B50",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u7B80\u5355\u6817\u5B50"]}),(0,n.jsx)(u.Z,{lang:"js",children:t.texts[9].value}),(0,n.jsxs)("h2",{id:"typescript-\u7F16\u8BD1\u539F\u7406",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#typescript-\u7F16\u8BD1\u539F\u7406",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"TypeScript \u7F16\u8BD1\u539F\u7406"]}),(0,n.jsx)("p",{children:t.texts[10].value}),(0,n.jsx)("p",{children:t.texts[11].value}),(0,n.jsx)("p",{children:t.texts[12].value}),(0,n.jsx)("p",{children:t.texts[13].value}),(0,n.jsx)("p",{children:t.texts[14].value}),(0,n.jsx)("p",{children:t.texts[15].value}),(0,n.jsx)("p",{children:t.texts[16].value})]})})})})}r.default=d},49573:function(s,r,e){e.r(r),e.d(r,{texts:function(){return a}});const a=[{value:"https://github.com/jamiebuilds/the-super-tiny-compiler",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:"https://www.yuque.com/lpldplws/web/abbfgk?singleDoc#lxivQ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" \u5BC6\u7801\uFF1Auteo",paraId:0,tocIndex:0},{value:"1 \u3001\u8BCD\u6CD5\u5206\u6790 (\u751F\u6210 tokens) (input => tokenizer => tokens)",paraId:1,tocIndex:1},{value:"2\u3001\u8BED\u6CD5\u5206\u6790 \uFF08tokens \u751F\u6210 AST\uFF09 (tokens => parser => AST)",paraId:1,tocIndex:1},{value:"3\u3001\u4EE3\u7801\u8F6C\u6362 (AST => AST) (AST => transformer => new AST)",paraId:1,tocIndex:1},{value:"4\u3001\u751F\u6210\u4EE3\u7801 (AST => code \u76EE\u6807\u4EE3\u7801) (new ast => generator => code)",paraId:1,tocIndex:1},{value:`const input = '(add 2 (subtract 4 2))';
const output = 'add(2, subtract(4, 2));';

const tokens = [
  { type: 'paren', value: '(' },
  { type: 'name', value: 'add' },
  { type: 'number', value: '2' },
  { type: 'paren', value: '(' },
  { type: 'name', value: 'subtract' },
  { type: 'number', value: '4' },
  { type: 'number', value: '2' },
  { type: 'paren', value: ')' },
  { type: 'paren', value: ')' },
];

const ast = {
  type: 'Program',
  body: [
    {
      type: 'CallExpression',
      name: 'add',
      params: [
        {
          type: 'NumberLiteral',
          value: '2',
        },
        {
          type: 'CallExpression',
          name: 'subtract',
          params: [
            {
              type: 'NumberLiteral',
              value: '4',
            },
            {
              type: 'NumberLiteral',
              value: '2',
            },
          ],
        },
      ],
    },
  ],
};

const newAst = {
  type: 'Program',
  body: [
    {
      type: 'ExpressionStatement',
      expression: {
        type: 'CallExpression',
        callee: {
          type: 'Identifier',
          name: 'add',
        },
        arguments: [
          {
            type: 'NumberLiteral',
            value: '2',
          },
          {
            type: 'CallExpression',
            callee: {
              type: 'Identifier',
              name: 'subtract',
            },
            arguments: [
              {
                type: 'NumberLiteral',
                value: '4',
              },
              {
                type: 'NumberLiteral',
                value: '2',
              },
            ],
          },
        ],
      },
    },
  ],
};

function tokenizer(input) {
  let tokens = [];
  let current = 0;

  while (current < input.length) {
    let char = input[current];
    if (char === '(') {
      tokens.push({
        type: 'paren',
        value: '(',
      });
      current++;
      continue;
    }
    if (char === ')') {
      tokens.push({
        type: 'paren',
        value: ')',
      });
      current++;
      continue;
    }
    if (/\\s/.test(char)) {
      current++;
      continue;
    }
    if (/[0-9]/.test(char)) {
      let value = '';
      while (/[0-9]/.test(char)) {
        value += char;
        char = input[++current];
      }
      tokens.push({
        type: 'number',
        value,
      });
      current++;
      continue;
    }
    if (char === '"') {
      let value = '';
      char = input[++current];
      while (char !== '"') {
        value += char;
        char = input[++current];
      }
      char = input[++current];
      tokens.push({
        type: 'string',
        value,
      });
      continue;
    }
    if (/[a-z]/i.test(char)) {
      let value = '';
      while (/[a-z]/i.test(char)) {
        value += char;
        char = input[++current];
      }
      char = input[++current];
      tokens.push({
        type: 'name',
        value,
      });
      continue;
    }
    throw new Error('\u65E0\u6CD5\u8BC6\u522B\u7684\u7C7B\u578B', char);
  }
  return tokens;
}
console.log(tokenizer(input));

const parser = (tokens) => {
  let current = 0;
  function walk() {
    let token = tokens[current];
    if (token.type === 'number') {
      current++;
      return {
        type: 'NumberLiteral',
        value: token.value,
      };
    }
    if (token.type === 'string') {
      current++;
      return {
        type: 'StringLiteral',
        value: token.value,
      };
    }
    if (token.type === 'paren' && token.value === '(') {
      token = tokens[++current];

      let node = {
        type: 'CallExpression',
        value: token.value,
        params: [],
      };
      token = tokens[++current];

      while (
        token.type !== 'paren' ||
        (token.type === 'paren' && token.value !== ')')
      ) {
        node.params.push(walk());
        token = tokens[current];
      }
      current++;
      return node;
    }
    throw new TypeError(\`\${token.type}\`);
  }
  let ast = {
    type: 'Program',
    body: [],
  };
  while (current < tokens.length) {
    ast.body.push(walk());
  }
  return ast;
};

console.log(JSON.stringify(parser(tokens)));

function traverser(ast, visitor) {
  function traverseArrary(array, parent) {
    array.forEach((child) => {
      traverseNode(child, parent);
    });
  }
  function traverseNode(node, parent) {
    let methods = visitor[node.type];
    if (methods && methods.enter) {
      methods.enter(node, parent);
    }
    switch (node.type) {
      case 'Program':
        traverseArrary(node.body, node);
        break;
      case 'CallExpression':
        traverseArrary(node.params, node);
        break;
      case 'NumberLiteral':
      case 'StringLiteral':
        break;
      default:
        throw new TypeError(node.type);
    }
    if (methods && methods.exit) {
      methods.exit(node, parent);
    }
  }
  traverseNode(ast, null);
}

function transformer(ast) {
  let newAst = {
    type: 'Program',
    body: [],
  };
  ast._context = newAst.body;
  traverser(ast, {
    NumberLiteral: {
      enter(node, parent) {
        parent._context.push({
          type: 'NumberLiteral',
          value: node.value,
        });
      },
    },
    StringLiteral: {
      enter(node, parent) {
        parent._context.push({
          type: 'StringLiteral',
          value: node.value,
        });
      },
    },
    CallExpression: {
      enter(node, parent) {
        let expression = {
          type: 'CallExpression',
          callee: {
            type: 'Identifier',
            name: node.name,
          },
          arguments: [],
        };
        node._context = expression.arguments;
        if (parent.type !== 'CallExpression') {
          expression = {
            type: 'ExpressionStatement',
            expression,
          };
        }
        parent._context.push(expression);
      },
    },
  });
  return newAst;
}
`,paraId:2,tocIndex:2},{value:"1\u3001Program : \u5728\u7F16\u8BD1\u5F00\u59CB\u65F6\u521B\u5EFA\u4E3A\u4E00\u4E2A\u540D\u4E3A Program \u7F16\u8BD1\u4E0A\u4E0B\u6587\u5BF9\u8C61\uFF0C\u901A\u8FC7 \u7F16\u8BD1\u9009\u9879 \u548C \u8F93\u5165\u6587\u4EF6\uFF081 \u4E2A\u6216\u591A\u4E2A\uFF0C\u6211\u4EEC\u8FDB\u884C\u5355\u6587\u4EF6\u5206\u6790\u65F6\u901A\u5E38\u53EA\u4F20 1 \u4E2A\uFF09\u8FD9\u4E24\u90E8\u5206\u914D\u7F6E\uFF0C\u52A0\u8F7D\u6240\u6709\u8F93\u5165\u6587\u4EF6\u4EE5\u53CA\u8F93\u5165\u6587\u4EF6\u4E2D imports \u5BFC\u5165\u7684\u6587\u4EF6\uFF08ps : \u52A0\u8F7D\u5F88\u591A\u6587\u4EF6\u662F\u56E0\u4E3A\u5728\u7F16\u8BD1\u8FC7\u7A0B\u4E2D\u4F1A\u8FDB\u884C\u7C7B\u578B\u68C0\u67E5\uFF0C\u800C\u7C7B\u578B\u4FE1\u606F\u53EF\u80FD\u9700\u8981\u7ED3\u5408\u591A\u4E2A\u6587\u4EF6\u5F97\u51FA\uFF09\u3002",paraId:3,tocIndex:3},{value:"2\u3001Tsconfig : TypeScript \u7F16\u8BD1\u914D\u7F6E\u4FE1\u606F\uFF0C\u5176\u5B9E\u5C31\u662F TS \u9879\u76EE\u4E2D\u7684 tsconfig.json \u914D\u7F6E\u6587\u4EF6\u3002",paraId:4,tocIndex:3},{value:"3\u3001Tokens : Scanner \u626B\u63CF\u6E90\u4EE3\u7801\u8FDB\u884C\u8BCD\u6CD5\u5206\u6790\u540E\u751F\u6210\u7684 Token \u6D41\uFF08\u8BCD\u6CD5\u5206\u6790\uFF09\u3002",paraId:5,tocIndex:3},{value:"4\u3001AST : Parser \u5C06 Token \u6D41\u8FDB\u884C\u8BED\u6CD5\u5206\u6790\uFF0C\u751F\u6210 AST \u5BF9\u8C61\u3002",paraId:6,tocIndex:3},{value:"5\u3001Symbol : Binder \u4F1A\u521B\u5EFA\u4E00\u4E2A\u7528\u6765\u5B58\u50A8\u6BCF\u4E2A AST \u8282\u70B9\u548C\u5BF9\u5E94\u7B26\u53F7 Symbol \u7684\u6620\u5C04\u8868\uFF0C\u5F53\u521D\u6B21\u5B9A\u4E49\u6216\u8005\u4ECE import \u5BFC\u5165\u4E00\u4E2A\u53D8\u91CF\u3001\u51FD\u6570\u6216\u7C7B\u65F6\uFF0C\u4F1A\u4E3A\u5176\u521B\u5EFA\u4E00\u4E2A\u7B26\u53F7\uFF08\u552F\u4E00\u6807\u8BC6\u7B26\uFF09\uFF0C\u5F53\u5728\u5176\u4ED6\u5730\u65B9\u4F7F\u7528\u76F8\u540C\u540D\u79F0\u65F6\uFF0C\u5C31\u67E5\u8868\u627E\u51FA\u8FD9\u4E2A\u540D\u79F0\u6240\u4EE3\u8868\u7684\u7B26\u53F7, \u901A\u8FC7 symbol \u53EF\u4EE5\u5224\u5B9A AST \u8282\u70B9\u7684\u8BED\u4E49\u4E0A\u4E0B\u6587\u3002",paraId:7,tocIndex:3},{value:"6\u3001Checker : Checker \u7528\u6765\u68C0\u67E5\u4EE3\u7801\u4E2D\u53D8\u91CF\u7684\u7C7B\u578B\u4FE1\u606F\uFF0C\u63D0\u4F9B\u4E86\u4E00\u4E9B API \u83B7\u53D6\u8282\u70B9\u7C7B\u578B\u53CA\u5173\u8054\u4FE1\u606F\u3002",paraId:8,tocIndex:3},{value:"7\u3001Emitter : \u5904\u7406 Node \u8282\u70B9\uFF0C\u5C06 AST \u8F6C\u5316\u4E3A js\u3001d.ts\u3001map \u7B49\u7F16\u8BD1\u4EA7\u7269\uFF0C\u4EE3\u7801\u5206\u6790\u4E0D\u4F1A\u6D89\u53CA\u6B64\u9636\u6BB5\uFF0C\u53EF\u6682\u65F6\u5FFD\u7565\u5B83\u3002",paraId:9,tocIndex:3}]}}]);
