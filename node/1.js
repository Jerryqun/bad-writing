const PV_SET = new Set();

class sdk {
  constructor(produceId) {
    this.produceId = produceId;
    this.initError();
    this.initPerformance();
  }
  // 发送统计数据
  send(url, params) {
    params.produceId = this.produceId;
    const paramsArr = [];
    for (let key in params) {
      const val = params[key];
      paramsArr.push(`${key}=${val}`);
    }
    const newUrl = `${url}?${paramsArr.join('&')}`;
    const img = document.createElement('img');
    img.src = newUrl;
  }
  // 初始化性能统计
  initPerformance() {
    const url = 'xxx';
    this.send(url, performance.timeOrigin);
  }
  // 初始化错误监控
  initError() {
    window.addEventListener('error', (event) => {
      this.error(event.error);
    });
    window.addEventListener('unhandledrejection', (event) => {
      this.error(event.error);
    });
  }
  pv() {
    const href = window.location.href;
    if (PV_SET.has(href)) return;
    PV_SET.add(href);
    this.event('pv');
  }
  // 自定义事件
  event(key, val) {
    const url = 'xxx';
    this.send(url, { key, val });
  }
  error(error, info = {}) {
    let url = 'xxx';
    this.send(url, { ...error, info });
    //send
  }
}
