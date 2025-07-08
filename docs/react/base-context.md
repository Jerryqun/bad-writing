---
nav: React
group: 基础
toc: content
mobile: false
title: Context用法
---

## createContext 用法

```jsx
import React from 'react';

// 创建 Context 填入默认值（任何一个 js 变量）
const ThemeContext = React.createContext('light');

// 底层组件 - 函数是组件
function ThemeLink(props) {
  // const theme = this.context // 会报错。函数式组件没有实例，即没有 this

  // 函数式组件可以使用 Consumer
  return (
    <ThemeContext.Consumer>
      {(value) => <p>link's theme is {value}</p>}
    </ThemeContext.Consumer>
  );
}

// 底层组件 - class 组件
class ThemedButton extends React.Component {
  // 指定 contextType 读取当前的 theme context。
  // static contextType = ThemeContext // 也可以用 ThemedButton.contextType = ThemeContext
  render() {
    const theme = this.context; // React 会往上找到最近的 theme Provider，然后使用它的值。
    return (
      <div>
        <p>button's theme is {theme}</p>
      </div>
    );
  }
}
ThemedButton.contextType = ThemeContext; // 指定 contextType 读取当前的 theme context。

// 中间的组件再也不必指明往下传递 theme 了。
function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
      <ThemeLink />
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light',
    };
  }
  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <Toolbar />
        <hr />
        <button onClick={this.changeTheme}>change theme</button>
      </ThemeContext.Provider>
    );
  }
  changeTheme = () => {
    this.setState({
      theme: this.state.theme === 'light' ? 'dark' : 'light',
    });
  };
}

export default App;
```

```jsx
const ThemeContext = React.createContext(null); // 主题颜色Context
import {
  HomeOutlined,
  SettingFilled,
  SyncOutlined,
  SmileOutlined,
  LoadingOutlined,
} from '@ant-design/icons';

const theme = {
  //主题颜色
  dark: {
    color: '#1890ff',
    background: '#1890ff',
    border: '1px solid blue',
    type: 'dark',
  },
  light: {
    color: '#fc4838',
    background: '#fc4838',
    border: '1px solid pink',
    type: 'light',
  },
};

/* input输入框 - useContext 模式 */
function Input(props) {
  const { color, border } = React.useContext(ThemeContext);
  const { label, placeholder } = props;
  return (
    <div>
      <label style={{ color }}>{label}</label>
      <input className="input" placeholder={placeholder} style={{ border }} />
    </div>
  );
}
/* 容器组件 -  Consumer模式 */
function Box(props) {
  return (
    <ThemeContext.Consumer>
      {(themeContextValue) => {
        const { border, color } = themeContextValue;
        return (
          <div className="context_box" style={{ border, color }}>
            {props.children}
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

function Checkbox(props) {
  const { label, name, onChange } = props;
  const { type, color } = React.useContext(ThemeContext);
  return (
    <div className="checkbox" onClick={onChange}>
      <label htmlFor="name"> {label} </label>
      <input
        type="checkbox"
        id={name}
        value={type}
        name={name}
        checked={type === name}
        style={{ color }}
      />
    </div>
  );
}

const App = () => {
  const { border, setTheme, color, background } =
    React.useContext(ThemeContext);
  return (
    <div className="context_app" style={{ border, color }}>
      <div className="context_change_theme">
        <span> 选择主题： </span>
        <Checkbox
          label="light"
          name="light"
          onChange={() => setTheme(theme.light)}
        />
        <Checkbox
          label="dark"
          name="dark"
          onChange={() => setTheme(theme.dark)}
        />
      </div>
      <div className="box_content">
        <Box>
          <Input label="姓名：" placeholder="请输入姓名" />
          <Input label="age：" placeholder="请输入年龄" />
          <button className="searchbtn" style={{ color }}>
            确定
          </button>
          <button className="concellbtn" style={{ color }}>
            取消
          </button>
        </Box>
        <Box>
          <HomeOutlined twoToneColor={color} />
          <SettingFilled twoToneColor={color} />
          <SmileOutlined twoToneColor={color} />
          <SyncOutlined spin twoToneColor={color} />
          <SmileOutlined twoToneColor={color} rotate={180} />
          <LoadingOutlined twoToneColor={color} />
        </Box>
        <Box>
          <div className="person_des" style={{ color: '#fff', background }}>
            I am alien <br />
            let us learn React!
          </div>
        </Box>
      </div>
    </div>
  );
};

export default function () {
  const [themeContextValue, setThemeContext] = React.useState(theme.dark);
  /* 传递颜色主题 和 改变主题的方法 */
  return (
    <ThemeContext.Provider
      value={{ ...themeContextValue, setTheme: setThemeContext }}
    >
      <App />
    </ThemeContext.Provider>
  );
}
```

## useContext 结合useReducer 用法

```jsx
import React from 'react';
const UserContent = React.createContext();

const Child1 = () => {
  const { state } = React.useContext(UserContent);
  return <div>child1 {state}</div>;
};
const Child2 = () => {
  const { dispatch } = React.useContext(UserContent);

  return (
    <div>
      child2 <button onClick={() => {dispatch({type:'upate',name:'cq'})}}>test</button>
    </div>
  );
};

export default function () {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'upate':
        return action.name;
      default:
        return null;
    }
  };
  const [state, dispatch] = React.useReducer(reducer,'lg');
  return (
    <UserContent.Provider value={{ state, dispatch }}>
      <Child1 />
      <Child2 />
    </UserContent.Provider>
  );
}
```
