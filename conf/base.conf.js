exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'sumitbhatnagar_R10zWU',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'wwykToyh4BNeUq8ztzyb',

  updateJob: false,
  specs: ['./tests/specs/test.js'],
  exclude: [],

  logLevel: 'warn',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  hostname: 'hub.browserstack.com',
  services: [['browserstack']],

  before: function () {
    var chai = require('chai');
    global.expect = chai.expect;
    chai.Should();
  },
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
};
