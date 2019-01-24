const fs = require('fs');
const path = require('path');

const dir = process.cwd();
const name = path.basename(dir);
const data = require(`${dir}/package.json`);
const now = new Date();

module.exports = Object.assign({}, data, {
  dir,
  library: name.replace(/\b-?(\w)/g, (...args) => args[1].toUpperCase()),
  banner: `/*!
 * ${name} v${data.version}
 * https://github.com/${data.repository}
 *
 * Copyright (c) ${now.getFullYear()} Xkeshi
 * Released under the ${data.license} license
 *
 * Date: ${now.toISOString()}
 */`,
});
