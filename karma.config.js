const puppeteer = require('puppeteer');
const webpackConfig = require('./webpack.config')();
const packageConfig = require('./package.config');

const file = `${packageConfig.dir}/test/index.js`;

process.env.CHROME_BIN = puppeteer.executablePath();

module.exports = (config) => {
  config.set({
    browsers: ['ChromeHeadlessWithoutSandbox'],
    customLaunchers: {
      ChromeHeadlessWithoutSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox'],
      },
    },
    files: [
      file,
    ],
    frameworks: ['mocha', 'chai'],
    preprocessors: {
      [file]: ['webpack'],
    },
    reporters: ['mocha'],
    singleRun: true,
    webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve,
    },
  });
};
