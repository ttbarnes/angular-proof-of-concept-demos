exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['e2e/spec/*.js'],
  baseUrl: 'http://localhost:9001',

  onPrepare: function() {
      var SpecReporter = require('jasmine-spec-reporter');
      jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: true}));
   }

}
