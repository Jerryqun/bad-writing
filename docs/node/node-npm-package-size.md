---
nav: Node
group: NPM
toc: content
mobile: false
title: 查看npm包大小
---

## package-size 查看 npm 包大小

```bash
# 安装

yarn global add package-size

# get the size of vue bundle

package-size vue

# get the size of react+react-dom bundle

package-size react,react-dom

# get the size of vue react+react-dom preact bundles

package-size vue react,react-dom preact

# get the size of package in current working directory

# it should be already installed or `require-able` in cwd

package-size object-assign --cwd
package-size ./dist/index.js --cwd
```
