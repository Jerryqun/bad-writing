const http = require('http');
const cpuCoreLength = require('os').cpus().length;
const cluster = require('cluster');

if (cluster.isMaster) {
  for (let i = 0; i < cpuCoreLength; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker) => {
    console.info('子进程退出');
    cluster.fork();
  });
} else {
  // 多个进程会共享一个tcp连接，提供一份网络服务
  const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('done');
  });
  server.listen(3000);
}
