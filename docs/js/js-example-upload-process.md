---
nav: Js
group: 案例
toc: content
title: axios实现文件上传进度条
---

## axios 实现文件上传进度条

<a href="https://blog.csdn.net/RkHker/article/details/109316494" target="_blank">点击查看 demo</a>

```jsx
import axios from 'axios';

// 文件流转对象
const fileToObj = (file) => {
  const reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function () {
    const json = JSON.parse(reader.result.toString());
    console.log(json);
  };
};

export default () => {
  const fileRef = React.useRef({});
  const [process, setProcess] = React.useState(0);
  const upload = () => {
    const formData = new FormData();
    formData.append('userImg', fileRef.current);
    formData.append('userAge', 20);
    axios.post('http://121.4.49.147:7361/log/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      // progress.loaded表示当前上传的数据大小，progress.total表示整个要上传的数据大小
      onUploadProgress: ({ total, loaded }) => {
        setProcess(((loaded / total) * 100).toFixed(2));
      },
    });
  };
  return (
    <div>
      <input
        type="file"
        onChange={(v) => {
          fileRef.current = v.target.files[0];
        }}
      />
      <br />
      <br />
      进度展示: {process}%
      <br />
      <br />
      <button onClick={upload}>提交</button>
    </div>
  );
};
```
