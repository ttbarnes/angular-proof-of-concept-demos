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

});