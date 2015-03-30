describe('page: forms - active-checkbox-label', function() {

  beforeEach(function() {
    browser.get('http://localhost:9000/#/forms/active-checkbox-label');
  });

  it('should have a header title defined', function(){ 
    var pageTitle = element.all(by.css('.page-title')).get(0);
    expect(pageTitle).toBeDefined();
    expect(pageTitle.getText()).toEqual('active checkbox label');
  });

});