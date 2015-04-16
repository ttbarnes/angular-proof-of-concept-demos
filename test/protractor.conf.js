exports.config = {
  multiCapabilities: [
    {
        shardTestFiles: false,
        maxInstances: 1,
        browserName: 'chrome',
        specs: ['e2e/spec/home.js']
    },
    {
        shardTestFiles: false,
        maxInstances: 1,
        browserName: 'chrome',
        specs: ['e2e/spec/directives/*.js']
    },
    {
        shardTestFiles: false,
        maxInstances: 1,
        browserName: 'chrome',
        specs: ['e2e/spec/forms/*.js']
    },
    {
        shardTestFiles: false,
        maxInstances: 1,
        browserName: 'chrome',
        specs: ['e2e/spec/ng-repeat/*.js']
    },
    {
        shardTestFiles: false,
        maxInstances: 1,
        browserName: 'chrome',
        specs: ['e2e/spec/scope-watch/*.js']
    },
    {
        shardTestFiles: false,
        maxInstances: 1,
        browserName: 'chrome',
        specs: ['e2e/spec/services/*.js']
    }
    /*{
        shardTestFiles: false,
        maxInstances: 1,
        browserName: 'chrome',
        specs: ['e2e/spec/ui/*.js']
    }
    */
  ],
  seleniumAddress: 'http://localhost:4444/wd/hub',
  //specs: ['e2e/spec/{,*/}*.js'],
  baseUrl: 'http://localhost:9001',
  onPrepare: function() {
    var SpecReporter = require('jasmine-spec-reporter');
    jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: true}));

    var width = 800;
    var height = 600;
    browser.driver.manage().window().setSize(width, height);
  }
}
