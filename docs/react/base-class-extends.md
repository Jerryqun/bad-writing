---
nav: React
group: 基础
toc: content
mobile: false
title: 类组件的继承
---

## 类组件的继承

```js
/* 人类 */
class Person extends React.Component {
  constructor(props) {
    super(props);
    console.log('hello , i am person');
  }
  componentDidMount() {
    console.log(1111);
  }
  eat() {
    /* 吃饭 */
  }
  sleep() {
    /* 睡觉 */
  }
  ddd() {
    console.log('打豆豆'); /* 打豆豆 */
  }
  render() {
    return <div>大家好，我是一个person</div>;
  }
}
/* 程序员 */
class Programmer extends Person {
  constructor(props) {
    super(props);
    console.log('hello , i am Programmer too');
  }
  componentDidMount() {
    super.eat();
  }
  code() {
    /* 敲代码 */
  }
  render() {
    return (
      <div style={{ marginTop: '50px' }}>
        {super.render()} {/* 让 Person 中的 render 执行 */}
        我还是一个程序员！ {/* 添加自己的内容 */}
      </div>
    );
  }
}
```

我们从上面不难发现这个继承增强效果很优秀。它的优势如下：

可以控制父类 render，还可以添加一些其他的渲染内容；  
可以共享父类方法，还可以添加额外的方法和属性。  
但是也有值得注意的地方，就是 state 和生命周期会被继承后的组件修改。  
像上述 demo 中，Person 组件中的 componentDidMount 生命周期将不会被执行。
