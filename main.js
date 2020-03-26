'use strict';

const Application = require('./lib/application.js');

const cwd = process.cwd();
const application = new Application(cwd);
global.application = application;

application.on('started', () => {
  console.log('Application loaded');
});
