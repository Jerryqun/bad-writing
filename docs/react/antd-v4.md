---
nav: React
group: antd
toc: content
mobile: false
title: 4.x版本实现动态主题切换
---

## 4.x 版本实现动态主题切换

<a href="https://blog.csdn.net/m0_58016522/article/details/121751043" target="_blank">参考文档</a>

```js

1、依据官方文档，通过ConfigProfider在顶层修改prefixCls：
import { ConfigProvider } from 'antd';

export default () => (
  <ConfigProvider prefixCls="custom">
    <MyApp />
  </ConfigProvider>
);


2、编译less
由于步骤1中，通过ConfigProfider将样式类名前缀调整为custom，我们需要重新通过lessc命令，将antd的默认样式less文件，重新编译生成一份css文件。※注意：如果未安装less，则需要安装less：npm install -g less

lessc --modify-var="ant-prefix=custom" node_modules/antd/dist/antd.variable.less custom.css

如果单单按照官方文档中的操作执行上述命令，控制台会报错：

SyntaxError: Inline JavaScript is not enabled. Is it set in your options? in D:\workspace\workspace_for_java\SPB-LERN\web-react-ts\node_modules\antd\lib\style\color\bezierEasing.less on line 110, column 1:
109 // https://github.com/ant-design/ant-motion/issues/44
110 .bezierEasingMixin();
111


因为默认lessc命令未开启javascript功能，需要通过参数开启javascript功能，参考链接：https://lesscss.org/usage/#less-options-enable-inline-javascript-deprecated-。将上述命令添加--js参数后执行即可：

lessc --js --modify-var="ant-prefix=custom" node_modules/antd/dist/antd.variable.less custom.css

3、按照步骤2中的命令，会生成一个custom.css

4、index.js文件引入上述步骤中的custom.css文件。※注意：默认的antd样式文件antd/dist/antd.css也需要引入。index.js文件完整代码如下：
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button, DatePicker, Radio, Space, version } from "antd";
import { ConfigProvider } from "antd";

import "antd/dist/antd.css";  // antd默认样式文件
import "./custom.css";  // 修改后的样式文件
import "./index.css";

const TestComponent = () => {
  const [prefix, setPrefix] = useState("ant");

  const handlePrefixChange = (e) => {
    setPrefix(e.target.value);
  };

  return (
    // ConfigProvider修改prefixCls
    <ConfigProvider prefixCls={prefix}>
      <div className="App">
        <h1>
          <Space>
            Change Theme:
            {/* radio动态修改prefix */}
            <Radio.Group onChange={handlePrefixChange} value={prefix}>
              <Radio value="ant">Ant Style</Radio>
              <Radio value="custom">Custom Style</Radio>
            </Radio.Group>
          </Space>
        </h1>

        <h1>antd version: {version}</h1>
        <DatePicker />
        <Button type="primary" style={{ marginLeft: 8 }}>
          Primary Button
        </Button>
      </div>
    </ConfigProvider>
  );
};

ReactDOM.render(<TestComponent />, document.getElementById("root"));

```
