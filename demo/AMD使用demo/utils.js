define(['./config'], function (config) {
  var utils = {
    request() {
      console.log(config.api);
    },
  };
  return utils;
});
