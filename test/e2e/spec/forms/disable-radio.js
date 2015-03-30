ddescribe('page: forms - radio-disable', function() {

  beforeEach(function() {
    browser.get('http://localhost:9000/#/forms/radio-disable');
  });

  it('should have a header title defined', function(){ 
    var pageTitle = element.all(by.css('.page-title')).get(0);
    expect(pageTitle).toBeDefined();
    expect(pageTitle.getText()).toEqual('disable submit until certain radio button is selected');
  });

});