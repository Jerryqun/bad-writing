---
nav: Node
group: 部署
toc: content
mobile: false
title: nginx
---

## 跨域配置

```bash
server {
	listen 80;
	server_name static.yangzw.vip;
	# 新增部分-开始
	add_header "Access-Control-Allow-Origin" $http_origin; # 当前请求域名，不支持携带Cookie的请求
	add_header "Access-Control-Allow-Credentials" "true"; # 请求可携带Cookie
	add_header "Access-Control-Allow-Methods" "GET, POST, OPTIONS"; # 允许的请求方式
	add_header "Access-Control-Allow-Headers" $http_access_control_request_headers; # 允许的请求Header，可设置为*
	add_header "Access-Control-Expose-Headers" "Content-Length,Content-Range";
	if ($request_method = "OPTIONS") {
		add_header "Access-Control-Max-Age" 18000000; # 请求的有效期：在有效期内无需发出另一条预检请求
		add_header "Content-Length" 0;
		add_header "Content-Type" "text/plain; charset=utf-8";
	}
	# 新增部分-结束
	location / {
		root /www/static;
		index index.html;
	}
}

```

## Nginx 常用命令

```bash
nginx  启动进程
nginx -t 验证配置
nginx -s reload 重启进程
nginx -s stop  杀掉进程
```
