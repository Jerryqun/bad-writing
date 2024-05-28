import App from '@/page/home';
import React from 'react';
import ReactDOM from 'react-dom';
import { sum } from './utils';
console.log('React: ', React);
console.log('sum: ', sum(1, 2));

const root = document.querySelector('#root');
ReactDOM.createRoot(root).render(<App />);
