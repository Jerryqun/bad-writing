const http = require('http');
const server = http.createServer();
server.listen(3000, () => {
  console.info('listen 300');
});
console.info(process.pid); //进程id
