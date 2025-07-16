"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[1621],{22810:function(s,t,n){n.r(t);var i=n(72269),l=n(93359),m=n(61788),c=n(19977),f=n(91558),d=n(24268),g=n(96057),h=n(85939),o=n(53683),r=n(80936),a=n(67294),_=n(23900),e=n(85893);function u(){return(0,e.jsx)(o.dY,{children:(0,e.jsx)(a.Suspense,{fallback:(0,e.jsx)(r.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"4x-\u7248\u672C\u5B9E\u73B0\u52A8\u6001\u4E3B\u9898\u5207\u6362",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#4x-\u7248\u672C\u5B9E\u73B0\u52A8\u6001\u4E3B\u9898\u5207\u6362",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"4.x \u7248\u672C\u5B9E\u73B0\u52A8\u6001\u4E3B\u9898\u5207\u6362"]}),(0,e.jsx)("p",{children:(0,e.jsx)("a",{href:"https://blog.csdn.net/m0_58016522/article/details/121751043",target:"_blank",children:_.texts[0].value})}),(0,e.jsx)(d.Z,{lang:"js",children:_.texts[1].value})]})})})})}t.default=u},23900:function(s,t,n){n.r(t),n.d(t,{texts:function(){return i}});const i=[{value:"\u53C2\u8003\u6587\u6863",paraId:0,tocIndex:0},{value:`
1\u3001\u4F9D\u636E\u5B98\u65B9\u6587\u6863\uFF0C\u901A\u8FC7ConfigProfider\u5728\u9876\u5C42\u4FEE\u6539prefixCls\uFF1A
import { ConfigProvider } from 'antd';

export default () => (
  <ConfigProvider prefixCls="custom">
    <MyApp />
  </ConfigProvider>
);


2\u3001\u7F16\u8BD1less
\u7531\u4E8E\u6B65\u9AA41\u4E2D\uFF0C\u901A\u8FC7ConfigProfider\u5C06\u6837\u5F0F\u7C7B\u540D\u524D\u7F00\u8C03\u6574\u4E3Acustom\uFF0C\u6211\u4EEC\u9700\u8981\u91CD\u65B0\u901A\u8FC7lessc\u547D\u4EE4\uFF0C\u5C06antd\u7684\u9ED8\u8BA4\u6837\u5F0Fless\u6587\u4EF6\uFF0C\u91CD\u65B0\u7F16\u8BD1\u751F\u6210\u4E00\u4EFDcss\u6587\u4EF6\u3002\u203B\u6CE8\u610F\uFF1A\u5982\u679C\u672A\u5B89\u88C5less\uFF0C\u5219\u9700\u8981\u5B89\u88C5less\uFF1Anpm install -g less

lessc --modify-var="ant-prefix=custom" node_modules/antd/dist/antd.variable.less custom.css

\u5982\u679C\u5355\u5355\u6309\u7167\u5B98\u65B9\u6587\u6863\u4E2D\u7684\u64CD\u4F5C\u6267\u884C\u4E0A\u8FF0\u547D\u4EE4\uFF0C\u63A7\u5236\u53F0\u4F1A\u62A5\u9519\uFF1A

SyntaxError: Inline JavaScript is not enabled. Is it set in your options? in D:\\workspace\\workspace_for_java\\SPB-LERN\\web-react-ts\\node_modules\\antd\\lib\\style\\color\\bezierEasing.less on line 110, column 1:
109 // https://github.com/ant-design/ant-motion/issues/44
110 .bezierEasingMixin();
111


\u56E0\u4E3A\u9ED8\u8BA4lessc\u547D\u4EE4\u672A\u5F00\u542Fjavascript\u529F\u80FD\uFF0C\u9700\u8981\u901A\u8FC7\u53C2\u6570\u5F00\u542Fjavascript\u529F\u80FD\uFF0C\u53C2\u8003\u94FE\u63A5\uFF1Ahttps://lesscss.org/usage/#less-options-enable-inline-javascript-deprecated-\u3002\u5C06\u4E0A\u8FF0\u547D\u4EE4\u6DFB\u52A0--js\u53C2\u6570\u540E\u6267\u884C\u5373\u53EF\uFF1A

lessc --js --modify-var="ant-prefix=custom" node_modules/antd/dist/antd.variable.less custom.css

3\u3001\u6309\u7167\u6B65\u9AA42\u4E2D\u7684\u547D\u4EE4\uFF0C\u4F1A\u751F\u6210\u4E00\u4E2Acustom.css

4\u3001index.js\u6587\u4EF6\u5F15\u5165\u4E0A\u8FF0\u6B65\u9AA4\u4E2D\u7684custom.css\u6587\u4EF6\u3002\u203B\u6CE8\u610F\uFF1A\u9ED8\u8BA4\u7684antd\u6837\u5F0F\u6587\u4EF6antd/dist/antd.css\u4E5F\u9700\u8981\u5F15\u5165\u3002index.js\u6587\u4EF6\u5B8C\u6574\u4EE3\u7801\u5982\u4E0B\uFF1A
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button, DatePicker, Radio, Space, version } from "antd";
import { ConfigProvider } from "antd";

import "antd/dist/antd.css";  // antd\u9ED8\u8BA4\u6837\u5F0F\u6587\u4EF6
import "./custom.css";  // \u4FEE\u6539\u540E\u7684\u6837\u5F0F\u6587\u4EF6
import "./index.css";

const TestComponent = () => {
  const [prefix, setPrefix] = useState("ant");

  const handlePrefixChange = (e) => {
    setPrefix(e.target.value);
  };

  return (
    // ConfigProvider\u4FEE\u6539prefixCls
    <ConfigProvider prefixCls={prefix}>
      <div className="App">
        <h1>
          <Space>
            Change Theme:
            {/* radio\u52A8\u6001\u4FEE\u6539prefix */}
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

`,paraId:1,tocIndex:0}]}}]);
