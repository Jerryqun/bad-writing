"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[126],{10126:function(d,a,e){e.r(a),e.d(a,{texts:function(){return n}});const n=[{value:"\u6211\u4EEC\u5148\u4ECE ORM\uFF08Object Relational Mapping\uFF09 \u5F00\u59CB\u8BF4\u8D77\uFF0C\u4E2D\u6587\u8BD1\u4E3A\u201C",paraId:0,tocIndex:1},{value:"\u5BF9\u8C61\u5173\u7CFB\u6620\u5C04",paraId:0,tocIndex:1},{value:"\u201D\u3002\u7B80\u5355\u7684\u6765\u8BF4\uFF0C\u5C31\u662F\u7528\u64CD\u4F5C\u5BF9\u8C61\u7684\u65B9\u5F0F\u64CD\u4F5C\u6570\u636E\u5E93\u3002",paraId:0,tocIndex:1},{value:"\u6BD4\u5982\u6211\u4EEC\u7528 SQL \u67E5\u8BE2\u6570\u636E\uFF1A",paraId:1,tocIndex:1},{value:`SELECT * FROM users WHERE name = 'yayu';
`,paraId:2,tocIndex:1},{value:"\u5982\u679C\u4F7F\u7528 ORM \u5E93\uFF08ORM \u662F\u4E00\u79CD\u6280\u672F\uFF0C\u6709\u5F88\u591A\u5B9E\u73B0 ORM \u7684\u5E93\uFF0CPrisma \u662F\u5176\u4E2D\u4E00\u4E2A\uFF09\uFF0C\u67E5\u8BE2\u8BED\u53E5\u53EF\u4EE5\u6539\u4E3A\uFF1A",paraId:3,tocIndex:1},{value:`var orm = require('orm-library');
var user = orm('users').where({ name: 'yayu' });
`,paraId:4,tocIndex:1},{value:"\u8FD9\u91CC\u6211\u4EEC\u865A\u6784\u4E86\u4E00\u4E2A ",paraId:5,tocIndex:1},{value:"orm-library",paraId:5,tocIndex:1},{value:"\u5E93\uFF0C\u8BED\u8A00\u7528\u7684\u662F JavaScript\u3002\u6240\u4EE5 ORM \u7684\u597D\u5904\u5C31\u5728\u4E8E\u4F60\u53EF\u4EE5\u7528\u81EA\u5DF1\u559C\u6B22\u7684\u8BED\u8A00\u6765\u64CD\u4F5C\u6570\u636E\u5E93\uFF0C\u53EA\u8981\u6709\u5BF9\u5E94\u7684 ORM \u5E93\u652F\u6301\u3002",paraId:5,tocIndex:1},{value:"\u9664\u6B64\u4E4B\u5916\uFF0CORM \u5BF9\u6570\u636E\u5E93\u8FDB\u884C\u4E86\u62BD\u8C61\uFF0C\u4F60\u53EF\u4EE5\u4EE5\u5F88\u4F4E\u7684\u6210\u672C\u66F4\u6362\u6570\u636E\u5E93\u6BD4\u5982\u4ECE PostgreSQL \u5207\u6362\u4E3A MySQL\u3002\u901A\u5E38 ORM \u5E93\u8FD8\u4F1A\u652F\u6301\u4E00\u4E9B\u9AD8\u7EA7\u7684\u529F\u80FD\uFF0C\u65B9\u4FBF\u5F00\u53D1\u8005\u4F7F\u7528\u3002",paraId:6,tocIndex:1},{value:"\u5728 Node.js \u4E0B\uFF0C\u5E38\u7528\u7684 ORM \u5E93\u6709 ",paraId:7,tocIndex:2},{value:"Prisma",paraId:7,tocIndex:2},{value:"\u3001",paraId:7,tocIndex:2},{value:"Sequelize",paraId:7,tocIndex:2},{value:"\u3001",paraId:7,tocIndex:2},{value:"TypeORM",paraId:7,tocIndex:2},{value:"\u3001",paraId:7,tocIndex:2},{value:"Drizzle",paraId:7,tocIndex:2},{value:"\u3002",paraId:7,tocIndex:2},{value:"Mongoose",paraId:7,tocIndex:2},{value:" \u4E5F\u662F\u4E00\u79CD ORM\uFF0C\u4F46\u5B83\u662F\u57FA\u4E8E Node.js \u548C MongoDB \u7684 ORM \u5E93\uFF0C\u800C\u50CF\u524D\u9762\u63D0\u5230\u7684\u8FD9\u4E9B ORM \u5E93\u90FD\u662F\u652F\u6301\u591A\u79CD\u6570\u636E\u5E93\u7684\u3002",paraId:7,tocIndex:2},{value:"\u8BA9\u6211\u4EEC\u770B\u770B\u5B83\u4EEC\u7684 ",paraId:8,tocIndex:2},{value:"npm trends",paraId:8,tocIndex:2},{value:"\uFF1A",paraId:8,tocIndex:2},{value:"\u5176\u4E2D Sequelize \u662F\u8001\u724C\u7684 ORM \u5E93\uFF0C\u4F46\u662F\u5BF9 TypeScript \u652F\u6301\u4E0D\u4F73\uFF0C\u540E\u6765\u6709\u4E86 TypeORM\uFF0C\u5BF9 TypeScript \u652F\u6301\u66F4\u597D\uFF0C\u4F46\u662F TypeORM \u66F4\u65B0\u7EF4\u62A4\u6BD4\u8F83\u6162\uFF0C\u540E\u88AB\u5BF9 TypeScript \u652F\u6301\u66F4\u4F73\u3001\u5F00\u53D1\u4F53\u9A8C\u66F4\u597D\u7684 Prisma \u8D85\u8D8A\u3002",paraId:9,tocIndex:2},{value:"Mongoose \u4E5F\u662F\u8001\u724C\u7684 ORM \u5E93\uFF0C\u4E13\u6CE8\u4E8E MongoDB \u6570\u636E\u5E93\u3002Drizzle \u662F\u8FD9\u4E00\u4E24\u5E74\u624D\u53D1\u5E03\u7684\u5C0F\u9C9C\u8089\uFF0C\u6B63\u5728\u8301\u58EE\u6210\u957F\uFF0C\u76EE\u524D\u7248\u672C\u8FD8\u5728 0.x.x\u3002",paraId:10,tocIndex:2},{value:"\u6B64\u5916\uFF0C\u591A\u6570 ORM \u5E93\u53EA\u652F\u6301\u5173\u7CFB\u578B\u6570\u636E\u5E93\u3002\u6240\u4EE5\u5982\u679C\u4F60\u7528 MongoDB \u8FD9\u79CD\u975E\u5173\u7CFB\u578B\u6570\u636E\u5E93\uFF0C\u90A3\u5728\u8FD9\u91CC\u9762\u80FD\u9009\u7684\u4E5F\u5C31\u53EA\u6709 Prisma \u548C Mongoose \u4E86\u3002",paraId:11,tocIndex:2},{value:"\u6709\u4E00\u4E2A",paraId:12,tocIndex:2},{value:"\u5173\u4E8E ORM \u5E93\u7684\u8C03\u67E5",paraId:12,tocIndex:2},{value:"\uFF1A",paraId:12,tocIndex:2},{value:"\u6B64\u9879\u8C03\u67E5\u5305\u542B\u4E86\u591A\u4E2A\u8BED\u8A00\u7684 ORM\uFF0C\u6BD4\u5982 Django \u662F Python \u7684\uFF0CEloquent \u662F PHP \u7684\u3002\u6240\u4EE5\u5728 Node.js \u4E2D\uFF0C\u76EE\u524D\u4F7F\u7528\u5EA6\u548C\u6EE1\u610F\u5EA6\u6700\u9AD8\u7684\u5C31\u662F Prisma\u3001Drizzle\u3001Mongoose \u4E86\u3002",paraId:13,tocIndex:2},{value:"\u5728\u5B9E\u9645\u7684\u9879\u76EE\u5F00\u53D1\u4E2D\uFF0C\u7406\u8BBA\u4E0A\u5E94\u8BE5\u9009\u62E9\u4F7F\u7528\u5EA6\u66F4\u9AD8\u3001\u7248\u672C\u76F8\u5BF9\u7A33\u5B9A\u7684\u5E93\u3002\u7B80\u800C\u8A00\u4E4B\uFF0C\u521D\u5B66\u8005\u63A8\u8350\u7528 Prisma\u3002\u5982\u679C\u4F60\u7528 MongoDB\uFF0C\u53EF\u4EE5\u9009\u62E9 Mongoose\u3002",paraId:14,tocIndex:2},{value:"\u6570\u636E\u5E93\u6211\u4EEC\u7EE7\u7EED\u9009\u62E9 MySQL\uFF0C\u5E38\u7528\u7684\u6570\u636E\u5E93\u4E5F\u5C31\u662F Postgres\u3001MongoDB\u3001MySQL\u3001Redis \u4E86\uFF1A",paraId:15,tocIndex:2},{value:"MySQL \u7684\u5B89\u88C5\u6211\u4EEC\u5DF2\u7ECF\u5728\u4E0A\u7BC7",paraId:16,tocIndex:3},{value:"\u300A\u5B9E\u6218\u7BC7 | React Notes | Strapi\u300B",paraId:16,tocIndex:3},{value:"\u4E2D\u8BB2\u8FC7\uFF0C\u5C31\u4E0D\u91CD\u590D\u8D58\u8FF0\u4E86\u3002",paraId:16,tocIndex:3},{value:"MySQL GUI \u5DE5\u5177\u53EF\u4EE5\u4F7F\u7528 Navicat\uFF0C\u65B9\u4FBF\u67E5\u770B\u548C\u64CD\u4F5C\u6570\u636E\uFF1A",paraId:17,tocIndex:3},{value:"\u5F53\u7136\u5C31\u672C\u7BC7\u7684\u5185\u5BB9\u800C\u8A00\uFF0C\u4E0D\u4F7F\u7528 GUI \u5DE5\u5177\u4E5F\u6CA1\u6709\u4EFB\u4F55\u5173\u7CFB\u3002",paraId:18,tocIndex:3},{value:"\u73B0\u5728\u8BA9\u6211\u4EEC\u6B63\u5F0F\u7684\u4ECB\u7ECD\u4E0B Prisma \u5427\u3002\u6309\u7167\u5B98\u65B9\u7684\u4ECB\u7ECD\uFF0C\u5B83\u662F\u4E0B\u4E00\u4EE3\u7684 Node.js \u548C TypeScript ORM\uFF1A",paraId:19,tocIndex:4},{value:"Next-generation Node.js and TypeScript ORM",paraId:20,tocIndex:4},{value:"\u5B83\u7684\u4F18\u52BF\u5728\u4E8E\uFF1A",paraId:21,tocIndex:4},{value:"Prisma unlocks a new level of developer experience when working with databases thanks to its intuitive data model, automated migrations, type-safety & auto-completion.",paraId:22,tocIndex:4},{value:"\u7B80\u5355\u7684\u6765\u8BF4\uFF0C\u5C31\u662F\u5F00\u53D1\u4F53\u9A8C\u66F4\u597D\uFF1A\u76F4\u89C2\u7684\u6570\u636E\u6A21\u578B\u3001\u81EA\u52A8\u5316\u8FC1\u79FB\u3001\u7C7B\u578B\u5B89\u5168\u3001\u81EA\u52A8\u8865\u5168\u3002",paraId:23,tocIndex:4},{value:"\u6BD4\u5982\u4F60\u53EF\u4EE5\u5728 ",paraId:24,tocIndex:4},{value:"schema.prisma",paraId:24,tocIndex:4},{value:"\u8FD9\u4E2A\u6587\u4EF6\uFF08Prisma \u81EA\u5B9A\u4E49\u7684\u4E00\u79CD\u6587\u4EF6\u683C\u5F0F\uFF09\u4E2D\u5B9A\u4E49\u6570\u636E\u6A21\u578B\uFF0C\u5C31\u50CF\u8FD9\u6837\uFF1A",paraId:24,tocIndex:4},{value:"\u5176\u4E2D",paraId:25,tocIndex:4},{value:"model Post",paraId:25,tocIndex:4},{value:" \u6620\u5C04\u4E86\u6570\u636E\u5E93\u4E2D\u7684 Post \u8868\uFF0Cid\u3001title\u3001content\u3001published \u6620\u5C04\u4E86\u8868\u4E2D\u7684\u5B57\u6BB5\uFF0C\u5B57\u6BB5\u540E\u9762\u7684 Int\u3001String \u7B49\u8868\u793A\u5B57\u6BB5\u7C7B\u578B\uFF0C\u518D\u540E\u9762\u7684 @id\u3001@default\uFF0C\u8FD9\u4E9B\u662F\u5C5E\u6027\uFF0C\u6211\u4EEC\u7A0D\u540E\u518D\u8BB2\u3002",paraId:25,tocIndex:4},{value:"\u5F53\u4F60\u9700\u8981\u64CD\u4F5C\u6570\u636E\u5E93\u65F6\uFF0CPrisma \u63D0\u4F9B\u4E86 Prisma Client\uFF1A",paraId:26,tocIndex:4},{value:"Prisma \u540C\u65F6\u63D0\u4F9B\u4E86 Prisma Migrate\uFF0C\u8FD9\u662F Prisma \u7684\u8FC1\u79FB\u7CFB\u7EDF\u3002\u6BD4\u5982\u5F53\u4F60\u5728 ",paraId:27,tocIndex:4},{value:"schema.prisma",paraId:27,tocIndex:4},{value:"\u66F4\u6539\u4E86\u6570\u636E\u6A21\u578B\uFF0C\u547D\u4EE4\u884C\u8FD0\u884C ",paraId:27,tocIndex:4},{value:"npx prisma migrate dev",paraId:27,tocIndex:4},{value:"\uFF0Cprisma \u5C31\u4F1A\u6839\u636E\u4F60\u5B9A\u4E49\u7684\u6570\u636E\u6A21\u578B\uFF0C\u4FEE\u6539\u6570\u636E\u5E93\u3002",paraId:27,tocIndex:4},{value:"Prisma \u8FD8\u63D0\u4F9B\u4E86 Prisma Studio\uFF0C\u8FD9\u662F Prisma \u63D0\u4F9B\u7684\u67E5\u770B\u548C\u7F16\u8F91\u6570\u636E\u5E93\u6570\u636E\u7684 GUI \u5DE5\u5177\u3002\u4E0D\u540C\u4E8E Navicat \u8FD9\u6837\u7684\u8F6F\u4EF6\uFF0CPrisma Studio \u7684\u5F00\u542F\u65B9\u5F0F\u662F\u5728\u547D\u4EE4\u884C\u8FD0\u884C ",paraId:28,tocIndex:4},{value:"npx prisma studio",paraId:28,tocIndex:4},{value:"\uFF0C\u5B83\u4F1A\u6253\u5F00\u4E00\u4E2A\u7F51\u9875\uFF0C\u5C55\u793A\u6570\u636E\u5E93\u4E2D\u7684\u6570\u636E\uFF1A",paraId:28,tocIndex:4},{value:"Prisma \u76EE\u524D\u652F\u6301\u7684\u8BED\u8A00\u548C\u6570\u636E\u5E93\u6709\uFF1A",paraId:29,tocIndex:4},{value:"\u597D\u4E86\uFF0CPrisma \u7684\u5927\u81F4\u4ECB\u7ECD\u5C31\u8FD9\u4E9B\u3002",paraId:30,tocIndex:4},{value:"Prisma Client",paraId:30,tocIndex:4},{value:"\u3001",paraId:30,tocIndex:4},{value:"Prisma Migrate",paraId:30,tocIndex:4},{value:"\u3001",paraId:30,tocIndex:4},{value:"Prisma Studio",paraId:30,tocIndex:4},{value:" \u5C31\u662F Prisma \u7684\u4E3B\u8981\u7EC4\u6210\u90E8\u5206\u4E86\u3002\u63A5\u4E0B\u6765\u8BA9\u6211\u4EEC\u5728\u5B9E\u6218\u4E2D\u5177\u4F53\u4F53\u4F1A\u5427\uFF01",paraId:30,tocIndex:4},{value:"\u9879\u76EE\u6839\u76EE\u5F55\u5B89\u88C5 ",paraId:31,tocIndex:6},{value:"prisma",paraId:31,tocIndex:6},{value:"\u4F5C\u4E3A\u5F00\u53D1\u4F9D\u8D56\uFF1A",paraId:31,tocIndex:6},{value:`npm install prisma --save-dev
`,paraId:32,tocIndex:6},{value:"\u5B89\u88C5\u540E\u8FD0\u884C\uFF1A",paraId:33,tocIndex:6},{value:`npx prisma init
`,paraId:34,tocIndex:6},{value:"\u8FD9\u4E00\u6B65\u4F1A\uFF1A",paraId:35,tocIndex:6},{value:"\u521B\u5EFA\u4E00\u4E2A ",paraId:36,tocIndex:6},{value:"prisma",paraId:36,tocIndex:6},{value:"\u6587\u4EF6\u5939\uFF0C\u5176\u4E2D\u5305\u542B\u4E00\u4E2A ",paraId:36,tocIndex:6},{value:"schema.prisma",paraId:36,tocIndex:6},{value:"\u6587\u4EF6\uFF0C\u8FD9\u5C31\u662F\u5B9A\u4E49\u6570\u636E\u6A21\u578B\u7684\u5730\u65B9",paraId:36,tocIndex:6},{value:"\u521B\u5EFA\u4E00\u4E2A",paraId:36,tocIndex:6},{value:".env",paraId:36,tocIndex:6},{value:"\u6587\u4EF6\uFF0C\u7528\u4E8E\u5B9A\u4E49\u73AF\u5883\u53D8\u91CF\uFF08\u5982\u6570\u636E\u5E93\u5730\u5740\uFF09",paraId:36,tocIndex:6},{value:"\u4FEE\u6539 ",paraId:37,tocIndex:7},{value:"prisma/schema.prisma",paraId:37,tocIndex:7},{value:"\uFF1A",paraId:37,tocIndex:7},{value:`generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
`,paraId:38,tocIndex:7},{value:"\u4FEE\u6539 ",paraId:39,tocIndex:7},{value:".env",paraId:39,tocIndex:7},{value:" \u4E2D\u7684 ",paraId:39,tocIndex:7},{value:"DATABASE_URL",paraId:39,tocIndex:7},{value:"\uFF0C\u6B64 URL \u89C4\u5219\u5982\u4E0B\uFF1A",paraId:39,tocIndex:7},{value:"\u6309\u7167\u6B64\u89C4\u5219\uFF0C\u6211\u4EEC\u7684\u5730\u5740\u5E94\u8BE5\u4FEE\u6539\u4E3A\uFF1A",paraId:40,tocIndex:7},{value:`DATABASE_URL="mysql://root:admin@localhost:3306/notes"
`,paraId:41,tocIndex:7},{value:"\u5176\u4E2D ",paraId:42,tocIndex:7},{value:"notes",paraId:42,tocIndex:7},{value:" \u4E3A\u6211\u4EEC\u7684\u6570\u636E\u5E93\u540D\u79F0\u3002\u76EE\u524D\u8FD9\u4E2A\u6570\u636E\u5E93\u6211\u4EEC\u5728 MySQL \u4E2D\u8FD8\u6CA1\u6709\u5EFA\u7ACB\uFF0C\u6240\u4EE5\u6211\u4EEC\u6765\u5EFA\u4E00\u4E2A\u3002",paraId:42,tocIndex:7},{value:"\u4E00\u79CD\u65B9\u6CD5\u662F\u4F7F\u7528 MySQL GUI \u5DE5\u5177\uFF0C\u53F3\u952E\u76F4\u63A5\u5EFA\u7ACB\u4E00\u4E2A\u540D\u4E3A ",paraId:43,tocIndex:7},{value:"notes",paraId:43,tocIndex:7},{value:" \u7684\u6570\u636E\u5E93\u3002",paraId:43,tocIndex:7},{value:"\u4E00\u79CD\u65B9\u6CD5\u662F\u4F7F\u7528\u547D\u4EE4\u884C\uFF1A",paraId:44,tocIndex:7},{value:`# \u8BBF\u95EE\u6570\u636E\u5E93
mysql -u root -p
# \u521B\u5EFA\u6570\u636E\u5E93
CREATE DATABASE notes;
`,paraId:45,tocIndex:7},{value:"\u6267\u884C ",paraId:46,tocIndex:7},{value:"npx prisma db pull",paraId:46,tocIndex:7},{value:"\uFF0C\u5982\u679C\u51FA\u73B0\u4EE5\u4E0B\u63D0\u793A\u5373\u8868\u793A\u8FDE\u63A5\u6210\u529F\uFF1A",paraId:46,tocIndex:7},{value:"\u6CE8\uFF1A\u867D\u7136\u662F\u62A5\u9519\u4FE1\u606F\uFF0C\u663E\u793A\u6570\u636E\u5E93\u4E3A\u7A7A\uFF0C\u4F46\u8BF4\u660E\u81F3\u5C11\u8FDE\u63A5\u4E0A\u4E86\u6570\u636E\u5E93\u3002\u5982\u679C\u6570\u636E\u5E93\u4E0D\u5B58\u5728\uFF0C\u5C31\u662F\u53E6\u5916\u4E00\u4E2A\u62A5\u9519\u4E86\uFF1A",paraId:47,tocIndex:7},{value:"\u73B0\u5728\u6211\u4EEC\u6765\u5B9A\u4E49\u6570\u636E\u6A21\u578B\uFF0C\u6570\u636E\u6A21\u578B\u9700\u8981\u4E0E\u6570\u636E\u5E93\u4FDD\u6301\u4E00\u81F4\u3002\u6211\u4EEC\u6709\u4E24\u79CD\u65B9\u5F0F\u4F7F\u5176\u4FDD\u6301\u4E00\u81F4\uFF1A",paraId:48,tocIndex:8},{value:"\u624B\u52A8\u4FEE\u6539\u6570\u636E\u6A21\u578B\uFF0C\u7136\u540E\u8FD0\u884C ",paraId:49,tocIndex:8},{value:"npx prisma migrate dev",paraId:49,tocIndex:8},{value:"\u4FEE\u6539\u6570\u636E\u5E93\uFF0C\u4F7F\u5176\u4FDD\u6301\u4E00\u81F4",paraId:49,tocIndex:8},{value:"\u624B\u52A8\u4FEE\u6539\u6570\u636E\u5E93\uFF0C\u7136\u540E\u8FD0\u884C ",paraId:49,tocIndex:8},{value:"npx prisma db pull",paraId:49,tocIndex:8},{value:"\u4FEE\u6539\u6570\u636E\u6A21\u578B\uFF0C\u4F7F\u5176\u4FDD\u6301\u4E00\u81F4",paraId:49,tocIndex:8},{value:"\u73B0\u5728\u6211\u4EEC\u4FEE\u6539\u4E0B ",paraId:50,tocIndex:8},{value:"prisma/schema.prisma",paraId:50,tocIndex:8},{value:"\uFF1A",paraId:50,tocIndex:8},{value:`generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model User {
  id       String @id @default(uuid())
  username String
  password String
  notes    Note[]
}

model Note {
  id        String   @id @default(cuid())
  title     String   @db.VarChar(255)
  content   String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  author    User     @relation(fields: [authorId], references: [id])
  authorId  String
}

`,paraId:51,tocIndex:8},{value:"\u8FD0\u884C ",paraId:52,tocIndex:8},{value:"npx prisma migrate dev",paraId:52,tocIndex:8},{value:"\uFF0C\u7136\u540E\u7ED9\u8FD9\u6B21 migrate \u8D77\u4E00\u4E2A\u540D\u5B57\uFF08\u8FD9\u4E2A\u540D\u5B57\u65E0\u6240\u8C13\uFF0C\u4E00\u4E2A\u6807\u8BC6\u800C\u5DF2\uFF09\uFF1A",paraId:52,tocIndex:8},{value:"\u518D\u6B21\u67E5\u770B\u6570\u636E\u5E93\uFF0CUser \u8868\u3001Note \u8868\u548C\u5176\u4E2D\u7684\u5B57\u6BB5\u90FD\u5DF2\u5EFA\u7ACB\uFF1A",paraId:53,tocIndex:8},{value:"\u8FD9\u4E2A Prisma schema \u540C\u6B65\u6570\u636E\u5E93\u7684\u8FC7\u7A0B\uFF0C\u5C31\u88AB\u79F0\u4E4B\u4E3A ",paraId:54,tocIndex:8},{value:"migration",paraId:54,tocIndex:8},{value:"\u3002\u6BCF\u6B21\u8FC1\u79FB\uFF0C\u90FD\u4F1A\u751F\u6210\u4E00\u4E2A\u8FC1\u79FB\u6587\u4EF6\uFF0C\u5B58\u653E\u5728 ",paraId:54,tocIndex:8},{value:"prisma/migrations",paraId:54,tocIndex:8},{value:"\u4E0B\u3002",paraId:54,tocIndex:8},{value:"\u73B0\u5728\u6211\u4EEC\u76F4\u63A5\u4FEE\u6539\u6570\u636E\u5E93\uFF0C\u6BD4\u5982\u5728 Note \u8868\u6DFB\u52A0\u4E00\u4E2A ",paraId:55,tocIndex:8},{value:"content",paraId:55,tocIndex:8},{value:" \u5B57\u6BB5\uFF1A",paraId:55,tocIndex:8},{value:"\u7136\u540E\u8FD0\u884C ",paraId:56,tocIndex:8},{value:"npx prisma db pull",paraId:56,tocIndex:8},{value:"\uFF0CPrisma \u4F1A\u81EA\u52A8\u5728 ",paraId:56,tocIndex:8},{value:"prisma/schema.prisma",paraId:56,tocIndex:8},{value:" \u4E2D\u540C\u6B65\u8BE5\u5B57\u6BB5\uFF1A",paraId:56,tocIndex:8},{value:`model Note {
	// ...
  content   String?  @db.VarChar(255)
	// ...
}
`,paraId:57,tocIndex:8},{value:"\u8FD9\u4E2A\u4ECE\u6570\u636E\u5E93\u63A8\u5BFC\u51FA Prisma schema \u7684\u8FC7\u7A0B\u5C31\u53EB\u505A ",paraId:58,tocIndex:8},{value:"Introspection",paraId:58,tocIndex:8},{value:"\uFF0C\u4E2D\u6587\u8BD1\u4E3A\u201C\u5185\u7701\u201D\uFF0C\u6307\u901A\u8FC7\u68C0\u67E5\u6570\u636E\u5E93\u7684\u7ED3\u6784\u548C\u5143\u6570\u636E\u6765\u4E86\u89E3\u6570\u636E\u5E93\u672C\u8EAB\u7684\u7279\u6027\u548C\u4FE1\u606F\u3002",paraId:58,tocIndex:8},{value:"Introspection is the process of getting the metadata of the database, such as object names, types of columns, and source code",paraId:59,tocIndex:8},{value:"\u4E0D\u8FC7\u6CE8\u610F\u4F7F\u7528 ",paraId:60,tocIndex:8},{value:"npx prisma db pull",paraId:60,tocIndex:8},{value:"\u7684\u65F6\u5019\uFF0C\u8FD8\u8981\u518D\u642D\u914D\u4F7F\u7528 ",paraId:60,tocIndex:8},{value:"prisma generate",paraId:60,tocIndex:8},{value:"\u66F4\u65B0 Prisma Client \u540E\uFF0C\u4F60\u624D\u80FD\u6B63\u786E\u7684\u901A\u8FC7 Prisma Client \u64CD\u4F5C\u6570\u636E\u5E93\uFF1A",paraId:60,tocIndex:8},{value:"\u591A\u8BF4\u4E00\u53E5\uFF1Aschema.prisma \u56E0\u4E3A\u662F Prisma \u81EA\u5B9A\u4E49\u7684\u6587\u4EF6\u683C\u5F0F\uFF0C\u6240\u4EE5\u6587\u4EF6\u9ED8\u8BA4\u65E0\u8BED\u6CD5\u9AD8\u4EAE\uFF0C\u4F7F\u7528 VSCode \u7684\u540C\u5B66\u53EF\u4EE5\u4E0B\u8F7D Prisma \u8FD9\u4E2A\u63D2\u4EF6\u4EE5\u652F\u6301\u8BE5\u6587\u4EF6\u8BED\u6CD5\u9AD8\u4EAE\uFF1A",paraId:61,tocIndex:9},{value:"\u5B89\u88C5\u8BE5\u63D2\u4EF6\u540E\uFF0C\u8FD8\u53EF\u4EE5\u6253\u5F00 ",paraId:62,tocIndex:9},{value:"settings.json",paraId:62,tocIndex:9},{value:"\uFF0C\u6DFB\u52A0 prisma \u6587\u4EF6\u7684\u81EA\u52A8\u683C\u5F0F\u5316\uFF1A",paraId:62,tocIndex:9},{value:"\u6548\u679C\u5982\u4E0B\uFF1A",paraId:63,tocIndex:9},{value:"\u5F53\u7136\u5982\u679C\u4F60\u4E0D\u8BBE\u7F6E\uFF0C\u4E5F\u53EF\u4EE5\u5728\u6839\u76EE\u5F55\u8FD0\u884C ",paraId:64,tocIndex:9},{value:"npx prisma format",paraId:64,tocIndex:9},{value:"\u683C\u5F0F\u5316\u8BE5\u6587\u4EF6\u3002",paraId:64,tocIndex:9},{value:"\u5B89\u88C5 ",paraId:65,tocIndex:10},{value:"@prisma/client",paraId:65,tocIndex:10},{value:"\uFF1A",paraId:65,tocIndex:10},{value:`npm install @prisma/client
`,paraId:66,tocIndex:10},{value:"\u73B0\u5728\u8BA9\u6211\u4EEC\u56DE\u5230\u6211\u4EEC\u7684\u9879\u76EE\u9700\u6C42\u4E0A\uFF0C\u56E0\u4E3A\u76EE\u524D\u5E76\u6CA1\u6709\u505A\u6743\u9650\u63A7\u5236\uFF0C\u6240\u4EE5\u521B\u5EFA\u7684\u7B14\u8BB0\u8C01\u90FD\u53EF\u4EE5\u67E5\u770B\u3001\u521B\u5EFA\u6216\u7F16\u8F91\u3002\u5982\u679C\u6211\u4EEC\u5E0C\u671B\u7528\u6237\u767B\u5F55\u540E\u624D\u80FD\u67E5\u770B\u3001\u65B0\u589E\u3001\u7F16\u8F91\u81EA\u5DF1\u7684\u7B14\u8BB0\u5462\uFF1F\u6548\u679C\u56FE\u5982\u4E0B\uFF1A",paraId:67,tocIndex:10},{value:"\u8BA9\u6211\u4EEC\u5F00\u59CB\u5B9E\u73B0\u5427\uFF01",paraId:68,tocIndex:10},{value:"schema.prisma",paraId:69,tocIndex:10},{value:"\u7684\u4EE3\u7801\u4E3A\uFF1A",paraId:69,tocIndex:10},{value:`generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model User {
  id       String @id @default(uuid())
  username String
  password String
  notes    Note[]
}

model Note {
  id        String   @id @default(cuid())
  title     String   @db.VarChar(255)
  content   String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  author    User     @relation(fields: [authorId], references: [id])
  authorId  String
}

`,paraId:70,tocIndex:10},{value:"\u6CE8\u610F\uFF1A\u5982\u679C\u4FEE\u6539\u4E86 schema\uFF0C\u8FD0\u884C ",paraId:71,tocIndex:10},{value:"npx prisma migrate dev",paraId:71,tocIndex:10},{value:"\uFF0C\u5C06\u4FEE\u6539\u540C\u6B65\u6570\u636E\u5E93\uFF0Cmigrate \u4F1A\u81EA\u52A8\u66F4\u65B0 Prisma Client\uFF0C\u6240\u4EE5\u65E0\u987B\u518D\u8FD0\u884C ",paraId:71,tocIndex:10},{value:"prisma generate",paraId:71,tocIndex:10},{value:"\u3002",paraId:71,tocIndex:10},{value:"\u56E0\u4E3A\u8981\u5B9E\u73B0\u9274\u6743\uFF0C\u6240\u4EE5\u8981\u7ED3\u5408 ",paraId:72,tocIndex:10},{value:"next-auth",paraId:72,tocIndex:10},{value:"\uFF0C\u4FEE\u6539 ",paraId:72,tocIndex:10},{value:"auth.js",paraId:72,tocIndex:10},{value:"\uFF1A",paraId:72,tocIndex:10},{value:`import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
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
    GitHub,
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
      session.user.userId = token.userId;
      return session;
    },
  },
});
`,paraId:73,tocIndex:10},{value:"\u65B0\u5EFA ",paraId:74,tocIndex:10},{value:"middleware.js",paraId:74,tocIndex:10},{value:"\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:74,tocIndex:10},{value:`export { auth as middleware } from 'auth';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
`,paraId:75,tocIndex:10},{value:"\u4F7F\u7528 ",paraId:76,tocIndex:10},{value:"middleware.js",paraId:76,tocIndex:10},{value:" \u662F\u4E3A\u4E86\u5B9E\u73B0\u65B0\u5EFA\u548C\u7F16\u8F91\u65F6\u8DF3\u8F6C\u5230\u767B\u5F55\u9875\u9762\u3002",paraId:76,tocIndex:10},{value:"\u65B0\u5EFA ",paraId:77,tocIndex:10},{value:"lib/prisma.js",paraId:77,tocIndex:10},{value:"\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:77,tocIndex:10},{value:`import { PrismaClient } from '@prisma/client';
import { auth } from 'auth';

const globalForPrisma = global;

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function getAllNotes() {
  const session = await auth();
  if (session == null) return [];
  // \u67E5\u627E\u767B\u5F55\u7528\u6237\u7684\u7B14\u8BB0
  const notes = await prisma.note.findMany({
    where: {
      authorId: session?.user?.userId,
    },
  });
  // \u6784\u9020\u8FD4\u56DE\u6570\u636E
  const res = {};
  notes.forEach(({ title, content, id, updatedAt }) => {
    res[id] = JSON.stringify({
      title,
      content,
      updateTime: updatedAt,
    });
  });
  return res;
}

export async function addNote(data) {
  const session = await auth();
  const result = await prisma.note.create({
    data: {
      title: JSON.parse(data).title,
      content: JSON.parse(data).content,
      author: { connect: { id: session?.user?.userId } },
    },
  });

  return result.id;
}

export async function updateNote(uuid, data) {
  const parsedData = JSON.parse(data);
  await prisma.note.update({
    where: {
      id: uuid,
    },
    data: {
      title: parsedData.title,
      content: parsedData.content,
    },
  });
}

export async function getNote(uuid) {
  const session = await auth();
  if (session == null) return;
  const { title, content, updateTime, id } = await prisma.note.findFirst({
    where: {
      id: uuid,
    },
  });

  return {
    title,
    content,
    updateTime,
    id,
  };
}

export async function delNote(uuid) {
  await prisma.note.delete({
    where: {
      id: uuid,
    },
  });
}

export async function addUser(username, password) {
  const user = await prisma.user.create({
    data: {
      username,
      password,
      notes: {
        create: [],
      },
    },
  });

  return {
    name: username,
    username,
    userId: user.id,
  };
}

export async function getUser(username, password) {
  const user = await prisma.user.findFirst({
    where: {
      username,
    },
    include: {
      notes: true,
    },
  });
  if (!user) return 0;
  if (user.password !== password) return 1;
  return {
    name: username,
    username,
    userId: user.id,
  };
}

export default prisma;
`,paraId:78,tocIndex:10},{value:"\u5728\u8FD9\u6BB5\u4EE3\u7801\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528\u4E86 ",paraId:79,tocIndex:10},{value:"const prisma = globalForPrisma.prisma || new PrismaClient()",paraId:79,tocIndex:10},{value:"\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u8FD9\u662F\u4E3A\u4E86\u907F\u514D\u5F00\u53D1\u73AF\u5883\u4E0B\u5EFA\u7ACB\u591A\u4E2A Prisma Client \u5B9E\u4F8B\u5BFC\u81F4\u95EE\u9898\uFF0C\u8BE6\u7EC6\u53C2\u8003",paraId:79,tocIndex:10},{value:"\u6B64\u7BC7\u8BF4\u660E",paraId:79,tocIndex:10},{value:"\u3002",paraId:79,tocIndex:10},{value:"\u5728\u8FD9\u6BB5\u4EE3\u7801\u4E2D\uFF0C\u6211\u4EEC\u6F14\u793A\u4E86\u5982\u4F55\u589E\u5220\u6539\u67E5\u6570\u636E\u5E93\u3002\u6CE8\u610F\u6211\u4EEC\u83B7\u53D6 Note \u8868\u7684\u65F6\u5019\uFF0C\u8981\u4F7F\u7528\u5C0F\u5199\u7684 ",paraId:80,tocIndex:10},{value:"prisma.note",paraId:80,tocIndex:10},{value:" \u83B7\u53D6\u3002Prisma Client \u5177\u4F53 API \u7684\u7528\u6CD5\u53EF\u4EE5\u53C2\u8003 ",paraId:80,tocIndex:10},{value:"Prisma Client API reference",paraId:80,tocIndex:10},{value:"\uFF0C\u5F53\u7136\u4E0B\u8282\u6211\u4F1A\u5E26\u5927\u5BB6\u8FC7\u4E00\u904D API\u3002",paraId:80,tocIndex:10},{value:"\u7136\u540E\u6211\u4EEC\u5C06\u4E0A\u7BC7\u7684 ",paraId:81,tocIndex:10},{value:"@/lib/strapi",paraId:81,tocIndex:10},{value:"\u6216\u8005\u4E4B\u524D\u7684 ",paraId:81,tocIndex:10},{value:"@/lib/redis",paraId:81,tocIndex:10},{value:" \u7EDF\u4E00\u66FF\u6362\u4E3A ",paraId:81,tocIndex:10},{value:"@/lib/prisma",paraId:81,tocIndex:10},{value:"\u3002\u6B64\u65F6\u6548\u679C\u5DF2\u7ECF\u5B9E\u73B0\uFF1A",paraId:81,tocIndex:10},{value:"\u5728\u6839\u76EE\u5F55\u8FD0\u884C ",paraId:82,tocIndex:11},{value:"npx prisma studio",paraId:82,tocIndex:11},{value:"\uFF0C\u5B83\u4F1A\u6253\u5F00\u4E00\u4E2A\u7F51\u9875\uFF1A",paraId:82,tocIndex:11},{value:"\u4F60\u53EF\u4EE5\u5728\u8FD9\u4E2A\u9875\u9762\u67E5\u770B\u548C\u7F16\u8F91\u6570\u636E\u5E93\u4E2D\u7684\u6570\u636E\u3002",paraId:83,tocIndex:11},{value:"Prisma \u7684\u57FA\u672C\u4F7F\u7528\u5C31\u8FD9\u4E9B\u5185\u5BB9\uFF0CPrisma \u7684\u5B98\u65B9\u6587\u6863\u5199\u5F97\u5F88\u597D\uFF0C\u518D\u6DF1\u5165\u7684\u90E8\u5206\u5176\u5B9E\u770B\u6587\u6863\u5373\u53EF\uFF0C\u6240\u4EE5\u6211\u4EEC\u8FD9\u91CC\u8BB2\u8BB2\u4F5C\u4E3A\u521D\u5B66\u8005\uFF0C\u63A5\u4E0B\u6765\u8981\u5B66\u4E60\u7684\u4E00\u4E9B\u5185\u5BB9\u3002",paraId:84,tocIndex:12},{value:"\u9996\u5148\u662F\u6570\u636E\u6A21\u578B\u7684\u4E66\u5199\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\uFF1A",paraId:85,tocIndex:13},{value:`model Post {
  id  Int @id @default(autoincrement())
}
`,paraId:86,tocIndex:13},{value:"\u6A21\u578B\u7684\u6BCF\u4E2A\u5B57\u6BB5\uFF0C\u5305\u542B\uFF1A",paraId:87,tocIndex:13},{value:"\u5B57\u6BB5\u540D\u79F0",paraId:88,tocIndex:13},{value:"\u5B57\u6BB5\u7C7B\u578B",paraId:88,tocIndex:13},{value:"\uFF08\u53EF\u9009\uFF09",paraId:88,tocIndex:13},{value:"\u7C7B\u578B\u4FEE\u9970\u7B26",paraId:88,tocIndex:13},{value:"\uFF08type modifiers\uFF09",paraId:88,tocIndex:13},{value:"\uFF08\u53EF\u9009\uFF09",paraId:88,tocIndex:13},{value:"\u5C5E\u6027",paraId:88,tocIndex:13},{value:"\uFF08attributes\uFF09",paraId:88,tocIndex:13},{value:"\u5176\u4E2D\uFF0C\u5B57\u6BB5\u7C7B\u578B\u6709 ",paraId:89,tocIndex:14},{value:"String",paraId:89,tocIndex:14},{value:"\u3001",paraId:89,tocIndex:14},{value:"Boolean",paraId:89,tocIndex:14},{value:"\u3001",paraId:89,tocIndex:14},{value:"Int",paraId:89,tocIndex:14},{value:"\u3001",paraId:89,tocIndex:14},{value:"BigInt",paraId:89,tocIndex:14},{value:"\u3001",paraId:89,tocIndex:14},{value:"Float",paraId:89,tocIndex:14},{value:"\u3001",paraId:89,tocIndex:14},{value:"Decimal",paraId:89,tocIndex:14},{value:"\uFF08\u5B58\u50A8\u7CBE\u786E\u5C0F\u6570\u503C\uFF09\u3001",paraId:89,tocIndex:14},{value:"DateTime",paraId:89,tocIndex:14},{value:"\u3001",paraId:89,tocIndex:14},{value:"Json",paraId:89,tocIndex:14},{value:"\u3001",paraId:89,tocIndex:14},{value:"Bytes",paraId:89,tocIndex:14},{value:"\uFF08\u5B58\u50A8\u6587\u4EF6\uFF09\u3001",paraId:89,tocIndex:14},{value:"Unsupported",paraId:89,tocIndex:14},{value:"\u3002\u5B57\u6BB5\u7C7B\u578B\u8FD8\u53EF\u4EE5\u662F\u6570\u636E\u5E93\u5E95\u5C42\u6570\u636E\u7C7B\u578B\uFF0C\u901A\u8FC7 ",paraId:89,tocIndex:14},{value:"@db.",paraId:89,tocIndex:14},{value:" \u63CF\u8FF0\uFF0C\u6BD4\u5982 ",paraId:89,tocIndex:14},{value:"@db.VarChar(255)",paraId:89,tocIndex:14},{value:", varchar \u6B63\u662F MySQL \u652F\u6301\u7684\u5E95\u5C42\u6570\u636E\u7C7B\u578B\u3002",paraId:89,tocIndex:14},{value:"\u7C7B\u578B\u4FEE\u9970\u7B26\u6709\u4E24\u4E2A\uFF1A",paraId:90,tocIndex:15},{value:"[]",paraId:91,tocIndex:15},{value:" \u8868\u793A\u5B57\u6BB5\u662F\u6570\u7EC4",paraId:91,tocIndex:15},{value:"?",paraId:91,tocIndex:15},{value:" \u8868\u793A\u5B57\u6BB5\u53EF\u9009",paraId:91,tocIndex:15},{value:`model User {
  name String?
  favoriteColors String[]
}
`,paraId:92,tocIndex:15},{value:"\u76EE\u524D Prisma \u4E0D\u652F\u6301\u53EF\u9009\u6570\u7EC4\uFF0C\u4E5F\u5C31\u662F\u8FD9\u4E24\u4E2A\u7C7B\u578B\u4FEE\u9970\u7B26\u4E0D\u80FD\u540C\u65F6\u7528\u3002\u5982\u679C\u4F60\u6709\u9700\u8981\uFF0C\u90A3\u5C31\u521B\u5EFA\u6570\u636E\u7684\u65F6\u5019\u521B\u5EFA\u4E00\u4E2A\u7A7A\u6570\u7EC4\u3002",paraId:93,tocIndex:15},{value:"\u518D\u540E\u9762\u7684 ",paraId:94,tocIndex:16},{value:"@id @default(autoincrement())",paraId:94,tocIndex:16},{value:" \u8FD9\u4E9B\u5C31\u90FD\u662F\u5C5E\u6027\u4E86\u3002\u5C5E\u6027\u7684\u4F5C\u7528\u662F\u4FEE\u6539\u5B57\u6BB5\u6216\u5757\uFF08model\uFF09\u7684\u884C\u4E3A\uFF0C\u5F71\u54CD\u5B57\u6BB5\u7684\u5C5E\u6027\u7528 ",paraId:94,tocIndex:16},{value:"@",paraId:94,tocIndex:16},{value:" \u4F5C\u4E3A\u524D\u7F00\uFF0C\u5F71\u54CD\u5757\u7684\u5C5E\u6027\u7528 ",paraId:94,tocIndex:16},{value:"@@",paraId:94,tocIndex:16},{value:"\u4F5C\u4E3A\u524D\u7F00\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\uFF1A",paraId:94,tocIndex:16},{value:`model User {
  id        Int    @id @default(autoincrement())
  firstName String @map("first_name")
  @@map("users")
}
`,paraId:95,tocIndex:16},{value:"\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C",paraId:96,tocIndex:16},{value:"map",paraId:96,tocIndex:16},{value:"\u7684\u4F5C\u7528\u662F\u6620\u5C04\uFF1A",paraId:96,tocIndex:16},{value:'@map("first_name")',paraId:97,tocIndex:16},{value:" \u8868\u793A",paraId:97,tocIndex:16},{value:"firstName",paraId:97,tocIndex:16},{value:" \u5B57\u6BB5\u6620\u5C04\u6570\u636E\u5E93\u4E2D\u7684 ",paraId:97,tocIndex:16},{value:"first_name",paraId:97,tocIndex:16},{value:" \u5B57\u6BB5",paraId:97,tocIndex:16},{value:'@@map("users")',paraId:97,tocIndex:16},{value:"\u8868\u793A ",paraId:97,tocIndex:16},{value:"User",paraId:97,tocIndex:16},{value:" \u6620\u5C04\u6570\u636E\u5E93\u7684\u4E2D\u7684 ",paraId:97,tocIndex:16},{value:"users",paraId:97,tocIndex:16},{value:" \u8868",paraId:97,tocIndex:16},{value:"\u5177\u4F53\u5F71\u54CD\u5B57\u6BB5\u7684\u5C5E\u6027\u6709\uFF1A",paraId:98,tocIndex:16},{value:"@id",paraId:99,tocIndex:16},{value:"\uFF08\u8BBE\u7F6E\u4E3B\u952E ",paraId:99,tocIndex:16},{value:"PRIMARY KEY",paraId:99,tocIndex:16},{value:"\uFF09",paraId:99,tocIndex:16},{value:"@default",paraId:99,tocIndex:16},{value:"\uFF08\u8BBE\u7F6E\u5B57\u6BB5\u9ED8\u8BA4\u503C\uFF09",paraId:99,tocIndex:16},{value:"@unique",paraId:99,tocIndex:16},{value:"\uFF08\u552F\u4E00\u7EA6\u675F\uFF0C\u8868\u793A\u8BE5\u5B57\u6BB5\u503C\u552F\u4E00\uFF0C\u8BBE\u7F6E\u540E\u53EF\u4EE5\u7528 ",paraId:99,tocIndex:16},{value:"findUnique",paraId:99,tocIndex:16},{value:" \u6765\u67E5\u627E\uFF09",paraId:99,tocIndex:16},{value:"@relation",paraId:99,tocIndex:16},{value:"\uFF08\u8BBE\u7F6E\u5916\u952E ",paraId:99,tocIndex:16},{value:"FOREIGN KEY",paraId:99,tocIndex:16},{value:"/ ",paraId:99,tocIndex:16},{value:"REFERENCES",paraId:99,tocIndex:16},{value:"\uFF0C\u7528\u4E8E\u5EFA\u7ACB\u8868\u4E0E\u8868\u4E4B\u95F4\u7684\u5173\u8054\uFF0C\u5F88\u91CD\u8981\u7684\u6982\u5FF5\uFF0C\u4E0B\u8282\u4F1A\u5177\u4F53\u8BB2\uFF09",paraId:99,tocIndex:16},{value:"@map",paraId:99,tocIndex:16},{value:"\uFF08\u6620\u5C04\u6570\u636E\u5E93\u4E2D\u7684\u5B57\u6BB5\uFF09",paraId:99,tocIndex:16},{value:"@updatedAt",paraId:99,tocIndex:16},{value:"\uFF08\u81EA\u52A8\u5B58\u50A8\u8BB0\u5F55\u66F4\u65B0\u7684\u65F6\u95F4\uFF09",paraId:99,tocIndex:16},{value:"@ignore",paraId:99,tocIndex:16},{value:"\uFF08\u8BE5\u5B57\u6BB5\u4F1A\u88AB\u5FFD\u7565\uFF0C\u4E0D\u4F1A\u751F\u6210\u5230 Prisma Client \u4E2D\uFF09",paraId:99,tocIndex:16},{value:"\u5F71\u54CD\u5757\u7684\u5C5E\u6027\u6709\uFF1A",paraId:100,tocIndex:16},{value:"@@id",paraId:101,tocIndex:16},{value:"\uFF1A\u76F8\u5F53\u4E8E\u5173\u7CFB\u578B\u6570\u636E\u5E93\u4E2D\u590D\u5408\u4E3B\u952E",paraId:101,tocIndex:16},{value:`model User {
  firstName String
  lastName  String
  email     String  @unique
  isAdmin   Boolean @default(false)

  @@id([firstName, lastName])
}
`,paraId:102,tocIndex:16},{value:"firstName \u548C lastName \u5171\u540C\u7EC4\u6210\u4E3B\u952E\uFF0C\u5141\u8BB8 firstName \u6216 lastName \u5355\u72EC\u91CD\u590D\uFF0C\u4F46\u4E0D\u80FD\u4E00\u8D77\u91CD\u590D\u3002",paraId:103,tocIndex:16},{value:"\u5F53\u521B\u5EFA\u7684\u65F6\u5019\uFF0C\u5B57\u6BB5\u9700\u8981\u90FD\u521B\u5EFA\uFF1A",paraId:104,tocIndex:16},{value:`const user = await prisma.user.create({
  data: {
    firstName: 'Alice',
    lastName: 'Smith',
  },
});
`,paraId:105,tocIndex:16},{value:"\u67E5\u8BE2\u7684\u65F6\u5019\uFF0C\u4F7F\u7528\u751F\u6210\u7684\u590D\u5408 id \uFF08firstName_lastName\uFF09\u8FDB\u884C\u67E5\u8BE2\uFF1A",paraId:106,tocIndex:16},{value:`const user = await prisma.user.findUnique({
  where: {
    firstName_lastName: {
      firstName: 'Alice',
      lastName: 'Smith',
    },
  },
});
`,paraId:107,tocIndex:16},{value:"@@unique",paraId:108,tocIndex:16},{value:"\uFF1A\u590D\u5408\u552F\u4E00\u7EA6\u675F",paraId:108,tocIndex:16},{value:"\u5B9A\u4E49\uFF1A",paraId:109,tocIndex:16},{value:`model User {
  id        Int     @default(autoincrement())
  firstName String
  lastName  String
  isAdmin   Boolean @default(false)

  @@unique([firstName, lastName])
}
`,paraId:110,tocIndex:16},{value:"\u67E5\u8BE2\uFF1A",paraId:111,tocIndex:16},{value:`const user = await prisma.user.findUnique({
  where: {
    firstName_lastName: {
      firstName: 'Alice',
      lastName: 'Smith',
    },
  },
});
`,paraId:112,tocIndex:16},{value:"@@index",paraId:113,tocIndex:16},{value:"\uFF1A\u521B\u5EFA\u6570\u636E\u5E93\u7D22\u5F15",paraId:113,tocIndex:16},{value:"\u53EF\u4EE5\u521B\u5EFA\u591A\u5217\u7D22\u5F15\uFF1A",paraId:114,tocIndex:16},{value:`model Post {
  id      Int     @id @default(autoincrement())
  title   String
  content String?

  @@index([title, content])
}
`,paraId:115,tocIndex:16},{value:"@@map",paraId:116,tocIndex:16},{value:"\uFF1A\u6620\u5C04\u6570\u636E\u5E93\u8868\u540D",paraId:116,tocIndex:16},{value:"@@ignore",paraId:116,tocIndex:16},{value:"\uFF1A\u5FFD\u7565\u6B64\u6A21\u578B",paraId:116,tocIndex:16},{value:"@@schema",paraId:116,tocIndex:16},{value:"\uFF1A\u5728\u652F\u6301 multiSchema \u7684\u65F6\u5019\u4F7F\u7528\uFF0C\u6BD4\u5982\u642D\u914D supabase\uFF0C\u4E3A model \u6DFB\u52A0\u6388\u6743\u76F8\u5173\u7684\u5B57\u6BB5",paraId:116,tocIndex:16},{value:'@@schema("auth")',paraId:116,tocIndex:16},{value:"\u8BA9\u6211\u4EEC\u518D\u770B\u4E0B\u8FD9\u4E2A\u4F8B\u5B50\uFF1A",paraId:117,tocIndex:17},{value:`model User {
  id        Int    @id @default(autoincrement())
}
`,paraId:118,tocIndex:17},{value:"@default",paraId:119,tocIndex:17},{value:" \u4E2D\u7684 ",paraId:119,tocIndex:17},{value:"autoincrement()",paraId:119,tocIndex:17},{value:" \u88AB\u79F0\u4E3A\u5C5E\u6027\u51FD\u6570\u3002\u5C5E\u6027\u51FD\u6570\u6709\uFF1A",paraId:119,tocIndex:17},{value:"auto()",paraId:120,tocIndex:17},{value:"\uFF1A\u7531\u6570\u636E\u5E93\u81EA\u52A8\u751F\u6210\uFF0C\u53EA\u7528\u4E8E Mongodb \u6570\u636E\u5E93\uFF08\u56E0\u4E3A Mongodb \u7684 _id \u662F\u81EA\u52A8\u751F\u6210\u7684\uFF09\uFF1A",paraId:120,tocIndex:17},{value:`model User {
  id   String  @id @default(auto()) @map("_id") @db.ObjectId
}
`,paraId:121,tocIndex:17},{value:"autoincrement()",paraId:122,tocIndex:17},{value:"\uFF1A\u81EA\u52A8\u589E\u957F\uFF0C\u53EA\u7528\u4E8E\u5173\u7CFB\u578B\u6570\u636E\u5E93\uFF1A",paraId:122,tocIndex:17},{value:`model User {
  id   Int    @id @default(autoincrement())
  name String
}
`,paraId:123,tocIndex:17},{value:"cuid()",paraId:124,tocIndex:17},{value:"\uFF1A\u57FA\u4E8E ",paraId:124,tocIndex:17},{value:"cuid ",paraId:124,tocIndex:17},{value:"\u89C4\u8303\u751F\u6210\u552F\u4E00\u6807\u8BC6\u7B26\uFF0C\u9002\u7528\u4E8E\u6D4F\u89C8\u5668\u73AF\u5883\u4E2D\uFF08\u793A\u4F8B\uFF1Atz4a98xxat96iws9zmbrgj3a\uFF09",paraId:124,tocIndex:17},{value:"uuid()",paraId:124,tocIndex:17},{value:"\uFF1A\u57FA\u4E8E ",paraId:124,tocIndex:17},{value:"uuid",paraId:124,tocIndex:17},{value:" \u89C4\u8303\u751F\u6210\u552F\u4E00\u6807\u8BC6\u7B26\uFF08\u793A\u4F8B\uFF1A9c5b94b1-35ad-49bb-b118-8e8fc24abf80\uFF09",paraId:124,tocIndex:17},{value:"now()",paraId:124,tocIndex:17},{value:"\uFF1A\u521B\u5EFA\u8BB0\u5F55\u7684\u65F6\u95F4\u6233",paraId:124,tocIndex:17},{value:"dbgenerated()",paraId:124,tocIndex:17},{value:"\uFF1A\u65E0\u6CD5\u5728 Prisma schema \u4E2D\u8868\u793A\u7684\u9ED8\u8BA4\u503C\uFF08\u5982 random()\uFF09",paraId:124,tocIndex:17},{value:"\u9664\u6B64\u4E4B\u5916\uFF0C\u8FD8\u6709\u4E00\u4E2A ",paraId:125,tocIndex:17},{value:"enum",paraId:125,tocIndex:17},{value:" \u7C7B\u578B\uFF0C\u5F88\u597D\u7406\u89E3\uFF0C\u4F7F\u7528\u793A\u4F8B\u5982\u4E0B\uFF1A",paraId:125,tocIndex:17},{value:`enum Role {
  USER
  ADMIN
}

model User {
  id   Int  @id @default(autoincrement())
  role Role @default(USER)
}
`,paraId:126,tocIndex:17},{value:"\u5173\u7CFB\uFF08relation\uFF09\u662F\u6307 Prisma schema \u4E2D\u7684\u4E24\u4E2A model \u5EFA\u7ACB\u8FDE\u63A5\u3002\u5EFA\u7ACB\u8FDE\u63A5\u7684\u65B9\u5F0F\u662F\u901A\u8FC7\u4E3B\u952E\uFF08PRIMARY KEY\uFF0C\u7B80\u5199 PK\uFF09\u548C\u5916\u952E\uFF08FOREIGN KEY\uFF0C\u7B80\u5199 FK\uFF09\u3002",paraId:127,tocIndex:18},{value:"\u6240\u8C13\u4E3B\u952E\uFF0C\u6307\u7684\u662F\u6570\u636E\u5E93\u8868\u4E2D\u5BF9\u50A8\u5B58\u6570\u636E\u5BF9\u8C61\u4E88\u4EE5\u552F\u4E00\u548C\u5B8C\u6574\u6807\u8BC6\u7684\u6570\u636E\u5217\u6216\u5C5E\u6027\u7684\u952E\uFF0C\u6362\u53E5\u8BDD\u8BF4\uFF0C\u4E3B\u952E\u662F\u5173\u7CFB\u8868\u4E2D\u8BB0\u5F55\u7684\u552F\u4E00\u6807\u8BC6\uFF0C\u4E5F\u5C31\u662F\u6211\u4EEC\u6DFB\u52A0 ",paraId:128,tocIndex:18},{value:"@id",paraId:128,tocIndex:18},{value:"\u5C5E\u6027\u7684\u5B57\u6BB5\u3002",paraId:128,tocIndex:18},{value:"\u6240\u8C13\u5916\u952E\uFF0C\u6307\u7684\u662F\u6307\u5411\u5176\u4ED6\u8868\u7684\u4E3B\u952E\u7684\u952E\uFF0C\u7528\u4E8E\u5EFA\u7ACB\u4E24\u5F20\u8868\u7684\u5173\u8054\u6027\u3002Prisma \u7528 ",paraId:129,tocIndex:18},{value:"@relation",paraId:129,tocIndex:18},{value:"\u5C5E\u6027\u6765\u5EFA\u7ACB\u5173\u7CFB\u3002",paraId:129,tocIndex:18},{value:"\u4EE5\u6211\u4EEC\u7684\u9879\u76EE\u4E3A\u4F8B\uFF0C\u4E00\u5F20 User \u8868\u3001\u4E00\u5F20 Note \u8868\u3002\u56E0\u4E3A\u4E00\u4E2A\u4F5C\u8005\u53EF\u4EE5\u5199\u591A\u7BC7\u7B14\u8BB0\uFF0C\u6240\u4EE5 User \u548C Note \u7684\u5173\u7CFB\u4E3A\u4E00\u5BF9\u591A\uFF1A",paraId:130,tocIndex:19},{value:"\u5982\u679C\u6211\u4EEC\u8981\u5EFA\u7ACB\u4E24\u4E2A\u8868\u4E4B\u95F4\u7684\u5173\u7CFB\uFF0C\u5199\u6CD5\u5982\u4E0B\uFF1A",paraId:131,tocIndex:19},{value:`model User {
  id       String @id @default(uuid())
  notes    Note[]
}

model Note {
  id        String   @id @default(cuid())
  author    User     @relation(fields: [authorId], references: [id])
  authorId  String
}
`,paraId:132,tocIndex:19},{value:"Note \u7684 author \u5B57\u6BB5\u6307\u5411 User\uFF0C\u5176\u4E2D ",paraId:133,tocIndex:19},{value:"@relation(fields: [authorId], references: [id])",paraId:133,tocIndex:19},{value:"\u8868\u793A Note \u7684 authorId \u5B57\u6BB5\u4E0E User \u7684 id \u5B57\u6BB5\u5EFA\u7ACB\u5173\u7CFB\uFF0C",paraId:133,tocIndex:19},{value:"\u4E5F\u5C31\u662F\u8FD9\u4E24\u4E2A\u5B57\u6BB5\u7684\u503C\u5E94\u8BE5\u662F\u4E00\u81F4\u7684",paraId:133,tocIndex:19},{value:"\u3002",paraId:133,tocIndex:19},{value:"\u50CF\u6211\u4EEC\u7684\u9879\u76EE\u7684 schema \u4E3A\uFF1A",paraId:134,tocIndex:19},{value:`model User {
  id       String @id @default(uuid())
  username String
  password String
  notes    Note[]
}

model Note {
  id        String   @id @default(cuid())
  title     String   @db.VarChar(255)
  content   String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  author    User     @relation(fields: [authorId], references: [id])
  authorId  String
}
`,paraId:135,tocIndex:19},{value:"\u5F53\u4F60\u901A\u8FC7 ",paraId:136,tocIndex:20},{value:"@relation",paraId:136,tocIndex:20},{value:" \u5EFA\u7ACB\u4E86 User \u8868\u548C Note \u8868\u7684\u5173\u8054\u540E\uFF0C\u4F60\u53EF\u4EE5\u66F4\u4FBF\u6377\u7684\u8FDB\u884C\u4E00\u4E9B\u64CD\u4F5C\uFF0C\u6BD4\u5982\u521B\u5EFA\u5D4C\u5957\u7684\u8BB0\u5F55\uFF1A",paraId:136,tocIndex:20},{value:`const user = await prisma.user.create({
  data: {
    username,
    password,
    notes: {
      create: [
        { title: '1', content: '1' },
        { title: '2', content: '2' },
      ],
    },
  },
});
`,paraId:137,tocIndex:20},{value:"\u6B64\u65F6 Note \u8868\u4E2D\u4E5F\u4F1A\u6709\u4E24\u6761\u8BB0\u5F55\uFF0C\u5E76\u4E14\u4E24\u6761\u8BB0\u5F55\u7684 authorId \u4F1A\u81EA\u52A8\u8BBE\u7F6E\u4E3A\u521A\u521B\u5EFA\u7684 user \u8BB0\u5F55\u7684 id\u3002",paraId:138,tocIndex:20},{value:"\u5F53\u4F60\u67E5\u8BE2 User \u8868\u7684\u4FE1\u606F\uFF0C\u53EF\u4EE5\u8FD4\u56DE Note \u8868\u4E2D\u7684\u4FE1\u606F\u3002\u5F53\u4F60\u901A\u8FC7\u4EE5\u4E0B\u4EE3\u7801\u67E5\u8BE2\u65F6\uFF1A",paraId:139,tocIndex:21},{value:`const user = await prisma.user.findFirst({
  where: {
    username: '1',
  },
  include: {
    notes: true,
  },
});
console.log(user);
`,paraId:140,tocIndex:21},{value:"\u6253\u5370\u7684\u4FE1\u606F\u4E3A\uFF1A",paraId:141,tocIndex:21},{value:"\u4E0D\u8FC7\u4F7F\u7528\u5173\u7CFB\u7684\u65F6\u5019\uFF0C\u8981\u6CE8\u610F\u53CA\u65F6\u5173\u8054\u3002\u6BD4\u5982\u5F53\u4F60\u521B\u5EFA\u4E86\u4E00\u6761 note \u65F6\uFF0C\u8981\u5173\u8054\u5230\u5BF9\u5E94\u7684 user \u4E2D\uFF0C\u4E3A\u6B64\u4F60\u9700\u8981\u4F7F\u7528 ",paraId:142,tocIndex:22},{value:"connect",paraId:142,tocIndex:22},{value:" \u5D4C\u5957\u67E5\u8BE2\u8BED\u6CD5\uFF1A",paraId:142,tocIndex:22},{value:`const result = await prisma.note.create({
  data: {
    title: '1',
    content: '2',
    author: {
      connect: {
        id: '1895c437',
      },
    },
  },
});
`,paraId:143,tocIndex:22},{value:"Prisma \u4F1A\u81EA\u52A8\u8BBE\u7F6E\u8BE5 note \u7684 authorId \u4E3A ",paraId:144,tocIndex:22},{value:"'1895c437'",paraId:144,tocIndex:22},{value:"\uFF0C\u5E76\u4E14\u5173\u8054\u5230 id \u4E3A ",paraId:144,tocIndex:22},{value:"'1895c437'",paraId:144,tocIndex:22},{value:" \u7684 user \u4E0A\uFF0C\u8FD9\u6837\u5F53\u4F60\u901A\u8FC7 prisma.user \u67E5\u8BE2\u7684\u65F6\u5019\uFF0C\u4E5F\u4F1A\u51FA\u73B0\u8BE5 note \u4FE1\u606F\u3002",paraId:144,tocIndex:22},{value:"\u4E5F\u53EF\u4EE5\u4ECE prisma.user \u66F4\u65B0\u5173\u8054\uFF1A",paraId:145,tocIndex:22},{value:`const updateAuthor = await prisma.user.update({
  where: {
    id: '1895c437',
  },
  data: {
    notes: {
      connect: {
        id: 'clrkpshqd0004aa0occr5a2qq',
      },
    },
  },
});
`,paraId:146,tocIndex:22},{value:"Prisma \u4F1A\u67E5\u8BE2 id \u4E3A ",paraId:147,tocIndex:22},{value:"'1895c437'",paraId:147,tocIndex:22},{value:" \u7684\u7528\u6237\uFF0C\u7136\u540E\u5C06 id \u4E3A ",paraId:147,tocIndex:22},{value:"clrkpshqd0004aa0occr5a2qq",paraId:147,tocIndex:22},{value:" \u7684 note \u7684 authorId \u6539\u4E3A ",paraId:147,tocIndex:22},{value:"'1895c437'",paraId:147,tocIndex:22},{value:"\uFF0C\u5E76\u5EFA\u7ACB\u4E24\u8005\u7684\u5173\u8054\u3002",paraId:147,tocIndex:22},{value:"\u9664\u4E86\u50CF\u8FD9\u6837\u4E00\u5BF9\u591A\u7684\u5173\u7CFB\uFF0C\u8FD8\u6709",paraId:148,tocIndex:22},{value:"\u4E00\u5BF9\u4E00",paraId:148,tocIndex:22},{value:"\uFF0C",paraId:148,tocIndex:22},{value:"\u591A\u5BF9\u591A",paraId:148,tocIndex:22},{value:"\u7684\u5173\u7CFB\uFF0C\u8BE6\u7EC6\u8BF7\u67E5\u9605\u6587\u6863\u3002",paraId:148,tocIndex:22},{value:"\u5B66\u4E60 Prisma Client\uFF0C\u4E5F\u5C31\u662F\u5B66\u4E60\u5177\u4F53\u5982\u4F55\u64CD\u4F5C\u6570\u636E\u5E93\u3002\u5B8C\u6574\u7684 API \u53C2\u8003 ",paraId:149,tocIndex:23},{value:"Prisma Client API reference",paraId:149,tocIndex:23},{value:"\u3002",paraId:149,tocIndex:23},{value:"\u67E5\u8BE2\u51FD\u6570\u6709\uFF1A",paraId:150,tocIndex:24},{value:"\u589E\uFF1A",paraId:151,tocIndex:24},{value:"create()",paraId:151,tocIndex:24},{value:"\u3001",paraId:151,tocIndex:24},{value:"createMany()",paraId:151,tocIndex:24},{value:"\u5220\uFF1A",paraId:151,tocIndex:24},{value:"delete()",paraId:151,tocIndex:24},{value:"\u3001",paraId:151,tocIndex:24},{value:"deleteMany()",paraId:151,tocIndex:24},{value:"\u6539\uFF1A",paraId:151,tocIndex:24},{value:"update()",paraId:151,tocIndex:24},{value:"\u3001",paraId:151,tocIndex:24},{value:"upsert()",paraId:151,tocIndex:24},{value:"\uFF08\u627E\u4E0D\u5230\u5C31\u521B\u5EFA\uFF09\u3001",paraId:151,tocIndex:24},{value:"updateMany()",paraId:151,tocIndex:24},{value:"\u67E5\uFF1A",paraId:151,tocIndex:24},{value:"findUnique()",paraId:151,tocIndex:24},{value:"(\u9700\u8981\u6709 @unique \u5C5E\u6027)\u3001",paraId:151,tocIndex:24},{value:"findUniqueOrThrow()",paraId:151,tocIndex:24},{value:"\uFF08\u627E\u4E0D\u5230\u5C31\u62A5\u9519\uFF09\u3001",paraId:151,tocIndex:24},{value:"findFirst()",paraId:151,tocIndex:24},{value:"\uFF08\u627E\u7B2C\u4E00\u4E2A\uFF09\u3001",paraId:151,tocIndex:24},{value:"findFirstOrThrow()",paraId:151,tocIndex:24},{value:"\uFF08\u627E\u4E0D\u5230\u5C31\u62A5\u9519\uFF09\u3001",paraId:151,tocIndex:24},{value:"findMany()",paraId:151,tocIndex:24},{value:"\u5176\u4ED6\uFF1A",paraId:151,tocIndex:24},{value:"count()",paraId:151,tocIndex:24},{value:"\u3001",paraId:151,tocIndex:24},{value:"aggregate()",paraId:151,tocIndex:24},{value:"\uFF08\u805A\u5408\uFF09\u3001",paraId:151,tocIndex:24},{value:"groupBy()",paraId:151,tocIndex:24},{value:"\u5176\u67E5\u8BE2\u53C2\u6570\u9664\u4E86 ",paraId:152,tocIndex:25},{value:"where",paraId:152,tocIndex:25},{value:" \u7528\u4E8E\u6761\u4EF6\u67E5\u627E\u4E4B\u5916\uFF0C\u8FD8\u6709\uFF1A",paraId:152,tocIndex:25},{value:"include",paraId:153,tocIndex:25},{value:" \u7528\u4E8E\u5B9A\u4E49\u8FD4\u56DE\u7684\u7ED3\u679C\u4E2D\u5305\u542B\u7684\u5173\u7CFB",paraId:153,tocIndex:25},{value:"select",paraId:153,tocIndex:25},{value:" \u7528\u4E8E\u9009\u62E9\u8FD4\u56DE\u7684\u5B57\u6BB5",paraId:153,tocIndex:25},{value:"orderBy",paraId:153,tocIndex:25},{value:" \u7528\u4E8E\u6392\u5E8F",paraId:153,tocIndex:25},{value:"distinct",paraId:153,tocIndex:25},{value:" \u7528\u4E8E\u53BB\u91CD",paraId:153,tocIndex:25},{value:`const usersWithPosts = await prisma.user.findMany({
  orderBy: {
    email: 'asc',
  },
  include: {
    posts: {
      select: {
        title: true,
      },
      orderBy: {
        title: 'asc',
      },
    },
  },
});
`,paraId:154,tocIndex:25},{value:"\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF1A",paraId:155,tocIndex:25},{value:"\u8FD4\u56DE\u6240\u6709\u7684 User \u8BB0\u5F55\uFF0C\u8BB0\u5F55\u6309 email \u5347\u5E8F\u6392\u5217",paraId:156,tocIndex:25},{value:"\u5BF9\u4E8E\u6BCF\u6761\u8BB0\u5F55\uFF0C\u8FD4\u56DE\u5D4C\u5957\u7684 posts \u4FE1\u606F\uFF0C\u6309 title \u5347\u5E8F\u6392\u5217\u540E\uFF0C\u53EA\u8FD4\u56DE title \u5B57\u6BB5",paraId:156,tocIndex:25},{value:"\u7B80\u5355\u7684\u6765\u8BF4\uFF0C\u5C31\u662F\u8FD4\u56DE\u6240\u6709\u7528\u6237\u7684\u57FA\u672C\u4FE1\u606F\u548C\u6587\u7AE0\u6807\u9898\u6570\u636E\u3002\u4E00\u4E2A\u793A\u4F8B\u7ED3\u679C\u5982\u4E0B\uFF1A",paraId:157,tocIndex:25},{value:`[
  {
    "id": 2,
    "email": "alice@prisma.io",
    "name": "Alice",
    "posts": [
      {
        "title": "Watch the talks from Prisma Day 2019"
      }
    ]
  },
  {
    "id": 3,
    "email": "ariadne@prisma.io",
    "name": "Ariadne",
    "posts": [
      {
        "title": "How to connect to a SQLite database"
      },
      {
        "title": "My first day at Prisma"
      }
    ]
  },
  {
    "id": 1,
    "email": "bob@prisma.io",
    "name": "Bob",
    "posts": [
      {
        "title": "Follow Prisma on Twitter"
      },
      {
        "title": "Subscribe to GraphQL Weekly for community news "
      }
    ]
  }
]
`,paraId:158,tocIndex:25},{value:"\u5728\u5D4C\u5957\u67E5\u8BE2\u91CC\uFF0C\u6709\uFF1A",paraId:159,tocIndex:26},{value:"create",paraId:159,tocIndex:26},{value:"\u3001",paraId:159,tocIndex:26},{value:"createMany",paraId:159,tocIndex:26},{value:"\u3001",paraId:159,tocIndex:26},{value:"set",paraId:160,tocIndex:26},{value:"\u3001",paraId:159,tocIndex:26},{value:"connect",paraId:159,tocIndex:26},{value:"\u3001",paraId:159,tocIndex:26},{value:"connectOrCreate",paraId:159,tocIndex:26},{value:"\u3001",paraId:159,tocIndex:26},{value:"disconnect",paraId:159,tocIndex:26},{value:"\u3001",paraId:159,tocIndex:26},{value:"update",paraId:159,tocIndex:26},{value:"\u3001",paraId:159,tocIndex:26},{value:"upsert",paraId:159,tocIndex:26},{value:"\u3001",paraId:159,tocIndex:26},{value:"delete",paraId:159,tocIndex:26},{value:"\u3001",paraId:159,tocIndex:26},{value:"updateMany",paraId:161,tocIndex:26},{value:"\u3001",paraId:159,tocIndex:26},{value:"deleteMany",paraId:159,tocIndex:26},{value:"\uFF0C\u4E5F\u5C31\u662F\u5982\u4F55\u5904\u7406\u5173\u7CFB\u8868\u4E2D\u7684\u6570\u636E\uFF0C\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:159,tocIndex:26},{value:`const user = await prisma.user.create({
  data: {
    username,
    password,
    notes: {
      create: [
        { title: '1', content: '1' },
        { title: '2', content: '2' },
      ],
    },
  },
});
`,paraId:162,tocIndex:26},{value:"\u5728\u8FD9\u6BB5\u4EE3\u7801\u4E2D\uFF0C\u521B\u5EFA\u4E00\u6761 user \u8BB0\u5F55\u7684\u540C\u65F6\uFF0C\u4E5F\u521B\u5EFA\u4E86\u4E24\u6761 note \u8BB0\u5F55\u5E76\u8FDB\u884C\u4E86\u5173\u8054\u3002\u5176\u4ED6\u65B9\u6CD5\u7684\u4F5C\u7528\u4E5F\u662F\u7C7B\u4F3C\u3002",paraId:163,tocIndex:26},{value:"\u7B5B\u9009\u6761\u4EF6\u652F\u6301 ",paraId:164,tocIndex:27},{value:"equals",paraId:164,tocIndex:27},{value:"\u3001",paraId:164,tocIndex:27},{value:"not",paraId:164,tocIndex:27},{value:"\u3001",paraId:164,tocIndex:27},{value:"in",paraId:164,tocIndex:27},{value:"\u3001",paraId:164,tocIndex:27},{value:"notIn",paraId:164,tocIndex:27},{value:"\u3001",paraId:164,tocIndex:27},{value:"lt",paraId:164,tocIndex:27},{value:"\u3001",paraId:164,tocIndex:27},{value:"lte",paraId:164,tocIndex:27},{value:"\u3001",paraId:164,tocIndex:27},{value:"gt",paraId:164,tocIndex:27},{value:"\u3001",paraId:164,tocIndex:27},{value:"gte",paraId:164,tocIndex:27},{value:"\u3001",paraId:164,tocIndex:27},{value:"contains",paraId:164,tocIndex:27},{value:"\u3001",paraId:164,tocIndex:27},{value:"search",paraId:164,tocIndex:27},{value:"\u3001",paraId:164,tocIndex:27},{value:"mode",paraId:164,tocIndex:27},{value:"\u3001",paraId:164,tocIndex:27},{value:"startsWith",paraId:164,tocIndex:27},{value:"\u3001",paraId:164,tocIndex:27},{value:"endsWith",paraId:164,tocIndex:27},{value:"\u3001",paraId:164,tocIndex:27},{value:"AND",paraId:164,tocIndex:27},{value:"\u3001",paraId:164,tocIndex:27},{value:"OR",paraId:164,tocIndex:27},{value:"\u3001",paraId:164,tocIndex:27},{value:"NOT",paraId:164,tocIndex:27},{value:"\u3002\u4E3E\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\uFF1A",paraId:164,tocIndex:27},{value:`const result = await prisma.user.findMany({
  where: {
    name: {
      equals: 'Eleanor',
    },
  },
});
`,paraId:165,tocIndex:27},{value:"\u8FD9\u6BB5\u4EE3\u7801\u7684\u542B\u4E49\u662F\u67E5\u8BE2 ",paraId:166,tocIndex:27},{value:"name",paraId:166,tocIndex:27},{value:" \u7B49\u4E8E ",paraId:166,tocIndex:27},{value:"'Eleanor'",paraId:166,tocIndex:27},{value:" \u7684\u8BB0\u5F55\u3002",paraId:166,tocIndex:27},{value:"\u4E3E\u4E2A\u590D\u6742\u4E00\u70B9\u7684\u4F8B\u5B50\uFF1A",paraId:167,tocIndex:27},{value:`const result = await prisma.post.findMany({
  where: {
    OR: [
      {
        title: {
          contains: 'Prisma',
        },
      },
      {
        title: {
          contains: 'databases',
        },
      },
    ],
    AND: {
      published: false,
    },
  },
});
`,paraId:168,tocIndex:27},{value:"OR",paraId:169,tocIndex:27},{value:" \u5B9E\u73B0\u201C\u6216\u201D\u8BED\u53E5\uFF0C",paraId:169,tocIndex:27},{value:"AND",paraId:169,tocIndex:27},{value:" \u5B9E\u73B0 \u201C\u5E76\u201D\u8BED\u53E5\uFF0C\u8FD9\u6BB5\u4EE3\u7801\u7684\u610F\u601D\u662F\u627E\u51FA ",paraId:169,tocIndex:27},{value:"title",paraId:169,tocIndex:27},{value:" \u5305\u542B ",paraId:169,tocIndex:27},{value:"Prisma",paraId:169,tocIndex:27},{value:" \u6216\u8005 ",paraId:169,tocIndex:27},{value:"database",paraId:169,tocIndex:27},{value:" \u5E76\u4E14 ",paraId:169,tocIndex:27},{value:"published",paraId:169,tocIndex:27},{value:" \u4E3A ",paraId:169,tocIndex:27},{value:"false",paraId:169,tocIndex:27},{value:" \u7684\u8BB0\u5F55\u3002",paraId:169,tocIndex:27},{value:"\u6700\u540E\u8FD8\u6709 Relation filters\uFF0C\u6709 ",paraId:170,tocIndex:28},{value:"some",paraId:170,tocIndex:28},{value:"\u3001",paraId:170,tocIndex:28},{value:"every",paraId:170,tocIndex:28},{value:"\u3001",paraId:170,tocIndex:28},{value:"none",paraId:170,tocIndex:28},{value:"\u3001",paraId:170,tocIndex:28},{value:"is",paraId:170,tocIndex:28},{value:"\u3001",paraId:170,tocIndex:28},{value:"isNot",paraId:170,tocIndex:28},{value:"\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\uFF1A",paraId:170,tocIndex:28},{value:`const result = await prisma.user.findMany({
  where: {
    post: {
      some: {
        content: {
          contains: "Prisma"
        }
      }
    }
  }
}
`,paraId:171,tocIndex:28},{value:"\u8FD9\u6BB5\u4EE3\u7801\u7684\u542B\u4E49\u662F\u83B7\u53D6\u6587\u7AE0\u4E2D\u5305\u542B Prisma \u6587\u5B57\u7684 user \u8BB0\u5F55\u3002",paraId:172,tocIndex:28},{value:`const result = await prisma.post.findMany({
  where: {
    user: {
        is: {
          name: "yayu"
        },
    }
  }
}
`,paraId:173,tocIndex:28},{value:'\u8FD9\u6BB5\u4EE3\u7801\u7684\u542B\u4E49\u662F\u83B7\u53D6\u7528\u6237\u540D\u4E3A "yayu" \u7684 post \u8BB0\u5F55\u3002',paraId:174,tocIndex:28},{value:"\u6700\u540E\u518D\u5B66\u4E60\u4E0B Prsima \u7684\u547D\u4EE4\uFF0C\u8FD0\u884C\uFF1A",paraId:175,tocIndex:29},{value:`npx prisma --help
`,paraId:176,tocIndex:29},{value:"\u53EF\u4EE5\u67E5\u770B\u5230\u6709\u54EA\u4E9B\u547D\u4EE4\uFF1A",paraId:177,tocIndex:29},{value:"\u5176\u4E2D\uFF1A",paraId:178,tocIndex:29},{value:"npx prisma init",paraId:179,tocIndex:29},{value:"\u521D\u59CB\u5316 Prisma",paraId:179,tocIndex:29},{value:"API \u94FE\u63A5",paraId:179,tocIndex:29},{value:"npx prisma generate",paraId:179,tocIndex:29},{value:"\u751F\u6210 Prisma Client",paraId:179,tocIndex:29},{value:"API \u94FE\u63A5",paraId:179,tocIndex:29},{value:"npx prisma studio",paraId:179,tocIndex:29},{value:"\u5F00\u542F Prisma Studio",paraId:179,tocIndex:29},{value:"API \u94FE\u63A5",paraId:179,tocIndex:29},{value:"npx prisma validate",paraId:179,tocIndex:29},{value:"\u68C0\u9A8C Prisma schema \u6587\u4EF6",paraId:179,tocIndex:29},{value:"API \u94FE\u63A5",paraId:179,tocIndex:29},{value:"npx prisma format",paraId:179,tocIndex:29},{value:"\u683C\u5F0F\u5316 Prisma Scheam \u6587\u4EF6",paraId:179,tocIndex:29},{value:"API \u94FE\u63A5",paraId:179,tocIndex:29},{value:"npx prisma version",paraId:179,tocIndex:29},{value:"\u5C55\u793A Prisma \u7248\u672C\u4FE1\u606F",paraId:179,tocIndex:29},{value:"API \u94FE\u63A5",paraId:179,tocIndex:29},{value:"npx prisma debug",paraId:179,tocIndex:29},{value:"\u5C55\u793A Prisma debug \u4FE1\u606F",paraId:179,tocIndex:29},{value:"API \u94FE\u63A5",paraId:179,tocIndex:29},{value:"\u7A0D\u5FAE\u6709\u70B9\u590D\u6742\u7684\u662F ",paraId:180,tocIndex:29},{value:"db",paraId:180,tocIndex:29},{value:" \u548C ",paraId:180,tocIndex:29},{value:"migrate",paraId:180,tocIndex:29},{value:" \u547D\u4EE4\uFF1A",paraId:180,tocIndex:29},{value:"npx prisma db pull",paraId:181,tocIndex:29},{value:"\u8FDE\u63A5\u6570\u636E\u5E93\uFF0C\u540C\u6B65\u5230\u6570\u636E\u6A21\u578B",paraId:181,tocIndex:29},{value:"API \u94FE\u63A5",paraId:181,tocIndex:29},{value:"npx prisma db push",paraId:181,tocIndex:29},{value:"\u6570\u636E\u6A21\u578B\u540C\u6B65\u5230\u6570\u636E\u5E93",paraId:181,tocIndex:29},{value:"API \u94FE\u63A5",paraId:181,tocIndex:29},{value:"npx prisma db seed",paraId:181,tocIndex:29},{value:"\u7ED9\u6570\u636E\u5E93\u586B\u5145\u70B9\u6570\u636E",paraId:181,tocIndex:29},{value:"API \u94FE\u63A5",paraId:181,tocIndex:29},{value:"npx prisma db execute",paraId:181,tocIndex:29},{value:"\u4E0E\u6570\u636E\u5E93\u4EA4\u4E92\uFF0C\u6267\u884C SQL \u8BED\u53E5",paraId:181,tocIndex:29},{value:"API \u94FE\u63A5",paraId:181,tocIndex:29},{value:"npx prisma migrate dev",paraId:182,tocIndex:29},{value:"\u4EC5\u5728\u5F00\u53D1\u73AF\u5883\u4E0B\u4F7F\u7528\uFF0C\u8FC1\u79FB\u6570\u636E\u5E93",paraId:182,tocIndex:29},{value:"API \u94FE\u63A5",paraId:182,tocIndex:29},{value:"npx prisma migrate reset",paraId:182,tocIndex:29},{value:"\u4EC5\u5728\u5F00\u53D1\u73AF\u5883\u4E0B\u4F7F\u7528\uFF0C\u91CD\u7F6E\u6570\u636E\u5E93",paraId:182,tocIndex:29},{value:"API \u94FE\u63A5",paraId:182,tocIndex:29},{value:"npx prisma migrate deploy",paraId:182,tocIndex:29},{value:"\u5E38\u7528\u4E8E\u6B63\u5F0F\u73AF\u5883\uFF0C\u5C06\u8FC1\u79FB\u6587\u4EF6\u66F4\u65B0\u5230\u751F\u4EA7\u73AF\u5883\u540E\uFF0C\u6267\u884C\u8BE5\u547D\u4EE4\uFF0C\u4F1A\u5E94\u7528\u6240\u6709\u5C1A\u672A\u8FC1\u79FB\u8FC7\u7684\u6587\u4EF6",paraId:182,tocIndex:29},{value:"API \u94FE\u63A5",paraId:182,tocIndex:29},{value:"npx prisma migrate resolve",paraId:182,tocIndex:29},{value:"\u5F53 migrate \u5931\u8D25\u65F6\u7528\u4E8E\u56DE\u6EDA\uFF0C\u8BE6\u7EC6\u53C2\u8003 ",paraId:182,tocIndex:29},{value:"Failed migration",paraId:182,tocIndex:29},{value:"API \u94FE\u63A5",paraId:182,tocIndex:29},{value:"npx prisma migrate status",paraId:182,tocIndex:29},{value:"\u5F53\u524D\u7684\u8FC1\u79FB\u72B6\u6001\uFF0C\u54EA\u4E9B\u8FC1\u79FB\u5DF2\u5E94\u7528\uFF0C\u54EA\u4E9B\u8FC1\u79FB\u5C1A\u672A\u5E94\u7528",paraId:182,tocIndex:29},{value:"API \u94FE\u63A5",paraId:182,tocIndex:29},{value:"npx prisma migrate diff",paraId:182,tocIndex:29},{value:"\u6BD4\u8F83\u4E24\u4E2A\u6570\u636E\u5E93 schema source \u7684\u5DEE\u5F02",paraId:182,tocIndex:29},{value:"API \u94FE\u63A5",paraId:182,tocIndex:29},{value:"Prisma \u6700\u4E3B\u8981\u7684\u5C31\u662F\u8FD9\u4E9B\u5185\u5BB9\u4E86\u3002\u672C\u7BC7\u4E3B\u8981\u662F\u4E3A\u5927\u5BB6\u4ECB\u7ECD ORM \u548C Prisma\u3002Prisma \u662F\u975E\u5E38\u5E38\u89C1\u7684\u642D\u914D Next.js \u9879\u76EE\u7684\u6280\u672F\u9009\u578B\uFF0C\u6211\u4EEC\u540E\u9762\u7684\u5B9E\u6218\u9879\u76EE\u8FD8\u4F1A\u7EE7\u7EED\u7528\u5230 Prisma\uFF0C\u5C31\u8BA9\u6211\u4EEC\u5728\u4E0D\u65AD\u7684\u5B9E\u8DF5\u4E2D\u52A0\u6DF1\u7406\u89E3\u5427\uFF01",paraId:183,tocIndex:30},{value:"\u672C\u7BC7\u7684\u4EE3\u7801\u6211\u5DF2\u7ECF\u4E0A\u4F20\u5230",paraId:184,tocIndex:30},{value:"\u4EE3\u7801\u4ED3\u5E93",paraId:184,tocIndex:30},{value:"\u7684 ",paraId:184,tocIndex:30},{value:"Day 10",paraId:184,tocIndex:30},{value:" \u5206\u652F\uFF0C\u4F7F\u7528\u7684\u65F6\u5019\u4E0D\u8981\u5FD8\u8BB0\u5728\u672C\u5730\u5F00\u542F MySQL\u3002",paraId:184,tocIndex:30},{value:"What is Prisma? (Overview)",paraId:185,tocIndex:31},{value:"https://blog.bitsrc.io/what-is-an-orm-and-why-you-should-use-it-b2b6f75f5e2a",paraId:185,tocIndex:31},{value:"https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases-node-mysql",paraId:185,tocIndex:31}]}}]);
