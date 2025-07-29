---
nav: Node
group: 部署
toc: content
mobile: false
title: nginx
---
## 1. 什么是 Nginx？

Nginx 是一款高性能的开源 HTTP 和反向代理服务器，同时也可以做负载均衡、邮件代理等功能。它以轻量、高并发著称。
## 2. 安装 Nginx

### 在 Linux（以 Ubuntu/Debian 为例）

```bash
sudo apt update
sudo apt install nginx
```

### 在 CentOS / RHEL

```bash
sudo yum install epel-release
sudo yum install nginx
```

### macOS（使用 Homebrew）

```bash
brew install nginx
brew info nginx 查看nginx 安装的具体位置和配置文件所在的位置
```

若要加配置,在 /opt/homebrew/etc/nginx/servers/ 文件夹下面添加 xxx.conf  (直接配置server ，配置文件外面不需要再写http)
servers文件可能需要自己建
## 3. 启动和管理 Nginx

```bash
# 启动 Nginx
sudo systemctl start nginx

# 停止 Nginx
sudo systemctl stop nginx

# 重启 Nginx
sudo systemctl restart nginx

# 重新加载配置（不重启进程）
sudo systemctl reload nginx

# 查看状态
sudo systemctl status nginx
```

或者直接用命令：

```bash
sudo nginx               # 启动
sudo nginx -s stop       # 停止
sudo nginx -s reload     # 重新加载配置
```

## 4. Nginx 配置文件简介

- 主配置文件： `/etc/nginx/nginx.conf`
- 站点配置目录（Debian/Ubuntu）： `/etc/nginx/sites-available/` 和 `/etc/nginx/sites-enabled/`
- 服务器根目录（默认）： `/var/www/html`

## 5. 简单的 HTTP 服务器配置实例 (最简单的history路由配置实例)

默认的 nginx.conf 结构中，有类似：

```nginx
http {
    server {
        listen 80;
        server_name localhost;

        root /var/www/html;
        index index.html index.htm;

        location / {
            try_files $uri $uri/ =404;
        }
    }
}
```

- `listen 80;` 监听 80 端口（HTTP 默认端口）
- `server_name` 指定域名或 IP（可用 _ 通配）
- `root` 指定网站文件根目录
- `index` 指定默认首页文件
- `location` 定义路由规则


如果构建后的build文件中路由有对应的html文件，刷新访问的时候应该直接访问对应的html文件，如访问/test 对应的应该是build文件下面的test.html

nginx配置如下


```nginx
server {
    listen 80;
    server_name your.domain.com;

    root /var/www/react-app/build;
    index index.html;

    # 优先访问请求对应的路径（静态资源或目录）
    location / {
        # 这里 try_files 按顺序尝试：
        # 1. 用户访问的路径本身 (如 /about) — 如果是目录或文件返回
        # 2. 请求路径加 .html（如 /about.html）
        # 3. 请求路径加 /index.html (支持目录索引)
        # 4. 回退到 index.html (SPA入口)
        try_files $uri $uri.html $uri/index.html /index.html;
    }

    # 静态资源缓存配置
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot|json)$ {
        expires 30d;
        access_log off;
        add_header Cache-Control "public";
    }

    error_page 404 /index.html;
}
```


## 6. 启动后访问

启动 Nginx 并访问服务器 IP 或域名即可看到 `/var/www/html` 目录下的默认网页。

## 7. 反向代理示例

假如你有一个后端服务运行在 `http://127.0.0.1:3000`，你想通过 Nginx 对外提供代理：

```nginx
server {
    listen 80;
    server_name example.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

- 访问 `http://example.com` 会被转发到 `http://127.0.0.1:3000`
- `proxy_set_header` 传递一些请求头，保持客户端信息

## 8. 配置 HTTPS（简单版）

你需要先获取 SSL 证书（如使用 Let's Encrypt 免费证书）。

```nginx
server {
    listen 443 ssl;
    server_name example.com;

    ssl_certificate /path/to/fullchain.pem;
    ssl_certificate_key /path/to/privkey.pem;

    location / {
        proxy_pass http://127.0.0.1:3000;
    }
}

# 可选跳转 HTTP 到 HTTPS
server {
    listen 80;
    server_name example.com;
    return 301 https://$host$request_uri;
}
```
## 9. 常见命令和技巧

- 语法检查

```bash
sudo nginx -t
```

- 重新加载配置（修改配置后生效）

```bash
sudo nginx -s reload
```

- 查看访问日志： `/var/log/nginx/access.log`
- 查看错误日志： `/var/log/nginx/error.log`

## 10. 进阶功能简介

- 负载均衡：

```nginx
upstream backend {
    server 127.0.0.1:3000;
    server 127.0.0.1:3001;
}

server {
    listen 80;
    location / {
        proxy_pass http://backend;
    }
}
```

- 静态资源缓存
- URL 重写规则 (`rewrite`)
- 防盗链、安全配置
- 限流、限速
- HTTP/2 支持

## nginx跨域配置

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


