---
nav: React
group: 常用包
toc: content
title: 移动端页面的适配
---

# postcss-plugin-px2rem

https://www.npmjs.com/package/postcss-plugin-px2rem

## Usage
```css
// input
h1 {
  margin: 0 0 20px;
  font-size: 32px;
  line-height: 1.2;
  letter-spacing: 1px;
}

// output
h1 {
  margin: 0 0 0.2rem;
  font-size: 0.32rem;
  line-height: 1.2;
  letter-spacing: 0.01rem;
}
```

## Configuration
```json
{
  rootValue: 100, 
  unitPrecision: 5,
  propWhiteList: [],
  propBlackList: [],
  exclude:false,
  selectorBlackList: [],
  ignoreIdentifier: false,
  replace: true,
  mediaQuery: false,
  minPixelValue: 0
}
```

## em适配用这段代码动态计算html的font-size大小

使用postcss-plugin-px2rem转换的情况下  默认rootValue = 100 ,比如20px => 0.2px

比如设计稿尺寸是750px，在750屏幕宽度下， 1rem = 100px，所以750屏幕下html的fontSize为100px


```js
(function(win) {
    var docEl = win.document.documentElement;
    var timer = '';

    function changeRem() {
      var width = docEl.getBoundingClientRect().width;
      if (width > 750) { // 750是设计稿大小
          width = 750;
      }
      var fontS = width / 75; // 7.5是如何来的 要保证在750尺寸下1rem = 100px
      docEl.style.fontSize = fontS + "px";
    }
    win.addEventListener("resize", function() {
      clearTimeout(timer);
      timer = setTimeout(changeRem, 30);
    }, false);
    win.addEventListener("pageshow", function(e) {
      if (e.persisted) { //清除缓存
        clearTimeout(timer);
        timer = setTimeout(changeRem, 30);
      }
    }, false);
    changeRem();
})(window)
```

或者使用淘宝提供的库 ： https://github.com/amfe/lib-flexible





# postcss-px-to-viewport

https://www.npmjs.com/package/postcss-px-to-viewport

https://www.npmjs.com/package/postcss-px-to-viewport-8-plugin

https://fedev.cn/css/vw-for-layout.html
