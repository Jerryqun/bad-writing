---
toc: content
group:
  title: 进阶
  order: 3
title: layer
---

# @layer

@layer 的语法规则<br/>
@layer layer-name {rules}<br/>
@layer layer-name;<br/>
@layer layer-name, layer-name, layer-name;<br/>
@layer {rules}<br/>

@layer 的创建<br/>

```css
@layer base {
  .test {
    background-color: #f5f5f5;
    color: #333333;
  }
}
@layer components {
  font-size: 14px;
}
```

只定义具名级联层，如：

```css
@layer base;
@layer components;
// 也可以合并在一起
@layer base, components;

匿名级联层，如： @layer {
  background-color: #f5f5f5;
  color: #333;
}
```

与 @import 一起使用，如：

```css
@import url(./base.css) layer(base);
// 也可以是匿名的，如
@import url(./base.css) layer;
```

没有设置 !important 的情况：<br/>

`没有分层的样式优先级最高，其他的按照它们声明的顺序排序。第一层优先级最低，最后一层优先级最高`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style type="text/css">
      /* 未分层样式 */
      .item {
        color: black;
      }
      @layer third {
        .item {
          color: red;
        }
      }
      @layer base {
        .item {
          color: blue;
        }
      }
      @layer components {
        .item {
          color: green;
        }
      }
      @layer utility {
        .item {
          color: white;
        }
      }
    </style>
  </head>
  <body>
    <div class="item">Hello, CSS Layer~</div>
  </body>
</html>
```

未分层样式 > utility 层 > components 层 > base 层 > third 层

需要注意的一个地方就是，优先级是按照声明的先后顺序来决定的。再看一下代码：

```css
@layer third, base, components, utility;
@layer base {
  .item {
    color: white;
  }
}
@layer components {
  .item {
    color: white;
  }
}
@layer utility {
  .item {
    color: white;
  }
}
@layer third {
  .item {
    color: white;
  }
}
```

上面代码的优先级为：

third < base < components < utility

在设置 !important 的情况：

没有分层的样式优先级最低，其他的按照它们声明的顺序排序。第一层优先级最高，最后一层优先级最低。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style type="text/css">
      /* 未分层样式 */
      .item {
        color: black !important;
      }
      @layer third {
        .item {
          color: red !important;
        }
      }
      @layer base {
        .item {
          color: blue !important;
        }
      }
      @layer components {
        .item {
          color: green !important;
        }
      }
      @layer utility {
        .item {
          color: white !important;
        }
      }
    </style>
  </head>
  <body>
    <div class="item">Hello, CSS Layer~</div>
  </body>
</html>
```

可以看出最终是 @layer third 层起作用了，与没有使用 !important 的时候优先级完全相反。

上述代码的样式优先级如下：

third 层 > base 层 > components 层 > utility 层 > 未分层样式

最后总结一下 layer：虽然 layer 的出现带来了额外的学习成本，但相比之前滥用 !important 的时候还是给我们带来了非常大的便利，我们应该积极去学习它。
