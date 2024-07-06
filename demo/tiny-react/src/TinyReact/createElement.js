export default function createElement(type, props, ...children) {
  console.log(type);
  console.log(props);

  console.log(children);

  const childElements = [].concat(...children).reduce((result, child) => {
    if (child !== false && child !== true && child !== null) {
      if (child instanceof Object) {
        result.push(child);
      } else {
        result.push(createElement('text', { textContent: child }));
      }
    }
    return result;
  }, []);
  return {
    type,
    props: Object.assign({ children: childElements }, props),
    children: childElements,
  };
}
