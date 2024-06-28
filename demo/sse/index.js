// 需求：希望有一个服务，可以依据请求的接口内容返回相应的数据
const express = require('express');
const cors = require('cors');

// console.log('__dirname', __dirname);
// console.log('__filename', __filename);
// console.log('this', this); // 空对象
// console.log(process.memoryUsage()); //内存
// console.log(process.cpuUsage()); // cpu
// console.log(process.version); // 版本
// console.log(process.arch); //
// console.log(process.env.PATH);

const app = express();
app.use(cors());

app.get('/sse', (req, res) => {
  // 设置响应头，以支持服务器发送事件，禁用缓存并保持连接 alive。
  res.set({
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive',
  });

  // 立即发送响应头，避免延迟。
  res.flushHeaders();
  // 异步查询用户模型的所有数据。
  //  根据数据库获取数据
  // 每秒向客户端发送一次数据。
  setInterval(() => {
    //再此处理你的业务
    // 将查询结果转换为 JSON 字符串并发送给客户端。
    res.write(`data: ${JSON.stringify({ a: 1 })}\n\n`);
  }, 1000);
});

app.listen(8080, () => {
  console.log('服务已经开启了');
});
