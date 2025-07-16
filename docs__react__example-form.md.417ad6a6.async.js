"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[865],{84166:function(a,t,n){n.r(t);var _=n(72269),m=n(93359),s=n(61788),h=n(19977),c=n(91558),r=n(24268),E=n(96057),f=n(85939),o=n(53683),i=n(80936),l=n(67294),d=n(20388),e=n(85893);function u(){return(0,e.jsx)(o.dY,{children:(0,e.jsx)(l.Suspense,{fallback:(0,e.jsx)(i.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"\u624B\u5199-form\u63D2\u69FD\u7EC4\u4EF6\u7684\u4F7F\u7528\u4E0E\u7F16\u5199",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u624B\u5199-form\u63D2\u69FD\u7EC4\u4EF6\u7684\u4F7F\u7528\u4E0E\u7F16\u5199",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u624B\u5199 Form(\u63D2\u69FD\u7EC4\u4EF6\u7684\u4F7F\u7528\u4E0E\u7F16\u5199)"]}),(0,e.jsx)(r.Z,{lang:"js",children:d.texts[0].value})]})})})})}t.default=u},20388:function(a,t,n){n.r(t),n.d(t,{texts:function(){return _}});const _=[{value:`/* Input \u7EC4\u4EF6, \u8D1F\u8D23\u56DE\u4F20value\u503C */
function Input({ onChange, value }) {
  return (
    <input
      className="input"
      onChange={(e) => onChange && onChange(e.target.value)}
      value={value}
    />
  );
}
/* \u7ED9Component \u589E\u52A0\u6807\u7B7E */
Input.displayName = 'input';

class Form extends React.Component {
  state = {
    formData: {},
  };
  /* \u7528\u4E8E\u63D0\u4EA4\u8868\u5355\u6570\u636E */
  submitForm = (cb) => {
    cb({ ...this.state.formData });
  };
  /* \u83B7\u53D6\u91CD\u7F6E\u8868\u5355\u6570\u636E */
  resetForm = () => {
    const { formData } = this.state;
    Object.keys(formData).forEach((item) => {
      formData[item] = '';
    });
    this.setState({
      formData,
    });
  };
  /* \u8BBE\u7F6E\u8868\u5355\u6570\u636E\u5C42 */
  setValue = (name, value) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value,
      },
    });
  };
  render() {
    const { children } = this.props;
    const renderChildren = [];
    React.Children.forEach(children, (child) => {
      console.log('child', child);

      if (child.type.displayName === 'formItem') {
        const { name } = child.props;
        /* \u514B\u9686\`FormItem\`\u8282\u70B9\uFF0C\u6DF7\u5165\u6539\u53D8\u8868\u5355\u5355\u5143\u9879\u7684\u65B9\u6CD5 */
        const Children = React.cloneElement(
          child,
          {
            key: name /* \u52A0\u5165key \u63D0\u5347\u6E32\u67D3\u6548\u679C */,
            handleChange: this.setValue /* \u7528\u4E8E\u6539\u53D8 value */,
            value: this.state.formData[name] || '' /* value \u503C */,
          },
          child.props.children,
        );
        renderChildren.push(Children);
      }
    });
    return renderChildren;
  }
}
/* \u589E\u52A0\u7EC4\u4EF6\u7C7B\u578Btype  */
Form.displayName = 'form';

function FormItem(props) {
  const { children, name, handleChange, value, label } = props;
  const onChange = (value) => {
    /* \u901A\u77E5\u4E0A\u4E00\u6B21value \u5DF2\u7ECF\u6539\u53D8 */
    handleChange(name, value);
  };
  return (
    <div className="form">
      <span className="label">{label}:</span>
      {React.isValidElement(children) && children.type.displayName === 'input'
        ? React.cloneElement(children, { onChange, value })
        : null}
    </div>
  );
}
FormItem.displayName = 'formItem';

export default () => {
  const form = React.useRef(null);
  const submit = () => {
    /* \u8868\u5355\u63D0\u4EA4 */
    form.current.submitForm((formValue) => {
      console.log(formValue);
    });
  };
  const reset = () => {
    /* \u8868\u5355\u91CD\u7F6E */
    form.current.resetForm();
  };
  return (
    <div className="box">
      <Form ref={form}>
        <FormItem name="name" label="\u6211\u662F">
          <Input />
        </FormItem>
        <FormItem name="mes" label="\u6211\u60F3\u5BF9\u5927\u5BB6\u8BF4">
          <Input />
        </FormItem>
        <input placeholder="\u4E0D\u9700\u8981\u7684input" />
        <Input />
      </Form>
      <div className="btns">
        <button className="searchbtn" onClick={submit}>
          \u63D0\u4EA4
        </button>
        <button className="concellbtn" onClick={reset}>
          \u91CD\u7F6E
        </button>
      </div>
    </div>
  );
};
`,paraId:0,tocIndex:0}]}}]);
