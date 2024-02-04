---
nav: Http
group:
  title: 网络知识
  order: 1
toc: content
title: 随笔
mobile: false
---

# 如何解决资源代理时 https 域名不能访问 http 资源

https://github.dev/Jerryqun/golden-house

错误提示：
Mixed Content: The page at https://xxx was loaded over HTTPS

解决方法：

1、治标不治本法：适用于个人调试时使用

解决思路：对浏览器进行设置，允许浏览器加载“不安全内容”，以谷歌浏览器版本 102.0.5005.115（正式版本） （64 位）为例

        进入设置页面-----点击网站设置----更多内容设置---不安全内容---允许显示不安全内容---添加，将你访问的网站（例如www.testcase.com）添加进去即可，之后打开f12查看，虽然还是会出现灰色的mixed conten提示，但是已经不是红色的保存，而且我们的http地址的资源已经成功引入。适用于个人调试，因为生产环境不可能让用户去进行浏览器设置。

2.方法二：nginx 代理法

解决思路：将我们所需要的 http 服务或者资源使用 nginx 反向代理成 https 服务，我们项目中则使用 https 引入，nginx 接收到请求后再转发到实际的 http 地址。
