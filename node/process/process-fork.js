const http = require('http');
const fork = require('child_process').fork;
const server = http.createServer((req, res) => {
  if (req.url === '/get-sum') {
    console.info('主进程id', process.pid);
    const childProcess = fork('./process-children.js');
    childProcess.send({ info: '开始计算' });
    childProcess.on('message', (data) => {
      console.info('主进程接受信息: ', data);
      res.end(`${data.sum}`);
    });
    childProcess.on('close', () => {
      childProcess.kill();
      res.send('err');
    });
  }
});
server.listen(3000, () => {
  console.info('listen 300');
});
