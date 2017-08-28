'use strict';

const path = require('path');
const fs = require('fs');

module.exports.env = process.env.NODE_ENV || 'development';
module.exports.base = undefined;
module.exports.constants = undefined;

module.exports.init = (env) => {
  this.getBase(env || this.env);
};

module.exports.getBase = (env) => {
  if (!env) {
    env = this.env;
  }
  if (!this.base || this.env !== env) {
    let configFilePath = path.dirname(require.main.filename) + '/configs/base/' + env + '.json';

    if (!fs.existsSync(configFilePath)) {
      configFilePath = './configs/base/' + env + '.json';
    }

    this.base = JSON.parse(fs.readFileSync(configFilePath, 'UTF-8'));
  }
  return this.base;
};
