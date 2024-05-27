import testImg from '@/img/1.png';
import './index.css';
if (window.ENV === 'development') {
  console.log('ok');
}
const img = document.createElement('img');
img.src = testImg;
img.style.width = '100px';
img.style.height = '100px';

document.querySelector('body')?.appendChild(img);
