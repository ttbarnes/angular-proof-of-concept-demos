ddescribe('page: ng-repeat - ng-repeat filter toggle', function() {

  beforeEach(function() {
    browser.get('http://localhost:9000/#/ng-repeat/ng-repeat-filter-toggle');
  });

  it('should have a header title defined', function(){ 
    var pageTitle = element.all(by.css('.page-title')).get(0);
    expect(pageTitle).toBeDefined();
    expect(pageTitle.getText()).toEqual('ng-repeat filter toggle');
  });

  var filterToggleString = element.all(by.css('.task-filter-toggle.by-string li'));
  var filterToggleNumeric = element.all(by.css('.task-filter-toggle.by-numeric li'));
  var tasks = element.all(by.css('.task-item'));

  describe('initial view', function(){
    it('should have 2 tasks defined', function(){
      expect(tasks).toBeDefined();
      expect(tasks.count()).toEqual(2);
    });

  });

});