---
nav: React
group: 基础
toc: content
mobile: false
title: Hooks 更新逻辑
---

Hooks 更新逻辑  
栗子 1 深拷贝才会引起 render

```jsx
import { useState, useEffect } from 'react';
export default () => {
  const [obj, setObj] = useState([4]);
  useEffect(() => {
    // 1、 const c = [...obj]; // 引用地址变化 触发更新
    // 2、 const c = JSON.parse(JSON.stringify(obj)); // 引用地址变化 触发更新

    const c = obj; // 3、 引用地址没变 不会触发更新
    c.push(1);
    c.push(2);

    console.log(c);
    setObj(c);
  }, []);
  return <div>{obj.length}</div>;
};
```

栗子 2

```jsx
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  handleClick = () => {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        this.setState({ number: this.state.number + 1 });
        console.log(this.state.number); //  0 0  0 0 0(react 18中合并更新)
      }, 1000);
    }
  };

  render() {
    console.log('number', this.state.number);

    return (
      <div>
        {this.state.number}
        <button onClick={this.handleClick}> num++</button>
      </div>
    );
  }
}
export default Index;
```

栗子 3

```jsx
function Index() {
  const [num, setNumber] = React.useState(0);
  const handleClick = () => {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        setNumber(num + 1);
        console.log(num); // 0 0 0 0 0  在function组件中，没有一个状态去保存这些信息，每一次函数上下文执行，所有变量，常量都重新声明，执行完毕，再被垃圾机制回收。所以如上，无论setTimeout执行多少次，都是在当前函数上下文执行,此时num = 0不会变，之后setNumber执行，函数组件重新执行之后，num才变化。
      }, 1000);
    }
  };
  console.log('num: ', num);

  return <button onClick={handleClick}>{num}</button>;
}
export default Index;
```
