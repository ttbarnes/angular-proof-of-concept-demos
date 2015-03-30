describe('page: forms - form-validation', function() {

  beforeEach(function() {
    browser.get('http://localhost:9000/#/forms/form-validation');
  });

  it('should have a header title defined', function(){ 
    var pageTitle = element.all(by.css('.page-title')).get(0);
    expect(pageTitle).toBeDefined();
    expect(pageTitle.getText()).toEqual('form validation');
  });

});