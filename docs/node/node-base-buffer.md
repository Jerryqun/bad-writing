---
nav: Node
group: 基础
toc: content
mobile: false
title: Buffer
---

## Buffer (Node.js 环境)

Buffer 对象是一个类似于数组的对象，它的每个元素都是一个表示 8 位字节的整数。

可以将其看作是一个字节数组，用来存储和操作二进制数据。

应用场景  
1、网络通信：可以使用 Buffer.from()方法将字符串转换为二进制数据，然后使用 net 模块进行网络通信：

```js
const net = require('net');

const client = net.createConnection({ port: 8080 }, () => {
  // 将字符串转换为二进制数据
  const data = Buffer.from('Hello, world!', 'utf8');

  // 发送数据
  client.write(data);
});
```

2、文件操作，用 Buffer 来存储文件数据：

```js
const fs = require('fs');

// 读取文件，并将数据存储到 Buffer 对象中
const data = fs.readFileSync('/path/to/file');

// 处理数据
// ...
```

3、加密解密，例如，可以使用 crypto 模块创建加密解密算法需要的二进制数据：

```js
const crypto = require('crypto');

// 创建加密解密算法需要的二进制数据
const key = Buffer.from('mysecretkey', 'utf8');
const iv = Buffer.alloc(16);

// 创建加密解密算法对象
const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);

// 加密数据
const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);
```

4、图像处理：

```js
const fs = require('fs');
const sharp = require('sharp');

// 读取图片文件，并将数据存储到 Buffer 对象中
const data = fs.readFileSync('/path/to/image');

// 处理图片
sharp(data)
  .resize(200, 200)
  .toFile('/path/to/resized-image', (err, info) => {
    // ...
  });
```

### 新建 Buffer 会占用 V8 分配的内存吗
不会，Buffer 属于堆外内存，不是 V8 分配的。在底层它分配的是操作系统的内存,V8 堆内存限制只针对 JS 对象等在 V8 堆上的分配
