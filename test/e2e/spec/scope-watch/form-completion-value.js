ddescribe('page: scope-watch - form completion value', function() {

  beforeEach(function() {
    browser.get('http://localhost:9000/#/scope-watch/form-completion-value');
  });

  it('should have a header title defined', function(){ 
    var pageTitle = element.all(by.css('.page-title')).get(0);
    expect(pageTitle).toBeDefined();
    expect(pageTitle.getText()).toEqual('nested ng-repeat');
  });

  var formParent = element.all(by.css('ol'));

  it('should have a form defined', function(){
    expect(formParent).toBeDefined();
  });

});