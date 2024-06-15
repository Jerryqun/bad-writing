import TinyReact from './tiny-react';
console.log('TinyReact: ', TinyReact);

const vdom = (
  <div className="wrap">
    <p>1</p>
    <p>2</p>
    {1 == 2 && <p>3</p>}
  </div>
);
console.log('vdom: ', vdom);
