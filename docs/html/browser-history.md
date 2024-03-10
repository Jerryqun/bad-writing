---
nav: Html
group:
  title: 浏览器
  order: 1
toc: content
title: history
mobile: false
---

## history action 信息

Web 浏览器的 history 对象是 Window 接口的一部分，它提供了对浏览器会话历史的访问，允许开发人员操纵浏览器历史记录，用于在单页应用中创建前进和后退导航的体验。

关于 history 对象中的 action 信息，这个术语通常与 React Router 这样的前端路由库相关联，而不是原生的 Web API。在 React Router 中，action 是一个属性，用于描述如何触发导航到当前页面的行为

- PUSH : 当新页面被压入历史堆栈时，例如，当用户点击一个链接导致页面跳转，或者开发人员通过 history.push() 方法程序化地导航到一个新地址。

- REPLACE: 当当前页面在历史堆栈中被一个新的页面替换时，例如，当开发人员通过 history.replace() 方法更新当前的历史条目，而不是添加一个新的。

- POP: 当发生历史堆栈的变化导致页面变化时，通常是用户点击浏览器的前进或后退按钮

在 React Router v5 或更早版本中，可以通过 history 对象的 action 属性来访问这一信息。而在 React Router v6 中，路由的状态和逻辑被封装得更为严密，通常不直接操作 history 对象，但可以通过钩子（hooks）和组件来访问与导航相关的信息。

history.pushState()：向历史堆栈中添加一个状态。  
history.replaceState()：替换当前的历史堆栈条目。  
history.back()：与用户点击后退按钮相同的效果。  
history.forward()：与用户点击前进按钮相同的效果。  
history.go()：加载历史堆栈中的某个具体页面。

## 手写 useHistory

```js
import { useState, useEffect } from 'react';
// 由于ice的history没有action的信息，所以自定义重写路由事件实现action变化的监听
function useHistory() {
  const [location, setLocation] = useState(window.location);
  const [action, setAction] = useState('PUSH');

  useEffect(() => {
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function (state, title, url) {
      originalPushState.call(window.history, state, title, url);
      setAction('PUSH');
      setLocation(window.location);
    };

    window.history.replaceState = function (state, title, url) {
      originalReplaceState.call(window.history, state, title, url);
      setAction('REPLACE');
      setLocation(window.location);
    };

    const popstateListener = () => {
      setAction('POP');
      setLocation(window.location);
    };

    window.addEventListener('popstate', popstateListener);

    return () => {
      window.removeEventListener('popstate', popstateListener);
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
    };
  }, []);

  function push(path, state) {
    window.history.pushState(state, '', path);
  }

  function replace(path, state) {
    window.history.replaceState(state, '', path);
  }

  function go(n) {
    window.history.go(n);
  }

  return {
    location,
    action,
    push,
    replace,
    go,
  };
}

export default useHistory;
```
