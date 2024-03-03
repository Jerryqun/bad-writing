---
nav: React
group: 基础
toc: content
mobile: false
title: HOC中解决ref传递问题
---

## HOC 中解决 ref 传递问题

```js
// 经过 forwardRef 处理后的 HOC ，就可以正常访问到 Index 组件实例

import { useRef, useEffect } from 'react';

function HOC(Component) {
  class Wrap extends React.Component {
    render() {
      const { forwardedRef, ...otherprops } = this.props;
      return <Component ref={forwardedRef} {...otherprops} />;
    }
  }
  return React.forwardRef((props, ref) => (
    <Wrap forwardedRef={ref} {...props} />
  ));
}
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { a: 1 };
  }
  render() {
    return <div>hello,world</div>;
  }
}
const HocIndex = HOC(Index);
export default () => {
  const node = useRef(null);
  useEffect(() => {
    console.log(node.current); /* Index 组件实例  */
  }, []);
  return (
    <div>
      <HocIndex ref={node} />
    </div>
  );
};
```
