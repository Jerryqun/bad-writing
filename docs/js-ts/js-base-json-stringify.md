---
nav: Js
group: 基础概念
toc: content
title: JSON.stringify
---

```js
/**
 * JSON只支持object,array,string,number,true,false,null这几种数据或者值，
 * 其他的比如函数，undefined，Date，RegExp等数据类型都不支持，对于它不支持的数据都会直接忽略该属性。
 * 会抛弃对象的constructor, 所有的构造函数会指向Object
 * 对象有循环引用,会报错
 */

/**
 * @param obj
 * @param space  处理后的格式
 * @param replacer
 * @param cycleReplacer
 * @returns
 */

function safeStringify(obj, space, replacer, cycleReplacer) {
  const wekMap = new WeakMap();
  return JSON.stringify(
    obj,
    (key, value) => {
      if (value !== null && typeof value === 'object') {
        if (wekMap.has(key)) {
          return cycleReplacer ? cycleReplacer(key, value) : '[Circular]';
        } else {
          wekMap.set(value, true);
        }
      }
      return replacer ? replacer(key, value) : value;
    },
    space,
  );
}
```
