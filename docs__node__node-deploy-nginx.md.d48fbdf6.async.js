"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[2819],{21227:function(a,e,_){_.r(e);var t=_(72269),u=_(93359),h=_(61788),E=_(19977),m=_(91558),d=_(24268),x=_(96057),g=_(85939),r=_(53683),o=_(80936),s=_(67294),i=_(84599),n=_(85893);function l(){return(0,n.jsx)(r.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(o.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h2",{id:"\u8DE8\u57DF\u914D\u7F6E",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u8DE8\u57DF\u914D\u7F6E",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u8DE8\u57DF\u914D\u7F6E"]}),(0,n.jsx)(d.Z,{lang:"bash",children:i.texts[0].value}),(0,n.jsxs)("h2",{id:"nginx-\u5E38\u7528\u547D\u4EE4",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#nginx-\u5E38\u7528\u547D\u4EE4",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Nginx \u5E38\u7528\u547D\u4EE4"]}),(0,n.jsx)(d.Z,{lang:"bash",children:i.texts[1].value})]})})})})}e.default=l},84599:function(a,e,_){_.r(e),_.d(e,{texts:function(){return t}});const t=[{value:`server {
	listen 80;
	server_name static.yangzw.vip;
	# \u65B0\u589E\u90E8\u5206-\u5F00\u59CB
	add_header "Access-Control-Allow-Origin" $http_origin; # \u5F53\u524D\u8BF7\u6C42\u57DF\u540D\uFF0C\u4E0D\u652F\u6301\u643A\u5E26Cookie\u7684\u8BF7\u6C42
	add_header "Access-Control-Allow-Credentials" "true"; # \u8BF7\u6C42\u53EF\u643A\u5E26Cookie
	add_header "Access-Control-Allow-Methods" "GET, POST, OPTIONS"; # \u5141\u8BB8\u7684\u8BF7\u6C42\u65B9\u5F0F
	add_header "Access-Control-Allow-Headers" $http_access_control_request_headers; # \u5141\u8BB8\u7684\u8BF7\u6C42Header\uFF0C\u53EF\u8BBE\u7F6E\u4E3A*
	add_header "Access-Control-Expose-Headers" "Content-Length,Content-Range";
	if ($request_method = "OPTIONS") {
		add_header "Access-Control-Max-Age" 18000000; # \u8BF7\u6C42\u7684\u6709\u6548\u671F\uFF1A\u5728\u6709\u6548\u671F\u5185\u65E0\u9700\u53D1\u51FA\u53E6\u4E00\u6761\u9884\u68C0\u8BF7\u6C42
		add_header "Content-Length" 0;
		add_header "Content-Type" "text/plain; charset=utf-8";
	}
	# \u65B0\u589E\u90E8\u5206-\u7ED3\u675F
	location / {
		root /www/static;
		index index.html;
	}
}

`,paraId:0,tocIndex:0},{value:`nginx  \u542F\u52A8\u8FDB\u7A0B
nginx -t \u9A8C\u8BC1\u914D\u7F6E
nginx -s reload \u91CD\u542F\u8FDB\u7A0B
nginx -s stop  \u6740\u6389\u8FDB\u7A0B
`,paraId:1,tocIndex:1}]}}]);
