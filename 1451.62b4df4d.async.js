"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[1451],{51451:function(t,e,a){a.r(e),a.d(e,{texts:function(){return n}});const n=[{value:"\u672C\u7BC7\u6211\u4EEC\u8BB2\u89E3\u4F7F\u7528 Docker \u90E8\u7F72\u6211\u4EEC\u7684 Next.js \u9879\u76EE\u3002",paraId:0,tocIndex:0},{value:"\u5982\u679C\u53EA\u662F\u628A\u9879\u76EE\u90E8\u7F72\u4E0A\u53BB\uFF0C\u5176\u5B9E\u5E76\u4E0D\u590D\u6742\u3002\u6211\u7ED9\u5927\u5BB6\u4E00\u4E2A\u7B80\u5355\u7684\u3001\u7528\u4E8E\u7406\u89E3\u5B66\u4E60\u3001\u6F14\u793A\u6838\u5FC3\u8981\u70B9\u7684\u793A\u4F8B\uFF1A",paraId:1,tocIndex:1},{value:"\u6211\u4EEC\u4EE5 Day11 \u5206\u652F\u7684\u4EE3\u7801\u4E3A\u4F8B\uFF0C\u6B64\u65F6\u6211\u4EEC\u7684\u4EE3\u7801\u4E2D\u4F7F\u7528\u4E86 Prisma + MySQL\u3002",paraId:2,tocIndex:2},{value:"\u4E0B\u8F7D\u6211\u4EEC\u7684 day11 \u5206\u652F\u4EE3\u7801\uFF1A",paraId:3,tocIndex:2},{value:`git clone -b day11 git@github.com:mqyqingfeng/next-react-notes-demo.git
`,paraId:4,tocIndex:2},{value:"\u5148\u672C\u5730\u8FD0\u884C\u4E00\u4E0B\uFF0C\u9A8C\u8BC1\u4EE3\u7801\u65E0\u95EE\u9898\uFF1A",paraId:5,tocIndex:2},{value:`# \u6CE8\u610F\u672C\u5730\u5F00\u542F MySQL \u540E\u8FD0\u884C\uFF1A
npm i && npm run dev
`,paraId:6,tocIndex:2},{value:"\u9879\u76EE\u6839\u76EE\u5F55\u65B0\u5EFA ",paraId:7,tocIndex:3},{value:".dockerignore",paraId:7,tocIndex:3},{value:"\u6587\u4EF6\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:7,tocIndex:3},{value:`Dockerfile
.dockerignore
node_modules
npm-debug.log
README.md
.next
docker
.git
`,paraId:8,tocIndex:3},{value:"\u9879\u76EE\u6839\u76EE\u5F55\u65B0\u5EFA ",paraId:9,tocIndex:3},{value:"Dockerfile",paraId:9,tocIndex:3},{value:"\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:9,tocIndex:3},{value:`FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install --registry=https://registry.npmmirror.com

RUN npx prisma generate

RUN chmod +x /startup.sh

EXPOSE 3000

ENTRYPOINT ["/startup.sh"]
`,paraId:10,tocIndex:3},{value:"\u6CE8\u610F\uFF1A\u8FD9\u91CC\u7684\u955C\u50CF\u6784\u5EFA\u6307\u4EE4\u5E76\u4E0D\u590D\u6742\uFF0C\u76F8\u4FE1\u5927\u5BB6\u6709",paraId:11,tocIndex:3},{value:"\u300A\u5B9E\u6218\u7BC7 | React Notes | Docker \u5FEB\u901F\u5165\u95E8\u300B",paraId:11,tocIndex:3},{value:"\u7684\u57FA\u7840\uFF0C\u90FD\u5F88\u5BB9\u6613\u7406\u89E3\u3002\u5173\u4E8E\u6700\u540E\u4E00\u53E5\u6307\u4EE4\uFF0C\u6211\u4EEC\u5E76\u6CA1\u6709\u4F7F\u7528 ",paraId:11,tocIndex:3},{value:"CMD",paraId:11,tocIndex:3},{value:"\uFF0C\u800C\u662F ",paraId:11,tocIndex:3},{value:"ENTRYPOINT",paraId:11,tocIndex:3},{value:"\uFF0C\u4E24\u8005\u4F5C\u7528\u7C7B\u4F3C\u3002\u4F7F\u7528 ",paraId:11,tocIndex:3},{value:"ENTRYPOINT",paraId:11,tocIndex:3},{value:"\uFF0C\u6211\u4EEC\u5C06\u6267\u884C\u5185\u5BB9\u653E\u5230\u4E86\u811A\u672C\u6587\u4EF6 ",paraId:11,tocIndex:3},{value:"startup.sh",paraId:11,tocIndex:3},{value:"\u4E2D\u3002",paraId:11,tocIndex:3},{value:"\u9879\u76EE\u6839\u76EE\u5F55\u65B0\u5EFA ",paraId:12,tocIndex:3},{value:"startup.sh",paraId:12,tocIndex:3},{value:"\u6587\u4EF6\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:12,tocIndex:3},{value:`#!/bin/sh

MIGRATION_STATUS=$(npx prisma migrate status)

if echo "$MIGRATION_STATUS" | grep -q "Database schema is up to date"; then
    echo "No migrations needed."
else
    echo "Running migrations..."
    npx prisma migrate deploy
fi

npm run build && npm run start
`,paraId:13,tocIndex:3},{value:"\u6267\u884C\u7684\u5185\u5BB9\u5E76\u4E0D\u590D\u6742\uFF0C\u4E3B\u8981\u662F\u56E0\u4E3A\u6211\u4EEC\u4F7F\u7528\u4E86 Prisma\uFF0C\u6240\u4EE5\u9700\u8981\u8FD0\u884C ",paraId:14,tocIndex:3},{value:"prisma generate",paraId:14,tocIndex:3},{value:"\u548C",paraId:14,tocIndex:3},{value:"prisma migrate deploy",paraId:14,tocIndex:3},{value:"\u3002",paraId:14,tocIndex:3},{value:"prisma generate",paraId:14,tocIndex:3},{value:"\u6211\u4EEC\u5DF2\u7ECF\u653E\u5230\u4E86\u6784\u5EFA\u6307\u4EE4\u4E2D\uFF0C",paraId:14,tocIndex:3},{value:"prisma migrate deploy",paraId:14,tocIndex:3},{value:"\u6211\u4EEC\u653E\u5230\u4E86\u8FD0\u884C\u811A\u672C\u4E2D\u3002",paraId:14,tocIndex:3},{value:"\u9879\u76EE\u6839\u76EE\u5F55\u65B0\u5EFA ",paraId:15,tocIndex:3},{value:"docker-compose.yml",paraId:15,tocIndex:3},{value:"\u6587\u4EF6\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:15,tocIndex:3},{value:`version: "3.9"

networks:
  react-notes:
    driver: bridge

services:

  mysql:
    image: mysql:8.0
    container_name: mysql
    command: --default-authentication-plugin=caching_sha2_password
    restart: unless-stopped
    environment:
      - MYSQL_ROOT_PASSWORD=admin
      - MYSQL_DATABASE=notes
      - MYSQL_USER=notes
      - MYSQL_PASSWORD=cpZfriEBbmJjWeiR
    ports:
      - '3306:3306'
    healthcheck:
      test: ['CMD', 'mysqladmin', 'ping', '-h127.0.0.1', '-P3306']
      interval: 5s
      timeout: 2s
      retries: 20
    networks:
      - react-notes

  next-app:
    container_name: next-app
    build:
      context: .
    restart: always
    ports:
      - 3000:3000
    networks:
      - react-notes
    depends_on:
      mysql:
        condition: service_healthy
`,paraId:16,tocIndex:3},{value:"\u5728\u8FD9\u6BB5\u4EE3\u7801\u4E2D\uFF0C\u8FD9\u91CC\u6211\u4EEC\u58F0\u660E\u4E86 ",paraId:17,tocIndex:3},{value:"mysql",paraId:17,tocIndex:3},{value:"\u7684\u5BB9\u5668\u540D\u4E3A ",paraId:17,tocIndex:3},{value:"mysql",paraId:17,tocIndex:3},{value:"\uFF0C\u5E76\u5EFA\u7ACB\u4E86\u4E00\u4E2A\u540D\u4E3A ",paraId:17,tocIndex:3},{value:"notes",paraId:17,tocIndex:3},{value:" \u7684 MySQL \u7528\u6237\uFF0C\u5BF9\u5E94\u4FEE\u6539\u6839\u76EE\u5F55\u7684 ",paraId:17,tocIndex:3},{value:"env",paraId:17,tocIndex:3},{value:"\u6587\u4EF6\u4E3A\uFF1A",paraId:17,tocIndex:3},{value:`DATABASE_URL="mysql://notes:cpZfriEBbmJjWeiR@mysql:3306/notes"
`,paraId:18,tocIndex:3},{value:"\u7A0D\u5FAE\u590D\u6742\u4E00\u70B9\u7684\u662F ",paraId:19,tocIndex:3},{value:"healthcheck",paraId:19,tocIndex:3},{value:"\uFF0C\u8FD9\u662F\u4E3A\u4E86\u4FDD\u8BC1 mysql \u5B8C\u5168\u8FD0\u884C\u540E\u624D\u8FD0\u884C ",paraId:19,tocIndex:3},{value:"next-app",paraId:19,tocIndex:3},{value:"\u3002\u6211\u4EEC\u53EF\u4EE5\u770B\u5230 ",paraId:19,tocIndex:3},{value:"next-app",paraId:19,tocIndex:3},{value:"\u7684 ",paraId:19,tocIndex:3},{value:"depends_on",paraId:19,tocIndex:3},{value:" \u91CC\u6709 ",paraId:19,tocIndex:3},{value:"mysql",paraId:19,tocIndex:3},{value:"\uFF0C\u4F9D\u8D56\u7684\u6761\u4EF6\u662F ",paraId:19,tocIndex:3},{value:"service_healthy",paraId:19,tocIndex:3},{value:"\uFF0C\u4E5F\u5C31\u662F\u8BF4 ",paraId:19,tocIndex:3},{value:"mysql",paraId:19,tocIndex:3},{value:" \u7684 ",paraId:19,tocIndex:3},{value:"healthcheck",paraId:19,tocIndex:3},{value:" \u8981\u5148\u901A\u8FC7\u624D\u4F1A\u8FD0\u884C ",paraId:19,tocIndex:3},{value:"next-app",paraId:19,tocIndex:3},{value:"\u3002",paraId:19,tocIndex:3},{value:"\u670D\u52A1\u5668\u5B89\u88C5 Docker \u548C Docker Compose\uFF0C\u6211\u662F\u76F4\u63A5\u7528\u5B9D\u5854\u5B89\u88C5\u4E86\uFF1A",paraId:20,tocIndex:4},{value:"\u6CE8\uFF1A\u5B89\u88C5\u7684\u901F\u5EA6\u4E0D\u7B97\u5FEB\uFF0C\u5927\u6982\u7B49\u5F85\u4E86 20 \u5206\u949F\u3002\u670D\u52A1\u5668\u76F4\u63A5\u5B89\u88C5\u53EF\u4EE5\u53C2\u8003\uFF1A",paraId:21,tocIndex:4},{value:"\u300A\u5B89\u88C5 Docker \u5E76\u4F7F\u7528\uFF08Linux\uFF09\u300B",paraId:21,tocIndex:4},{value:"\u3002",paraId:21,tocIndex:4},{value:"\u7136\u540E\u628A\u4EE3\u7801\u63A8\u9001\u5230\u670D\u52A1\u5668\uFF0C\u6CE8\u610F\u5982\u679C\u670D\u52A1\u5668\u5DF2\u7ECF\u5F00\u542F\u4E86 MySQL\uFF0C\u5148\u5173\u95ED MySQL\u3002\u6700\u540E\u547D\u4EE4\u884C\u8FDB\u5165\u670D\u52A1\u5668\u9879\u76EE\u76EE\u5F55\uFF0C\u8FD0\u884C ",paraId:22,tocIndex:4},{value:"docker compose up",paraId:22,tocIndex:4},{value:"\uFF0C\u6211\u4EEC\u5C31\u6210\u529F\u7684\u5C06\u9879\u76EE\u8FD0\u884C\u5728\u4E86\u670D\u52A1\u5668\u7684 ",paraId:22,tocIndex:4},{value:"3000",paraId:22,tocIndex:4},{value:" \u7AEF\u53E3\u3002",paraId:22,tocIndex:4},{value:"\u5982\u679C\u53C2\u7167\u8FC7",paraId:23,tocIndex:4},{value:"\u300A\u5B9E\u6218\u7BC7 | React Notes | \u670D\u52A1\u5668\u90E8\u7F72\u300B",paraId:23,tocIndex:4},{value:"\uFF0C\u56E0\u4E3A\u5DF2\u7ECF\u8BBE\u7F6E\u8FC7 Nginx\uFF0C\u6240\u4EE5\u4F1A\u5C06\u57DF\u540D ",paraId:23,tocIndex:4},{value:"notes.yayujs.com",paraId:23,tocIndex:4},{value:"\u4EE3\u7406\u5230 3000 \u7AEF\u53E3\uFF0C\u6240\u4EE5\u76F4\u63A5\u8BBF\u95EE\uFF1A",paraId:23,tocIndex:4},{value:"https://notes.yayujs.com/",paraId:23,tocIndex:4},{value:" \u5C31\u4F1A\u751F\u6548\uFF1A",paraId:23,tocIndex:4},{value:"\u5982\u679C\u4F60\u6CA1\u6709\u8BBE\u7F6E\u8FC7\uFF0C\u5B9D\u5854\u91CC\u4E5F\u652F\u6301\u5BB9\u5668\u5FEB\u6377\u7684\u8BBE\u7F6E\u53CD\u5411\u4EE3\u7406\u3001\u7ED1\u5B9A\u5230\u5177\u4F53\u7684\u57DF\u540D\u4E0A\uFF1A",paraId:24,tocIndex:4},{value:"\u73B0\u5728\u6211\u4EEC\u975E\u5E38\u968F\u610F\u7684\u5C31\u7528 Docker \u628A\u4EE3\u7801\u90E8\u7F72\u5230\u4E86\u670D\u52A1\u5668\u4E0A\u3002\u4F46\u662F\u8FD9\u6837\u7684\u65B9\u6CD5\u53EA\u80FD\u8BF4\u2014\u2014\u53C8\u4E0D\u662F\u4E0D\u80FD\u7528\u2026\u2026",paraId:25,tocIndex:5},{value:"\u95EE\u9898\u4F9D\u7136\u5F88\u591A\uFF0C\u6BD4\u5982\u7528\u4E86\u6570\u636E\u5E93\u5374\u6CA1\u6709\u505A\u6570\u636E\u6301\u4E45\u5316\u3001Next.js \u9879\u76EE\u6CA1\u6709\u5F00\u542F ",paraId:26,tocIndex:5},{value:"standalone",paraId:26,tocIndex:5},{value:" \u8F93\u51FA\u6A21\u5F0F\uFF0CDocker \u7684\u955C\u50CF\u6784\u5EFA\u592A\u8FC7\u968F\u610F\u5BFC\u81F4\u6784\u5EFA\u5305\u5F88\u5927\u7B49\u7B49\u2026\u2026",paraId:26,tocIndex:5},{value:"\u5B9E\u9645\u4E0A\uFF0C\u9009\u62E9\u7528 Docker \u9009\u62E9\u7684\u662F\u4E00\u79CD\u5F00\u53D1\u65B9\u5F0F\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4E0D\u662F\u5728\u672C\u5730\u5F00\u53D1\u5B8C\u4E86\u9879\u76EE\uFF0C\u6700\u540E\u7528 Docker \u90E8\u7F72\u4E00\u4E0B\uFF0C\u800C\u662F\u5728\u672C\u5730\u5F00\u53D1\u9879\u76EE\u7684\u65F6\u5019\uFF0C\u5C31\u5DF2\u7ECF\u5F00\u59CB\u4F7F\u7528 Docker \u4E86\u3002",paraId:27,tocIndex:5},{value:"\u6240\u4EE5\u5B66\u4E60\u672C\u7BC7\u4E0D\u8981\u7740\u6025\uFF0C\u6211\u4EEC\u4ECE\u5934\u5F00\u59CB\u8BF4\u8D77\u3002",paraId:28,tocIndex:5},{value:"\u5148\u8BF4\u8BF4\u65E5\u5E38\u5F00\u53D1\u9879\u76EE\u600E\u4E48\u4F7F\u7528 Docker\u3002\u6211\u4EEC\u4F9D\u7136\u4EE5 Day11 \u5206\u652F\u7684\u4EE3\u7801\u4E3A\u4F8B\uFF0C\u6B64\u65F6\u6211\u4EEC\u7684\u4EE3\u7801\u4E2D\u7528\u4E86 Prisma + MySQL\u3002",paraId:29,tocIndex:6},{value:"\u4E0B\u8F7D\u6211\u4EEC\u7684 day11 \u5206\u652F\u4EE3\u7801\uFF1A",paraId:30,tocIndex:6},{value:`git clone -b day11 git@github.com:mqyqingfeng/next-react-notes-demo.git
`,paraId:31,tocIndex:6},{value:"\u8001\u89C4\u77E9\uFF0C\u5148\u672C\u5730\u8FD0\u884C\u4E00\u4E0B\uFF0C\u9A8C\u8BC1\u4EE3\u7801\u65E0\u95EE\u9898\uFF1A",paraId:32,tocIndex:6},{value:`# \u6CE8\u610F\u8981\u5728\u672C\u5730\u5F00\u542F MySQL \u540E\u8FD0\u884C\uFF1A
npm i && npm run dev
`,paraId:33,tocIndex:6},{value:".dockerignore",paraId:34},{value:"\u9879\u76EE\u6839\u76EE\u5F55\u65B0\u5EFA ",paraId:35,tocIndex:7},{value:".dockerignore",paraId:35,tocIndex:7},{value:"\u6587\u4EF6\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:35,tocIndex:7},{value:`Dockerfile
.dockerignore
node_modules
npm-debug.log
README.md
.next
docker
.git
`,paraId:36,tocIndex:7},{value:"dev.Dockerfile",paraId:34},{value:"\u9879\u76EE\u6839\u76EE\u5F55\u65B0\u5EFA ",paraId:37,tocIndex:8},{value:"dev.Dockerfile",paraId:37,tocIndex:8},{value:"\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:37,tocIndex:8},{value:`FROM node:18-alpine

# RUN apt-get update -y
# RUN apt-get install -y openssl

WORKDIR /app

COPY . .

RUN npm i --registry=https://registry.npmmirror.com;

RUN chmod +x /app/dev.startup.sh

ENTRYPOINT ["sh", "/app/dev.startup.sh"]
`,paraId:38,tocIndex:8},{value:"\u5728\u8FD9\u6BB5\u4EE3\u7801\u4E2D\uFF1A",paraId:39,tocIndex:8},{value:"\u6211\u4EEC\u65B0\u5EFA\u7684\u662F ",paraId:40,tocIndex:8},{value:"dev.Dockerfile",paraId:40,tocIndex:8},{value:"\uFF0C\u4F46\u8DDF Next.js \u7684 ",paraId:40,tocIndex:8},{value:".env.development",paraId:40,tocIndex:8},{value:"\u4E0D\u540C\u7684\u662F\uFF0C",paraId:40,tocIndex:8},{value:".env.development",paraId:40,tocIndex:8},{value:" Next.js \u662F\u4F1A\u81EA\u52A8\u8BFB\u53D6\u7684\uFF0C\u4F46 Docker \u5E76\u4E0D\u4F1A\u81EA\u52A8\u8BFB\u53D6 ",paraId:40,tocIndex:8},{value:"dev.Dockerfile",paraId:40,tocIndex:8},{value:"\uFF0C\u6240\u4EE5\u540D\u5B57\u5176\u5B9E\u53EF\u4EE5\u4E71\u53D6\uFF0C\u6211\u4EEC\u53EA\u662F\u4E3A\u4E86\u65B9\u4FBF\u533A\u5206\u4E0D\u540C\u73AF\u5883\u7684 Dockerfile\u3002\uFF08PS\uFF1ADocker \u5176\u5B9E\u4E5F\u652F\u6301",paraId:40,tocIndex:8},{value:"\u5F00\u53D1\u73AF\u5883",paraId:40,tocIndex:8},{value:"\uFF0C\u4E0D\u8FC7\u76EE\u524D\u5904\u4E8E\u5F00\u53D1\u505C\u6EDE\u72B6\u6001\uFF09",paraId:40,tocIndex:8},{value:"\u518D\u89E3\u91CA\u4E0B\u4EE3\u7801\u7684\u542B\u4E49\u3002",paraId:41,tocIndex:8},{value:"RUN apt-get",paraId:41,tocIndex:8},{value:"\u8FD9\u4E24\u53E5\u662F\u4E3A\u4E86\u907F\u514D\u51FA\u73B0\u7C7B\u4F3C\u4E8E\u4E0B\u9762\u8FD9\u6837\u7684\u9519\u8BEF\u63D0\u793A\uFF08\u5982\u679C\u4F60\u9047\u5230\u4E86\u8FD9\u4E2A\u95EE\u9898\u7684\u8BDD\uFF0C\u53C2\u8003\u6B64 ",paraId:41,tocIndex:8},{value:"GitHub Issue",paraId:41,tocIndex:8},{value:"\uFF0C\u6CA1\u6709\u9047\u5230\u5C31\u4E0D\u7528\u5199\u4E86\uFF09\uFF1A",paraId:41,tocIndex:8},{value:'Prisma Client could not locate the Query Engine for runtime "debian-openssl-1.1.x".',paraId:42,tocIndex:8},{value:'This happened because Prisma Client was generated for "debian-openssl-3.0.x", but the actual deployment required "debian-openssl-1.1.x".',paraId:43,tocIndex:8},{value:'Add "debian-openssl-1.1.x" to ',paraId:44,tocIndex:8},{value:"binaryTargets",paraId:44,tocIndex:8},{value:' in the "schema.prisma" file and run ',paraId:44,tocIndex:8},{value:"prisma generate",paraId:44,tocIndex:8},{value:" after saving it:",paraId:44,tocIndex:8},{value:"\u7136\u540E\u6307\u5B9A\u5DE5\u4F5C\u76EE\u5F55\uFF0C\u62F7\u8D1D\u6240\u6709\u6587\u4EF6\u3001\u5B89\u88C5\u4F9D\u8D56\u5305\u3001\u7ED9\u811A\u672C\u6587\u4EF6\u6DFB\u52A0\u8FD0\u884C\u6743\u9650\u3002\u6700\u540E\u7528 ENTRYPOINT \u6307\u5B9A\u4E86\u5BB9\u5668\u542F\u52A8\u811A\u672C\u3002\u56E0\u4E3A\u6211\u4EEC\u7528\u4E86 Prisma\uFF0C\u811A\u672C\u5185\u5BB9\u6BD4\u8F83\u591A\uFF0C\u6240\u4EE5\u5355\u72EC\u4F7F\u7528\u4E86\u4E00\u4E2A\u811A\u672C\u6587\u4EF6\u3002",paraId:45,tocIndex:8},{value:"\u9879\u76EE\u6839\u76EE\u5F55\u65B0\u5EFA ",paraId:46,tocIndex:9},{value:"dev.startup.sh",paraId:46,tocIndex:9},{value:"\u6587\u4EF6\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:46,tocIndex:9},{value:`#!/bin/sh

MIGRATION_STATUS=$(npx prisma migrate status)

if echo "$MIGRATION_STATUS" | grep -q "Database schema is up to date"; then
    echo "No migrations needed."
else
    echo "Running migrations..."
    npx prisma migrate deploy
fi

npx prisma generate

if [ -f yarn.lock ]; then
    yarn dev;
elif [ -f package-lock.json ]; then
    npm run dev;
elif [ -f pnpm-lock.yaml ]; then
    pnpm dev;
else
    npm run dev;
fi
`,paraId:47,tocIndex:9},{value:"\u8FD9\u6BB5\u4EE3\u7801\u5E76\u4E0D\u590D\u6742\uFF0C\u4E00\u662F Prisma \u76F8\u5173\u5904\u7406\uFF0C\u4E8C\u662F\u8FD0\u884C ",paraId:48,tocIndex:9},{value:"npm run dev",paraId:48,tocIndex:9},{value:"\u5F00\u542F\u5F00\u53D1\u6A21\u5F0F\u3002\u4F60\u53EF\u80FD\u4F1A\u95EE\uFF0C",paraId:48,tocIndex:9},{value:"prisma generate",paraId:48,tocIndex:9},{value:"\u600E\u4E48\u53C8\u653E\u5230\u4E86\u811A\u672C\u91CC\u6267\u884C\uFF1F\u4E4B\u524D\u4E0D\u662F\u653E\u5728\u955C\u50CF\u6784\u5EFA\u6307\u4EE4\u91CC\u5417\uFF1F\u5176\u5B9E\u8FD9\u91CC\u653E\u54EA\u91CC\u90FD\u53EF\u4EE5\u7684\u3002\uFF08\u4F46\u662F\u7EBF\u4E0A\u90E8\u7F72\u7684\u65F6\u5019\u56E0\u4E3A\u5F00\u542F\u4E86 standalone \u8F93\u51FA\u6A21\u5F0F\u53EA\u80FD\u653E\u5728\u6784\u5EFA\u6307\u4EE4\u4E2D\uFF09",paraId:48,tocIndex:9},{value:"\u9879\u76EE\u6839\u76EE\u5F55\u65B0\u5EFA ",paraId:49,tocIndex:10},{value:"dev.docker-compose.yml",paraId:49,tocIndex:10},{value:" \u6587\u4EF6\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:49,tocIndex:10},{value:`version: "3.8"

networks:
  react-notes-dev:
    driver: bridge

services:
  next-app-dev:
    container_name: next-app
    build:
      context: .
      dockerfile: dev.Dockerfile
    env_file:
      - .env
      - .env.development
    volumes:
      - .:/app
    restart: always
    ports:
      - 3000:3000
    networks:
      - react-notes-dev
    depends_on:
      mysql:
        condition: service_healthy

  mysql:
    image: mysql:8.0
    container_name: next-app-mysql
    command: --default-authentication-plugin=caching_sha2_password
    restart: unless-stopped
    # volumes:
    #   - ./docker/data/mysql/:/var/lib/mysql/
    environment:
      - MYSQL_ROOT_PASSWORD=admin
      - MYSQL_DATABASE=notes
      - MYSQL_USER=notes
      - MYSQL_PASSWORD=cpZfriEBbmJjWeiR
    ports:
      - '3306:3306'
    healthcheck:
      test: ['CMD', 'mysqladmin', 'ping', '-h127.0.0.1', '-P3306']
      interval: 5s
      timeout: 2s
      retries: 20
    networks:
      - react-notes-dev
`,paraId:50,tocIndex:10},{value:"\u8FD9\u6BB5\u4EE3\u7801\u4E5F\u5F88\u597D\u7406\u89E3\uFF0C\u6CE8\u610F ",paraId:51,tocIndex:10},{value:"next-app",paraId:51,tocIndex:10},{value:" \u7684\u6570\u636E\u5377\uFF0C\u56E0\u4E3A\u6211\u4EEC\u5C06\u9879\u76EE\u7684\u6240\u6709\u5185\u5BB9\u90FD\u6302\u8F7D\u5230\u5DE5\u4F5C\u76EE\u5F55 ",paraId:51,tocIndex:10},{value:"/app",paraId:51,tocIndex:10},{value:" \u4E0B\uFF0C\u5F53\u6211\u4EEC\u4FEE\u6539\u9879\u76EE\u6587\u4EF6\u65F6\uFF0CDocker \u91CC\u8FD0\u884C\u7684\u9879\u76EE\u4E5F\u4F1A\u6B63\u5E38\u53D1\u751F\u4FEE\u6539\uFF0C\u6240\u4EE5\u5373\u4FBF\u4F7F\u7528\u4E86 Docker \u4E5F\u7EE7\u7EED\u652F\u6301\u70ED\u66F4\u65B0\u3002",paraId:51,tocIndex:10},{value:"\u6839\u76EE\u5F55\u7684 ",paraId:52,tocIndex:10},{value:".env.development",paraId:52,tocIndex:10},{value:"\u6587\u4EF6\u5BF9\u5E94\u4FEE\u6539\u4E3A\uFF1A",paraId:52,tocIndex:10},{value:`DATABASE_URL="mysql://notes:cpZfriEBbmJjWeiR@next-app-mysql:3306/notes"
`,paraId:53,tocIndex:10},{value:"\u6B64\u65F6\u8FD0\u884C ",paraId:54,tocIndex:10},{value:"docker compose -f dev.docker-compose.yml up",paraId:54,tocIndex:10},{value:"\uFF0C\u672C\u5730\u8BBF\u95EE ",paraId:54,tocIndex:10},{value:"http://localhost:3000/",paraId:54,tocIndex:10},{value:"\u5E94\u8BE5\u5DF2\u7ECF\u53EF\u4EE5\u6B63\u5E38\u8FD0\u884C\uFF1A",paraId:54,tocIndex:10},{value:"\u4F7F\u7528 ",paraId:55,tocIndex:11},{value:"next-auth",paraId:55,tocIndex:11},{value:" \u7684\u65F6\u5019\uFF0C\u5982\u679C\u90E8\u7F72\u5230\u7EBF\u4E0A\u73AF\u5883\uFF0C\u53EF\u80FD\u9700\u8981\u989D\u5916\u8BBE\u7F6E\u4E00\u4E0B ",paraId:55,tocIndex:11},{value:"AUTH_URL",paraId:55,tocIndex:11},{value:"\u3002\u5BF9\u4E8E\u521D\u5B66\u8005\u800C\u8A00\uFF0C\u53C8\u6709\u53EF\u80FD\u5FD8\u8BB0\u8FD9\u4EF6\u4E8B\u60C5\uFF0C\u4E8E\u662F\u660E\u660E\u5728\u672C\u5730\u8FD0\u884C\u6CA1\u6709\u95EE\u9898\uFF0C\u4F46\u53D1\u5E03\u5230\u7EBF\u4E0A\u540E\u5C31\u51FA\u73B0\u4E86\u95EE\u9898\u2026\u2026\u5E72\u8106\u6211\u4EEC\u672C\u5730\u5F00\u53D1\u7684\u65F6\u5019\u5C31\u76F4\u63A5\u4F7F\u7528\u7EBF\u4E0A\u57DF\u540D\u8FDB\u884C\u5F00\u53D1\uFF01",paraId:55,tocIndex:11},{value:"\u6211\u4EEC\u8BBE\u60F3\u7684\u5F00\u53D1\u65B9\u5F0F\u662F\u672C\u5730\u6D4F\u89C8\u5668\u8BBF\u95EE ",paraId:56,tocIndex:11},{value:"https://notes.yayujs.com",paraId:56,tocIndex:11},{value:"\u5C31\u4F1A\u8FDB\u5165\u6211\u4EEC\u672C\u5730\u542F\u7528\u7684\u9875\u9762\u3002\u4E3A\u6B64\u4F60\u9700\u8981\u4FEE\u6539\u4E3B\u673A\u7684 ",paraId:56,tocIndex:11},{value:"host",paraId:56,tocIndex:11},{value:":",paraId:56,tocIndex:11},{value:`# \u4FEE\u6539 host \u6587\u4EF6
vim /etc/hosts

# \u6DFB\u52A0\u5982\u4E0B\uFF1A
127.0.0.1 notes.yayujs.com
`,paraId:57,tocIndex:11},{value:"\u5176\u5B9E\u4FEE\u6539 host \u5E76\u4E0D\u7B97\u590D\u6742\uFF0C\u4F46\u662F\u53D1\u5E03\u5230\u7EBF\u4E0A\u53C8\u9700\u8981\u6CE8\u91CA\u6389\u5BF9\u5E94\u7684\u57DF\u540D\u624D\u80FD\u67E5\u770B\u6548\u679C\uFF0C\u5F00\u53D1\u672C\u5730\u53C8\u9700\u8981\u89E3\u5F00\u6CE8\u91CA\u624D\u80FD\u67E5\u770B\u6548\u679C\u3002\u4E00\u6765\u4E8C\u53BB\u4E5F\u5C31\u9EBB\u70E6\u4E86\uFF0C\u4E3A\u6B64\u4F60\u53EF\u4EE5\u4F7F\u7528 ",paraId:58,tocIndex:11},{value:"SwitchHosts",paraId:58,tocIndex:11},{value:" \u8FD9\u4E2A\u8F6F\u4EF6\uFF1A",paraId:58,tocIndex:11},{value:"\u501F\u52A9 SwitchHosts \u8FD9\u4E2A\u8F6F\u4EF6\uFF0C\u4F60\u53EF\u4EE5\u8F7B\u677E\u5207\u6362 host\u3002",paraId:59,tocIndex:11},{value:"\u6CE8\u610F\uFF1A\u5982\u679C\u5207\u6362 host \u540E\uFF0C\u6D4F\u89C8\u5668\u6CA1\u6709\u6210\u529F\u89E3\u6790\uFF0C\u4F60\u53EF\u4EE5\u8FDB\u884C\u8FD9\u6837\u4E00\u4E9B\u5C1D\u8BD5\uFF1A",paraId:60,tocIndex:11},{value:"\u6709\u53EF\u80FD\u662F\u6D4F\u89C8\u5668\u505A\u4E86 DNS \u7F13\u5B58\u6216\u5176\u4ED6\u5904\u7406\u3002\u6D4F\u89C8\u5668\u6253\u5F00 ",paraId:61,tocIndex:11},{value:"chrome://net-internals/#sockets",paraId:61,tocIndex:11},{value:"\uFF0C\u70B9\u51FB ",paraId:61,tocIndex:11},{value:"Flush Socket Pools",paraId:61,tocIndex:11},{value:"\u3002\u6CE8\u610F Flush \u7684\u662F\u5F53\u524D\u7A97\u53E3\u91CC\u7684\u6240\u6709\u9875\u9762\u3002",paraId:61,tocIndex:11},{value:"\u6709\u53EF\u80FD\u662F\u4F7F\u7528\u4E86\u4EE3\u7406\u5BFC\u81F4\u3002\u8FD9\u4E2A\u65F6\u5019\u5C31\u9700\u8981\u5C06\u4F60\u7684\u57DF\u540D\u653E\u5230\u4EE3\u7406\u7684\u6392\u9664\u540D\u5355\u91CC\u3002\u6211\u4EEC\u4EE5 ClashX \u4E3A\u4F8B\uFF0C\u6253\u5F00 ",paraId:62,tocIndex:11},{value:"~/.config/clash",paraId:62,tocIndex:11},{value:"\uFF0C\u6DFB\u52A0\u4E00\u4E2A\u540D\u4E3A ",paraId:62,tocIndex:11},{value:"proxyIgnoreList.plist",paraId:62,tocIndex:11},{value:"\u7684\u6587\u4EF6\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:62,tocIndex:11},{value:`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<array>
    <string>192.168.0.0/16</string>
    <string>10.0.0.0/8</string>
    <string>172.16.0.0/12</string>
    <string>127.0.0.1</string>
    <string>localhost</string>
    <string>*.local</string>
    <string>http://notes.yayujs.com</string>
    <string>https://notes.yayujs.com</string>
</array>
</plist>
`,paraId:63,tocIndex:11},{value:"\u5728 ",paraId:64,tocIndex:11},{value:"<string>",paraId:64,tocIndex:11},{value:"\u6807\u7B7E\u4E2D\u6DFB\u52A0\u8981\u6392\u9664\u7684\u57DF\u540D\uFF0C\u7136\u540E\u91CD\u542F ClashX \u5373\u53EF\u3002",paraId:64,tocIndex:11},{value:"\u8BBE\u7F6E host \u540E\uFF0C\u6B64\u65F6\u8BBF\u95EE ",paraId:65,tocIndex:11},{value:"http://notes.yayujs.com:3000/",paraId:65,tocIndex:11},{value:"\uFF1A",paraId:65,tocIndex:11},{value:"\u6CE8\uFF1A\u6B64\u65F6\u4E5F\u53EA\u662F\u80FD\u6B63\u5E38\u8BBF\u95EE\u9996\u9875\uFF0C\u529F\u80FD\u6BD4\u5982\u767B\u5F55\u8FD8\u6709\u95EE\u9898",paraId:66,tocIndex:11},{value:"\u6211\u4EEC\u7684\u76EE\u6807\u662F\u672C\u5730\u8BBF\u95EE ",paraId:67,tocIndex:12},{value:"https://notes.yayujs.com",paraId:67,tocIndex:12},{value:"\u7684\u65F6\u5019\u53EF\u4EE5\u8FDB\u5165\u6211\u4EEC\u7684\u5F00\u53D1\u9875\u9762\uFF0C\u901A\u8FC7 switchHosts \u5173\u95ED\u76F8\u5173 host \u7684\u65F6\u5019\uFF0C\u8BBF\u95EE ",paraId:67,tocIndex:12},{value:"https://notes.yayujs.com",paraId:67,tocIndex:12},{value:"\u5219\u4F1A\u8FDB\u5165\u6211\u4EEC\u7684\u7EBF\u4E0A\u90E8\u7F72\u9875\u9762\u3002\u4E3A\u6B64\u6211\u4EEC\u9700\u8981\u7528\u5230 nginx \u955C\u50CF\u3002",paraId:67,tocIndex:12},{value:"\u4FEE\u6539 ",paraId:68,tocIndex:12},{value:"dev.docker-compose.yml",paraId:68,tocIndex:12},{value:" \u6587\u4EF6\uFF0C\u5B8C\u6574\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:68,tocIndex:12},{value:`version: "3.8"

networks:
  react-notes-dev:
    driver: bridge

services:
  next-app-dev:
    container_name: next-app
    build:
      context: .
      dockerfile: dev.Dockerfile
    env_file:
      - .env
      - .env.development
    volumes:
      - .:/app
    restart: always
    ports:
      - 3000:3000
    networks:
      - react-notes-dev
    depends_on:
      mysql:
        condition: service_healthy

  mysql:
    image: mysql:8.0
    container_name: next-app-mysql
    command: --default-authentication-plugin=caching_sha2_password
    restart: unless-stopped
    # volumes:
    #   - ./docker/data/mysql/:/var/lib/mysql/
    environment:
      - MYSQL_ROOT_PASSWORD=admin
      - MYSQL_DATABASE=notes
      - MYSQL_USER=notes
      - MYSQL_PASSWORD=cpZfriEBbmJjWeiR
    ports:
      - '3306:3306'
    healthcheck:
      test: ['CMD', 'mysqladmin', 'ping', '-h127.0.0.1', '-P3306']
      interval: 5s
      timeout: 2s
      retries: 20
    networks:
      - react-notes-dev

  nginx:
    image: nginx
    container_name: next-app-nginx
    volumes:
      - ./docker/nginx.conf:/etc/nginx/nginx.conf
      - ./docker/ssl/notes.yayujs.com.key:/etc/nginx/ssl/notes.yayujs.com.key
      - ./docker/ssl/notes.yayujs.com.pem:/etc/nginx/ssl/notes.yayujs.com.pem
    ports:
      - 80:80
      - 443:443
    restart: always
    networks:
      - react-notes-dev
    depends_on:
      - next-app-dev
`,paraId:69,tocIndex:12},{value:"\u9879\u76EE\u6839\u76EE\u5F55\u65B0\u5EFA ",paraId:70,tocIndex:12},{value:"docker",paraId:70,tocIndex:12},{value:"\u6587\u4EF6\u5939\uFF0C\u7136\u540E\u65B0\u5EFA ",paraId:70,tocIndex:12},{value:"nginx.conf",paraId:70,tocIndex:12},{value:"\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:70,tocIndex:12},{value:`events {
    worker_connections   1000;
}
http {
    include /etc/nginx/mime.types;
    upstream nextjs_upstream {
        server next-app:3000;
    }
    server {
        listen 80;
        listen 443 ssl;
        server_name  notes.yayujs.com;

        ssl_certificate /etc/nginx/ssl/notes.yayujs.com.pem;
        ssl_certificate_key /etc/nginx/ssl/notes.yayujs.com.key;
        ssl_session_timeout 5m;
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
        ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3;
        ssl_prefer_server_ciphers on;

        gzip on;
        gzip_proxied any;
        gzip_comp_level 4;
        gzip_types text/css application/javascript image/svg+xml;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;

        location / {
          proxy_pass http://nextjs_upstream;
          proxy_set_header Host $host;
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
          proxy_set_header REMOTE-HOST $remote_addr;
          add_header X-Cache $upstream_cache_status;
          proxy_set_header X-Host $host;
          proxy_set_header X-Scheme $scheme;
          proxy_connect_timeout 30s;
          proxy_read_timeout 86400s;
          proxy_send_timeout 30s;
          proxy_http_version 1.1;
          proxy_set_header Upgrade $http_upgrade;
          proxy_set_header Connection "upgrade";
        }
    }
}
`,paraId:71,tocIndex:12},{value:"\u540C\u65F6\u5728 ",paraId:72,tocIndex:12},{value:"docker",paraId:72,tocIndex:12},{value:"\u76EE\u5F55\u4E0B\u65B0\u5EFA ",paraId:72,tocIndex:12},{value:"ssl",paraId:72,tocIndex:12},{value:"\u6587\u4EF6\u5939\uFF0C\u7136\u540E\u653E\u5165\u5F00\u542F https \u4F1A\u7528\u5230\u7684 key \u548C pem \u6587\u4EF6\u3002",paraId:72,tocIndex:12},{value:"\u6CE8\uFF1A\u6309\u7406\u8BF4\u8FD9\u4E9B\u518D\u52A0\u4E0A\u8BBE\u7F6E AUTH_URL \u5C31\u591F\u4E86\uFF0C\u4F46\u662F\u56E0\u4E3A\u7528\u7684\u662F next-auth v5 beta \u7248\u672C\uFF0C\u76EE\u524D\u8FD8\u4E0D\u7B97\u7A33\u5B9A\uFF0C\u5982\u679C\u4E0D\u4F7F\u7528 AUTH_URL\uFF0C\u70B9\u51FB ",paraId:73,tocIndex:12},{value:"signIn",paraId:73,tocIndex:12},{value:" \u7684\u65F6\u5019\u8DF3\u8F6C\u5730\u5740\u7684 callbackUrl \u4F1A\u8BBE\u7F6E\u4E3A ",paraId:73,tocIndex:12},{value:"localhost:3000",paraId:73,tocIndex:12},{value:"\uFF0C\u5982\u679C\u6DFB\u52A0 ",paraId:73,tocIndex:12},{value:"AUTH_URL",paraId:73,tocIndex:12},{value:"\uFF0C\u4F1A\u51FA\u73B0\u62A5\u9519\uFF1A",paraId:73,tocIndex:12},{value:"TypeError: next_dist_server_web_exports_next_request__WEBPACK_IMPORTED_MODULE_0__ is not a constructor",paraId:74,tocIndex:12},{value:"\u6839\u636E\u8FD9\u4E2A ",paraId:75,tocIndex:12},{value:"GitHub Issue",paraId:75,tocIndex:12},{value:" \u7684\u63CF\u8FF0\uFF0C\u6B64\u95EE\u9898\u4F1A\u7531 Next.js \u4FEE\u590D\uFF0C\u4F46\u76EE\u524D\u8FD8\u6CA1\u6709\u53D1\u5E03\u5230\u7A33\u5B9A\u7248\u3002\u5BF9\u6B64\u6211\u7684\u5904\u7406\u65B9\u5F0F\u662F\u5728 ",paraId:75,tocIndex:12},{value:"next-auth",paraId:75,tocIndex:12},{value:" \u7684 ",paraId:75,tocIndex:12},{value:"redirects",paraId:75,tocIndex:12},{value:" \u56DE\u8C03\u51FD\u6570\u4E2D\u505A\u4E00\u5C42\u5904\u7406\uFF0C\u4FEE\u6539 ",paraId:75,tocIndex:12},{value:"auth.js",paraId:75,tocIndex:12},{value:"\uFF1A",paraId:75,tocIndex:12},{value:`import NextAuth from 'next-auth';
// import GitHub from "next-auth/providers/github"
import CredentialsProvider from 'next-auth/providers/credentials';
import { addUser, getUser } from '@/lib/prisma';

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      // \u663E\u793A\u6309\u94AE\u6587\u6848 (e.g. "Sign in with...")
      name: '\u5BC6\u7801\u767B\u5F55',
      // \`credentials\` \u7528\u4E8E\u6E32\u67D3\u767B\u5F55\u9875\u9762\u8868\u5355
      credentials: {
        username: { label: '\u8D26\u53F7', type: 'text', placeholder: '\u8F93\u5165\u60A8\u7684\u8D26\u53F7' },
        password: {
          label: '\u5BC6\u7801',
          type: 'password',
          placeholder: '\u8F93\u5165\u60A8\u7684\u5BC6\u7801',
        },
      },
      // \u5904\u7406\u4ECE\u7528\u6237\u6536\u5230\u7684\u8BA4\u8BC1\u4FE1\u606F
      async authorize(credentials, req) {
        // \u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4E0D\u5BF9\u7528\u6237\u8F93\u5165\u8FDB\u884C\u9A8C\u8BC1\uFF0C\u786E\u4FDD\u4F7F\u7528 Zod \u8FD9\u6837\u7684\u5E93\u8FDB\u884C\u9A8C\u8BC1
        let user = null;

        // \u767B\u9646\u4FE1\u606F\u9A8C\u8BC1
        user = await getUser(credentials.username, credentials.password);

        // \u5BC6\u7801\u9519\u8BEF
        if (user === 1) return null;

        // \u7528\u6237\u6CE8\u518C
        if (user === 0) {
          user = await addUser(credentials.username, credentials.password);
        }

        if (!user) {
          throw new Error('User was not found and could not be created.');
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      if (pathname.startsWith('/note/edit')) return !!auth;
      return true;
    },
    async jwt({ token, user, account }) {
      if (account && account.type === 'credentials' && user) {
        token.userId = user.userId;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.userId) {
        session.user.userId = token.userId;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith('/')) return \`\${baseUrl}\${url}\`;
      else if (new URL(url).origin === baseUrl) return url;
      if (baseUrl.indexOf(':3000') > -1) return url;
      return baseUrl;
    },
  },
  trustHost: true,
});
`,paraId:76,tocIndex:12},{value:"\u8FD0\u884C\uFF1A",paraId:77,tocIndex:12},{value:`# \u5220\u9664\u6389\u4E4B\u524D\u7684\u5BB9\u5668
docker compose -f dev.docker-compose.yml down
# \u91CD\u65B0\u6784\u5EFA\u955C\u50CF
docker compose -f dev.docker-compose.yml up --build
`,paraId:78,tocIndex:12},{value:"\u672C\u5730\u8BBF\u95EE ",paraId:79,tocIndex:12},{value:"https://notes.yayujs.com",paraId:79,tocIndex:12},{value:"\uFF0C\u6B64\u65F6\u5E94\u8BE5\u53EF\u4EE5\u6B63\u5E38\u8FD0\u884C\uFF1A",paraId:79,tocIndex:12},{value:"\u90A3\u4E48\u95EE\u9898\u6765\u4E86\uFF0C\u5982\u679C\u6211\u5207\u6362\u4E86 host\uFF0C\u6211\u5982\u4F55\u77E5\u9053\u6D4F\u89C8\u5668\u6253\u5F00\u7684\u5730\u5740\u8BBF\u95EE\u7684\u662F\u7EBF\u4E0A\u8FD8\u662F\u672C\u5730\u5462\uFF1F",paraId:80,tocIndex:12},{value:"\u65B9\u6CD5\u6709\u5F88\u591A\u79CD\uFF0C\u4E00\u79CD\u7B80\u5355\u7684\u65B9\u5F0F\u662F\u67E5\u770B\u9875\u9762\u8BF7\u6C42\u5934\uFF0C\u5982\u679C\u662F\u672C\u5730\uFF1A",paraId:81,tocIndex:12},{value:"\u5982\u679C\u662F\u7EBF\u4E0A\uFF1A",paraId:82,tocIndex:12},{value:"\u5982\u679C\u5207\u6362\u540E\u6CA1\u6709\u751F\u6548\uFF0C\u5C31\u53C2\u7167\u4E0A\u8282\u8BB2\u7684\u4E24\u79CD\u65B9\u5F0F\u8BD5\u8BD5\u3002",paraId:83,tocIndex:12},{value:"\u81F3\u6B64\u6211\u4EEC\u5C31\u7528 Docker \u642D\u5EFA\u4E86\u4E00\u4E2A\u5F00\u53D1\u73AF\u5883\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F\uFF1A",paraId:84,tocIndex:12},{value:"\u63D0\u4F9B\u4E00\u4E2A\u4E00\u81F4\u7684\u5F00\u53D1\u73AF\u5883\uFF0C\u4E0D\u7528\u5728\u6BCF\u53F0\u4E3B\u673A\u4E0A\u90FD\u914D\u7F6E\u4E00\u904D",paraId:85,tocIndex:12},{value:"\u6A21\u62DF\u590D\u5236\u4E00\u4E2A\u7EBF\u4E0A\u73AF\u5883\uFF0C\u4E0D\u7528\u62C5\u5FC3\u6F0F\u6389\u67D0\u4E9B\u914D\u7F6E",paraId:85,tocIndex:12},{value:"\u6B63\u5E38\u672C\u5730\u5F00\u53D1 Next.js \u9879\u76EE\u7684\u529F\u80FD\u5982\u70ED\u66F4\u65B0\u7EE7\u7EED\u652F\u6301\uFF0C\u80FD\u591F\u5B9E\u65F6\u67E5\u770B\u6548\u679C",paraId:85,tocIndex:12},{value:"\u63A5\u4E0B\u6765\u6211\u4EEC\u770B\u770B\u751F\u4EA7\u90E8\u7F72\u7684\u65F6\u5019\u8981\u505A\u4E9B\u4EC0\u4E48\u3002",paraId:86,tocIndex:13},{value:"\u5176\u5B9E\u4E3B\u8981\u5C31\u4E24\u4EF6\u4E8B\u60C5\uFF0C\u4E00\u662F\u7F16\u8BD1\u548C\u8FD0\u884C\u751F\u4EA7\u7248\u672C\uFF0C\u4E8C\u662F\u51CF\u5C11\u955C\u50CF\u5927\u5C0F\uFF0C\u6BD5\u7ADF\u6211\u4EEC\u5F00\u53D1\u65F6\u6784\u5EFA\u7684\u955C\u50CF\u5305\u90FD\u5FEB\u6709 1G \u4E86\uFF1A",paraId:87,tocIndex:13},{value:"\u8FD9\u8C01\u80FD\u5FCD\uFF1F\uFF08\u5176\u5B9E\u6211\u80FD\u5FCD\uFF0C\u4F46\u4E3A\u4E86\u663E\u5F97\u6211\u7CBE\u76CA\u6C42\u7CBE\u3001\u65E2\u8981\u53C8\u8981\u8FD8\u8981\uFF0C\u6211\u4EEC\u8FD8\u662F\u52AA\u529B\u4F18\u5316\u4E00\u4E0B\u2026\u2026\uFF09",paraId:88,tocIndex:13},{value:"\u51CF\u5C11\u955C\u50CF\u7684\u5927\u5C0F\uFF0C\u4E3B\u8981\u662F\u5F00\u542F Next.js \u9879\u76EE\u7684 standalone \u6A21\u5F0F\uFF0C\u7136\u540E\u4F18\u5316\u955C\u50CF\u6784\u5EFA\u3002",paraId:89,tocIndex:13},{value:"\u6CE8\uFF1A\u5173\u4E8E standalone \u8F93\u51FA\u6A21\u5F0F\u7684\u4ECB\u7ECD\u53EF\u4EE5\u67E5\u770B",paraId:90,tocIndex:13},{value:"\u300AAPI \u7BC7 | next.config.js\uFF08\u4E0B\uFF09\u300B",paraId:90,tocIndex:13},{value:"\u90A3\u5C31\u8BA9\u6211\u4EEC\u5F00\u59CB\u5427\u3002",paraId:91,tocIndex:13},{value:"\u4FEE\u6539 ",paraId:92,tocIndex:13},{value:"next.config.js",paraId:92,tocIndex:13},{value:"\uFF0C\u5F00\u542F standalone \u8F93\u51FA\u6A21\u5F0F\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:92,tocIndex:13},{value:`const nextConfig = {
  output: 'standalone',
};
module.exports = nextConfig;
`,paraId:93,tocIndex:13},{value:"\u9879\u76EE\u6839\u76EE\u5F55\u65B0\u5EFA ",paraId:94,tocIndex:13},{value:"prod.Dockerfile",paraId:94,tocIndex:13},{value:"\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:94,tocIndex:13},{value:`FROM node:18-alpine AS base

FROM base AS builder

WORKDIR /app

COPY . .

RUN npm i --registry=https://registry.npmmirror.com;

RUN npx prisma generate

RUN npm run build;

FROM base AS runner

WORKDIR /app

COPY --from=builder /app/public ./public

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

ENV NEXT_TELEMETRY_DISABLED 1

COPY prisma ./prisma/
COPY prod.startup.sh ./prod.startup.sh
RUN chmod +x /app/prod.startup.sh

ENTRYPOINT ["sh", "/app/prod.startup.sh"]
`,paraId:95,tocIndex:13},{value:"\u9879\u76EE\u6839\u76EE\u5F55\u65B0\u5EFA ",paraId:96,tocIndex:13},{value:"prod.startup.sh",paraId:96,tocIndex:13},{value:"\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:96,tocIndex:13},{value:`#!/bin/sh

MIGRATION_STATUS=$(npx prisma migrate status)

if echo "$MIGRATION_STATUS" | grep -q "Database schema is up to date"; then
    echo "No migrations needed."
else
    echo "Running migrations..."
    npx prisma migrate deploy
fi

node server.js
`,paraId:97,tocIndex:13},{value:"\u9879\u76EE\u6839\u76EE\u5F55\u65B0\u5EFA ",paraId:98,tocIndex:13},{value:"prod.docker-compose.yml",paraId:98,tocIndex:13},{value:"\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:98,tocIndex:13},{value:`version: '3.8'

networks:
  react-notes-prod:
    driver: bridge

services:
  next-app-prod:
    container_name: next-app
    build:
      context: .
      dockerfile: prod.Dockerfile
    env_file:
      - .env
      - .env.production
    restart: always
    ports:
      - 3000:3000
    networks:
      - react-notes-prod
    depends_on:
      mysql:
        condition: service_healthy

  mysql:
    image: mysql:8.0
    container_name: next-app-mysql
    command: --default-authentication-plugin=caching_sha2_password
    restart: unless-stopped
    # volumes:
    #   - ./docker/data/mysql/:/var/lib/mysql/
    environment:
      - MYSQL_ROOT_PASSWORD=admin
      - MYSQL_DATABASE=notes
      - MYSQL_USER=notes
      - MYSQL_PASSWORD=cpZfriEBbmJjWeiR
    ports:
      - '3306:3306'
    healthcheck:
      test: ['CMD', 'mysqladmin', 'ping', '-h127.0.0.1', '-P3306']
      interval: 5s
      timeout: 2s
      retries: 20
    networks:
      - react-notes-prod

  nginx:
    image: nginx
    container_name: next-app-nginx
    volumes:
      - ./docker/nginx.conf:/etc/nginx/nginx.conf
      - ./docker/ssl/notes.yayujs.com.key:/etc/nginx/ssl/notes.yayujs.com.key
      - ./docker/ssl/notes.yayujs.com.pem:/etc/nginx/ssl/notes.yayujs.com.pem
    ports:
      - 80:80
      - 443:443
    restart: always
    networks:
      - react-notes-prod
    depends_on:
      - next-app-prod
`,paraId:99,tocIndex:13},{value:"\u4FEE\u6539 ",paraId:100,tocIndex:13},{value:".env",paraId:100,tocIndex:13},{value:"\uFF1A",paraId:100,tocIndex:13},{value:`DATABASE_URL="mysql://notes:cpZfriEBbmJjWeiR@next-app-mysql:3306/notes"
`,paraId:101,tocIndex:13},{value:"\u4FEE\u6539 ",paraId:102,tocIndex:13},{value:".env.production",paraId:102,tocIndex:13},{value:"\uFF1A",paraId:102,tocIndex:13},{value:`# \u6CE8\u91CA\u6389 AUTH_URL\uFF0C\u56E0\u4E3A\u4F1A\u5BFC\u81F4\u62A5\u9519\uFF0C\u9884\u8BA1\u4F1A\u5728 Next.js v14.1.1 \u7248\u672C\u4FEE\u590D
# AUTH_URL=https://notes.yayujs.com
`,paraId:103,tocIndex:13},{value:"\u56E0\u4E3A\u5BB9\u5668\u540D\u4E0D\u80FD\u91CD\u590D\uFF0C\u6211\u4EEC\u5220\u9664\u6389\u4E4B\u524D\u7528\u4E8E\u5F00\u53D1\u6A21\u5F0F\u7684\u5BB9\u5668\uFF1A",paraId:104,tocIndex:13},{value:`docker compose -f dev.docker-compose.yml down
`,paraId:105,tocIndex:13},{value:"\u7136\u540E\u6784\u5EFA\u955C\u50CF\u5E76\u8FD0\u884C\u751F\u4EA7\u6A21\u5F0F\u7684\u5BB9\u5668\uFF1A",paraId:106,tocIndex:13},{value:`docker compose -f prod.docker-compose.yml up
`,paraId:107,tocIndex:13},{value:"\u6B64\u65F6\u672C\u5730\u5E94\u8BE5\u53EF\u4EE5\u6B63\u5E38\u8BBF\u95EE\uFF1A",paraId:108,tocIndex:13},{value:"\u67E5\u770B\u955C\u50CF\u5927\u5C0F\uFF1A",paraId:109,tocIndex:13},{value:"\u955C\u50CF\u4ECE\u4E4B\u524D\u7684 830M \u4F18\u5316\u5230\u4E86\u73B0\u5728\u7684 169M\uFF0C\u53EF\u559C\u53EF\u8D3A\uFF01\uFF08\u61D2\u5F97\u7EE7\u7EED\u4F18\u5316\u4E86\u2026\u2026\uFF09",paraId:110,tocIndex:13},{value:"\u90E8\u7F72\u5230\u7EBF\u4E0A\u7684\u65B9\u5F0F\u4E5F\u5F88\u7B80\u5355\uFF1A",paraId:111,tocIndex:13},{value:"\u5C06\u4EE3\u7801\u63A8\u9001\u5230\u670D\u52A1\u5668\u4E0A\uFF0C\u7136\u540E\u767B\u9646\u670D\u52A1\u5668\uFF0C\u8FDB\u5165\u5230\u9879\u76EE\u6839\u76EE\u5F55\uFF0C\u8FD0\u884C\u76F8\u540C\u7684\u547D\u4EE4\uFF1A",paraId:112,tocIndex:13},{value:`docker compose -f prod.docker-compose.yml up
`,paraId:113,tocIndex:13},{value:"\u5982\u679C\u53C2\u7167",paraId:114,tocIndex:13},{value:"\u300A\u5B9E\u6218\u7BC7 | React Notes | \u670D\u52A1\u5668\u90E8\u7F72\u300B",paraId:114,tocIndex:13},{value:"\u5728\u5B9D\u5854\u8BBE\u7F6E\u8FC7 Node \u9879\u76EE\uFF0C\u8BB0\u5F97\u5220\u9664 Node \u9879\u76EE\u6216\u8005\u4FEE\u6539\u5BF9\u5E94\u7684 Nginx \u914D\u7F6E\uFF0C\u5426\u5219\u53EF\u80FD\u4F1A\u56E0\u4E3A\u7AEF\u53E3\u5360\u7528\u5F71\u54CD\u5BB9\u5668\u8FD0\u884C\u3002",paraId:114,tocIndex:13},{value:"\u73B0\u5728\u6211\u4EEC\u53C8\u4E00\u6B21\u7528 Docker \u628A\u4EE3\u7801\u90E8\u7F72\u5230\u4E86\u670D\u52A1\u5668\u4E0A\uFF0C\u8FD8\u505A\u4E86\u4E0D\u5C11\u4F18\u5316\uFF0C\u4F46\u662F\u8FD9\u6837\u7684\u65B9\u6CD5\u53EA\u80FD\u8BF4\u2014\u2014\u52C9\u5F3A\u80FD\u7528\u2026\u2026",paraId:115,tocIndex:13},{value:"\u5927\u95EE\u9898\u57FA\u672C\u89E3\u51B3\uFF0C\u5C0F\u95EE\u9898\u4F9D\u7136\u5F88\u591A\uFF1A\u6BD4\u5982\u8FD8\u662F\u6CA1\u6709\u89E3\u51B3\u6570\u636E\u5E93\u6301\u4E45\u5316\u95EE\u9898\uFF0C\u4E0D\u8FC7\u8FD9\u4E2A\u6BD4\u8F83\u7B80\u5355\uFF0C\u53C2\u8003\u4E0A\u7BC7 ",paraId:116,tocIndex:13},{value:"\u300A\u5B9E\u6218\u7BC7 | React Notes | Docker \u5FEB\u901F\u5165\u95E8\u300B",paraId:116,tocIndex:13},{value:"\u5373\u53EF\u81EA\u5DF1\u521B\u5EFA\u6570\u636E\u5377\u3002\u5982\u679C\u5927\u5BB6\u5728\u5B9E\u9645\u7684\u5F00\u53D1\u4E2D\u7528\u5230 Redis\uFF0C\u6BD4\u5982\u7528 Redis \u505A\u6570\u636E\u7F13\u5B58\uFF0C\u4E5F\u53EF\u4EE5\u53C2\u8003\u300A\u5B9E\u6218\u7BC7 | React Notes | Docker \u5FEB\u901F\u5165\u95E8\u300B\u4E2D\u7684 Docker Compose \u914D\u7F6E\u3002",paraId:116,tocIndex:13},{value:"\u6BD4\u5982\u76EE\u524D\u6211\u4EEC\u867D\u7136\u6784\u5EFA\u4E86\u4E24\u4E2A\u955C\u50CF\uFF0C\u4F46\u56E0\u4E3A\u5BB9\u5668\u540D\u4E0D\u80FD\u91CD\u590D\uFF0C\u6240\u4EE5\u6211\u4EEC\u8FD0\u884C\u672C\u5730\u6216\u8005\u7EBF\u4E0A\u7684\u65F6\u5019\uFF0C\u90FD\u8981\u5220\u9664\u6389\u4E4B\u524D\u7684\u5BB9\u5668\u518D\u91CD\u65B0\u5F00\u4E00\u4E2A\u5BB9\u5668\uFF0C\u5982\u679C\u5206\u522B\u5EFA\u7ACB\u4E24\u4E2A\u5BB9\u5668\uFF0CNginx \u914D\u7F6E\u9700\u8981\u505A\u4E24\u4EFD\u6216\u8005\u6539\u4E3A\u8BFB\u53D6\u73AF\u5883\u53D8\u91CF\u7684\u65B9\u5F0F\uFF0C\u8FD9\u53C8\u8981\u505A\u4E00\u70B9\u914D\u7F6E\u5DE5\u4F5C\u3002\u6B64\u5916\u6D41\u7A0B\u4E0A\u8FD8\u53EF\u4EE5\u501F\u52A9 Jenkins \u5B9E\u73B0 CI/CD\uFF0C\u4F18\u5316\u5F00\u53D1\u6D41\u7A0B\u2026\u2026",paraId:117,tocIndex:13},{value:"\u603B\u4E4B\u4EFB\u91CD\u800C\u9053\u8FDC\u3002Docker \u4F1A\u7528\u5C31\u597D\u7528\uFF0C\u4E0D\u4F1A\u7528\u7684\u65F6\u5019\u8981\u8E29\u4E00\u5806\u5751\uFF0C\u6211\u4EEC\u6162\u6162\u8BB2\u89E3\u3002\u540E\u9762\u7684\u9879\u76EE\u6211\u4EEC\u4F1A\u7EE7\u7EED\u7528 Docker \u4F5C\u4E3A\u57FA\u672C\u7684\u5F00\u53D1\u65B9\u5F0F\u3002",paraId:118,tocIndex:13},{value:"\u672C\u7BC7\u9879\u76EE\u6E90\u7801\uFF1A",paraId:119,tocIndex:13},{value:"https://github.com/mqyqingfeng/next-react-notes-demo/tree/day12",paraId:119,tocIndex:13},{value:"https://stackoverflow.com/questions/76698529/how-to-update-the-prisma-in-a-production-docker-instance",paraId:120,tocIndex:14},{value:"https://github.com/vercel/next.js/blob/canary/examples/with-docker-compose/next-app/dev.Dockerfile",paraId:120,tocIndex:14},{value:"https://github.com/prisma/prisma/blob/main/docker/docker-compose.yml",paraId:120,tocIndex:14},{value:"https://github.com/prisma/prisma-examples/blob/latest/databases/mongodb/docker-compose.yml",paraId:120,tocIndex:14},{value:"https://github.com/nextauthjs/next-auth/issues/9922",paraId:120,tocIndex:14},{value:"https://gist.github.com/malteneuss/a7fafae22ea81e778654f72c16fe58d3",paraId:120,tocIndex:14},{value:"https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/generating-prisma-client",paraId:120,tocIndex:14}]}}]);
