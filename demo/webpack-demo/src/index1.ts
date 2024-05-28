import testImg from '@/img/1.png';
import './index.css';
import { sum } from './utils';

import dayjs from 'dayjs';
console.log('dayjs: ', dayjs);
console.log('121', sum(1, 1));
if (window.ENV === 'development') {
  console.log('ok');
}
const img = document.createElement('img');
img.src = testImg;
img.style.width = '100px';
img.style.height = '100px';

document.querySelector('body')?.appendChild(img);

// webpack 默认支持懒加载
import('./data.js').then((res) => {
  console.log('res: ', res.default);
});
