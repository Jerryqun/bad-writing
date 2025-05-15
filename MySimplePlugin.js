class MySimplePlugin {
  // The constructor can take options if needed
  constructor(options) {
    this.options = options;
  }

  // All plugins must define an apply method which receives the compiler as a parameter
  apply(compiler) {
    // Hook into the 'done' event, the 'done' hook is triggered once the compilation is completed
    compiler.hooks.done.tap('MySimplePlugin', (stats) => {
      console.log('Build is done!');
      if (this.options && this.options.showTime) {
        console.log(`Build Time: ${stats.endTime - stats.startTime} ms`);
      }
    });
  }
}

module.exports = MySimplePlugin;
