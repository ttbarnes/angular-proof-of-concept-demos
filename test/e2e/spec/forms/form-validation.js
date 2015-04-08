ddescribe('page: forms - form-validation', function() {

  beforeEach(function() {
    browser.get('http://localhost:9000/#/forms/form-validation');
  });

  it('should have a header title defined', function(){ 
    var pageTitle = element.all(by.css('.page-title')).get(0);
    expect(pageTitle).toBeDefined();
    expect(pageTitle.getText()).toEqual('form validation');
  });

  var hasClass = function (element, cls) {
    return element.getAttribute('class').then(function (classes) {
      return classes.split(' ').indexOf(cls) !== -1;
    });
  };

  var rows = element.all(by.css('.signup-form .row'));
  var label = element.all(by.css('.signup-form label'));
  var input = element.all(by.css('.signup-form input'));
  var validationTextErrors = element(by.css('.signup-form .validation-text.errors'));
  var validationTextValid = element(by.css('.signup-form .validation-text.valid'));

  describe('initialisation', function(){

    it('should have 6 rows defined', function(){
      expect(rows.count()).toEqual(6);
    });

    it('should have 6 labels defined', function(){
      expect(label.count()).toEqual(6);
    });

    it('should have 8 inputs defined', function(){
      expect(input.count()).toEqual(8);
    });

    it('should show error present text', function(){
      expect(validationTextErrors).toBeDefined();
      expect(validationTextErrors.getAttribute('ng-show')).toEqual('!!signupForm.$error.required');
      expect(validationTextErrors.isDisplayed()).toBeTruthy();
    });

    it('should have hidden success/congratulations text', function(){
      expect(validationTextValid).toBeDefined();
      expect(validationTextValid.getAttribute('ng-hide')).toEqual('signupForm.$error.required');
      expect(validationTextValid.isDisplayed()).toBeFalsy();
    });

  });

  describe('user name', function(){

    var label = element(by.css('.row.user-name label'));
    var input = element(by.css('.row.user-name input'));
    var error = element(by.css('.row.user-name span.error'));

    it('should have the correct html/angular label attribute', function(){
      expect(label.getAttribute('for')).toEqual('userName');
    });

    it('should have the correct html/angular input attributes', function(){
      expect(input.getAttribute('name')).toEqual('userName');
      expect(input.getAttribute('ng-model')).toEqual('userName');
      expect(input.getAttribute('required')).toBeDefined();
    });

    it('should have the correct ng-show values in the error message', function(){
      expect(error.getAttribute('ng-show')).toEqual('!signupForm.userName.$pristine && signupForm.userName.$invalid');
    });

    it('should have error message hidden by default', function(){
      expect(error.isDisplayed()).toBeFalsy();
    });

    it('should be able to add text to input and the error message remains hidden', function(){
      input.sendKeys('Bruce wayne');
      expect(error.isDisplayed()).toBeFalsy();
    });

    it('should display error message if you add text and then remove', function(){
      input.clear();
      input.sendKeys('Bruce wayne');
      expect(error.isDisplayed()).toBeFalsy();
      input.clear();
      expect(error.isDisplayed()).toBeTruthy();
    });

    it('should display the correct error message copy', function(){
      input.sendKeys('Bruce wayne');
      input.clear();
      expect(error.getText()).toEqual('This field is required.');
    });

  });

  describe('user email', function(){

    var label = element(by.css('.row.user-email label'));
    var input = element(by.css('.row.user-email input'));
    var error = element(by.css('.row.user-email span.error'));

    it('should have the correct html/angular label attribute', function(){
      expect(label.getAttribute('for')).toEqual('userEmail');
    });

    it('should have the correct html/angular input attributes', function(){
      expect(input.getAttribute('name')).toEqual('userEmail');
      expect(input.getAttribute('ng-model')).toEqual('userEmail');
      expect(input.getAttribute('required')).toBeDefined();
    });

    it('should have the correct ng-show values in the error message', function(){
      expect(error.getAttribute('ng-show')).toEqual('!signupForm.userEmail.$pristine && signupForm.userEmail.$invalid');
    });

    it('should have error message hidden by default', function(){
      expect(error.isDisplayed()).toBeFalsy();
    });

    it('should display error message until a correct email is entered', function(){
      input.sendKeys('myemail@');
      expect(error.isDisplayed()).toBeTruthy();
      input.sendKeys('mydomain');
      expect(error.isDisplayed()).toBeFalsy();
      input.sendKeys('.');
      expect(error.isDisplayed()).toBeTruthy();
      input.sendKeys('com');
      expect(error.isDisplayed()).toBeFalsy();
    });

    it('should display error message if you add email and then remove', function(){
      input.clear();
      input.sendKeys('myemail@mydomain.co.uk');
      expect(error.isDisplayed()).toBeFalsy();
      input.clear();
      expect(error.isDisplayed()).toBeTruthy();
    });

    it('should display the correct error message copy', function(){
      input.sendKeys('myemail@mydomain.co.uk');
      input.clear();
      expect(error.getText()).toEqual('Email address is invalid.');
    });

  });

  describe('user number', function(){

    var label = element(by.css('.row.user-number label'));
    var input = element(by.css('.row.user-number input'));
    var error = element(by.css('.row.user-number span.error'));

    it('should have the correct html/angular label attribute', function(){
      expect(label.getAttribute('for')).toEqual('userNumber');
    });

    it('should have the correct html/angular input attributes', function(){
      expect(input.getAttribute('name')).toEqual('userNumber');
      expect(input.getAttribute('ng-model')).toEqual('userNumber');
      expect(input.getAttribute('required')).toBeDefined();
    });

    it('should have the correct ng-show values in the error message', function(){
      expect(error.getAttribute('ng-show')).toEqual('signupForm.userNumber.$dirty && signupForm.userNumber.$invalid');
    });

    it('should have error message hidden by default', function(){
      expect(error.isDisplayed()).toBeFalsy();
    });

    it('should display error message when non-numeric characters are entered', function(){
      input.sendKeys('a');
      expect(error.isDisplayed()).toBeTruthy();
      input.clear();
      input.sendKeys('asdf');
      expect(error.isDisplayed()).toBeTruthy();
      input.clear();
      input.sendKeys('!');
      expect(error.isDisplayed()).toBeTruthy();
      input.clear();
      input.sendKeys('[]');
      expect(error.isDisplayed()).toBeTruthy();
      input.clear();
      input.sendKeys('§±!@£$%^&*()');
      expect(error.isDisplayed()).toBeTruthy();
      input.clear();
      input.sendKeys('123q');
      expect(error.isDisplayed()).toBeTruthy();
    });

    it('should display error message if you add numbers and then remove', function(){
      input.clear();
      input.sendKeys('123456');
      expect(error.isDisplayed()).toBeFalsy();
      input.clear();
      expect(error.isDisplayed()).toBeTruthy();
    });

    it('should display the correct error message copy', function(){
      input.sendKeys('7890a');
      input.clear();
      expect(error.getText()).toEqual('That\'s not a valid number.');
    });

  });

  describe('language used', function(){

    var label = element(by.css('.row.language-used label'));
    var input = element.all(by.css('.row.language-used input'));
    var error = element(by.css('.row.language-used span.error'));

    it('should have the correct html/angular label attribute', function(){
      expect(label.getAttribute('for')).toEqual('languageUsed');
    });

    it('should have the correct html/angular input attributes', function(){
      expect(input.get(0).getAttribute('name')).toEqual('languageUsed');
      expect(input.get(0).getAttribute('ng-model')).toEqual('language.used');
      expect(input.get(0).getAttribute('required')).toBeDefined();
      expect(input.get(0).getAttribute('value')).toEqual('angular');

      expect(input.get(1).getAttribute('name')).toEqual('languageUsed');
      expect(input.get(1).getAttribute('ng-model')).toEqual('language.used');
      expect(input.get(1).getAttribute('required')).toBeDefined();
      expect(input.get(1).getAttribute('value')).toEqual('html2');

      expect(input.get(2).getAttribute('name')).toEqual('languageUsed');
      expect(input.get(2).getAttribute('ng-model')).toEqual('language.used');
      expect(input.get(2).getAttribute('required')).toBeDefined();
      expect(input.get(2).getAttribute('value')).toEqual('css11');
    });

    it('should have the correct ng-show values in the error message', function(){
      expect(error.getAttribute('ng-show')).toEqual('signupForm.languageUsed.$invalid');
    });

    it('should have error message displayed by default', function(){
      expect(error.isDisplayed()).toBeTruthy();
    });

    it('should display the correct error message copy', function(){
      expect(error.getText()).toEqual('Please select a language.');
    });

    it('should hide error message when an input is selected', function(){
      input.get(0).click();
      expect(error.isDisplayed()).toBeFalsy();
      input.get(1).click();
      expect(error.isDisplayed()).toBeFalsy();
    });

  });

describe('favourite url', function(){

    var label = element(by.css('.row.favourite-url label'));
    var input = element(by.css('.row.favourite-url input'));
    var error = element(by.css('.row.favourite-url span.error'));

    it('should have the correct html/angular label attribute', function(){
      expect(label.getAttribute('for')).toEqual('favouriteUrl');
    });

    it('should have the correct html/angular input attributes', function(){
      expect(input.getAttribute('type')).toEqual('url');
      expect(input.getAttribute('ng-model')).toEqual('favouriteUrl');
      expect(input.getAttribute('required')).toBeDefined();
    });

    it('should have the correct ng-show values in the error message', function(){
      expect(error.getAttribute('ng-show')).toEqual('!signupForm.favouriteUrl.$pristine && signupForm.favouriteUrl.$invalid');
    });

    it('should have error message hidden by default', function(){
      expect(error.isDisplayed()).toBeFalsy();
    });

    it('should display error message when an incorrect url entered', function(){
      input.sendKeys('www.google.com');
      expect(error.isDisplayed()).toBeTruthy();
      input.clear();
      input.sendKeys('google.com');
      expect(error.isDisplayed()).toBeTruthy();
    });

    it('should display error message if you add a url and then remove', function(){
      input.sendKeys('http://google.com');
      input.clear();
      expect(error.isDisplayed()).toBeTruthy();
    });

    it('should display the correct error message copy', function(){
      input.sendKeys('google');
      expect(error.getText()).toEqual('This url needs to contain \'http://\'.');
    });

  });

});







