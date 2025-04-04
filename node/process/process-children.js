function getSum() {
  let sum = 0;
  for (let i = 0; i < 10000; i++) {
    sum += i;
  }
  return sum;
}
process.on('message', (data) => {
  console.info('子进程id', process.pid);
  console.info('子进程接受的参数', data);
  const sum = getSum();
  process.send({ sum });
});
