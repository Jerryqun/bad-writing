---
nav: React
group: 基础
toc: content
mobile: false
title: 受控组件和非受控组件
---

## 受控组件和非受控组件

```js
/**
 * https://segmentfault.com/a/1190000040308582
 * 值由 React 控制的输入表单元素称为“受控组件”。
 */

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  render() {
    const { username } = this.state;

    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="username">
            用户名:
            <input
              type="text"
              id="username"
              onChange={(e) => this.handleUsernameChange(e)}
              value={username}
            />
          </label>
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value,
    });
  }

  handleSubmit(event) {
    console.log(this.state.username);
    event.preventDefault();
  }
}

/**
 * 非“受控组件”。
 */

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.usernameRef = createRef();
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="">
            用户:
            <input
              defaultValue="username"
              type="text"
              name="username"
              ref={this.usernameRef}
            />
          </label>
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.usernameRef.current.value);
  }
}
```
