import App from '@/page/home';
import React from 'react';
import ReactDOM from 'react-dom';
console.log('React: ', React);

const root = document.querySelector('#root');
ReactDOM.createRoot(root).render(<App />);
