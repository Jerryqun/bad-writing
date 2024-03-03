---
nav: React
group: 常用包
toc: content
title: react-is
---

## react-is

<a target="_blank" href="https://www.npmjs.com/package/react-is">参考</a>

```js
import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactIs from 'react-is';

const div = document.createElement('div');
const portal = ReactDOM.createPortal(<div />, div);

ReactIs.isPortal(portal); // true
ReactIs.typeOf(portal) === ReactIs.Portal; // true
```

## react-helmet

```js
/**
 * React动态修改页面title之神器react-helmet
 * http://www.daimaku.net/post/view/12662
 * https://www.npmjs.com/package/react-helmet
 * npm install react-helmet --save
 */

import React from 'react';
import { Helmet } from 'react-helmet';

class Application extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="http://example.com/" />
        </Helmet>
        ...
      </div>
    );
  }
}

/**
 * 特性：

支持所有有效的头标签，title base meta link script noscript style

支持body html title标签的属性

支持服务端渲染

嵌套组件或后面的组件会覆盖重复的head标签更改

如果你的 React 应用程序需要修改动态的头部信息，而且需要考虑服务端渲染的性能问题，
那么建议使用 react-helmet-async。它可以帮助我们很好地完成这项任务。
注意：在使用 react-helmet-async 时，控制台有可能会出现 act() 警告。
这是因为 react-helmet-async 在组件加载时会异步执行，所以需要完全加载后才能使用。
版权声明：本文为原创文章，版权由本站（JavaScript中文网）拥有，严禁未经允许复制、转载、传播、篡改等任何行为，如需转载，请联系本站管理员获取书面授权
 */
```
