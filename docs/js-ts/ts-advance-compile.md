---
nav: Js
toc: content
group: TS
mobile: false
title: 编译原理
---

## 编译原理

https://github.com/jamiebuilds/the-super-tiny-compiler <br/>
https://www.yuque.com/lpldplws/web/abbfgk?singleDoc#lxivQ <br/> 密码：uteo<br/>

### 过程

- 1 、词法分析 (生成 tokens) (input => tokenizer => tokens)
- 2、语法分析 （tokens 生成 AST） (tokens => parser => AST)
- 3、代码转换 (AST => AST) (AST => transformer => new AST)
- 4、生成代码 (AST => code 目标代码) (new ast => generator => code)

### 简单栗子

```js
const input = '(add 2 (subtract 4 2))';
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
    if (/\s/.test(char)) {
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
    throw new Error('无法识别的类型', char);
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
    throw new TypeError(`${token.type}`);
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
```

## TypeScript 编译原理

1、Program : 在编译开始时创建为一个名为 Program 编译上下文对象，通过 编译选项 和 输入文件（1 个或多个，我们进行单文件分析时通常只传 1 个）这两部分配置，加载所有输入文件以及输入文件中 imports 导入的文件（ps : 加载很多文件是因为在编译过程中会进行类型检查，而类型信息可能需要结合多个文件得出）。

2、Tsconfig : TypeScript 编译配置信息，其实就是 TS 项目中的 tsconfig.json 配置文件。

3、Tokens : Scanner 扫描源代码进行词法分析后生成的 Token 流（词法分析）。

4、AST : Parser 将 Token 流进行语法分析，生成 AST 对象。

5、Symbol : Binder 会创建一个用来存储每个 AST 节点和对应符号 Symbol 的映射表，当初次定义或者从 import 导入一个变量、函数或类时，会为其创建一个符号（唯一标识符），当在其他地方使用相同名称时，就查表找出这个名称所代表的符号, 通过 symbol 可以判定 AST 节点的语义上下文。

6、Checker : Checker 用来检查代码中变量的类型信息，提供了一些 API 获取节点类型及关联信息。

7、Emitter : 处理 Node 节点，将 AST 转化为 js、d.ts、map 等编译产物，代码分析不会涉及此阶段，可暂时忽略它。
