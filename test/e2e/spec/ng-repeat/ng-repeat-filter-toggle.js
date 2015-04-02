ddescribe('page: ng-repeat - ng-repeat filter toggle', function() {

  beforeEach(function() {
    browser.get('http://localhost:9000/#/ng-repeat/ng-repeat-filter-toggle');
  });

  it('should have a header title defined', function(){ 
    var pageTitle = element.all(by.css('.page-title')).get(0);
    expect(pageTitle).toBeDefined();
    expect(pageTitle.getText()).toEqual('ng-repeat filter toggle');
  });

  var filterToggleString = element(by.css('.task-filter-toggle.by-string'));
  var filterToggleStringTitle = element(by.css('.task-filter-toggle.by-string small'));
  var filterToggleStringItems = element.all(by.css('.task-filter-toggle.by-string li'));

  var filterToggleNumeric = element(by.css('.task-filter-toggle.by-numeric'));
  var filterToggleNumericTitle = element(by.css('.task-filter-toggle.by-numeric small'));
  var filterToggleNumericItems = element.all(by.css('.task-filter-toggle.by-numeric li'));

  var tasks = element.all(by.css('.task-item'));

  describe('initial view', function(){

    it('should have a toggle by string list defined', function(){
      expect(filterToggleString).toBeDefined();
    });

    it('should have a toggle by string title', function(){
      expect(filterToggleStringTitle).toBeDefined();
      expect(filterToggleStringTitle.getText()).toEqual('Filter by string (task.status):');
    });

    it('should have a toggle by string list with 3 items', function(){
      expect(filterToggleStringItems.count()).toEqual(3);
    });

    it('should have a toggle by mumeric list defined', function(){
      expect(filterToggleNumeric).toBeDefined();
    });

    it('should have a toggle by numeric title', function(){
      expect(filterToggleNumericTitle).toBeDefined();
      expect(filterToggleNumericTitle.getText()).toEqual('Filter by numeric (task.specialId):');
    });

    it('should have a toggle by numeric list with 3 items', function(){
      expect(filterToggleNumericItems.count()).toEqual(3);
    });

    describe('2 initial tasks', function(){

      it('should be defined', function(){
        expect(tasks).toBeDefined();
        expect(tasks.count()).toEqual(2);
      });

      it('should have the correct copy in the 1st item', function(){
        element.all(by.repeater('task in tasks')).then(function(tasks) {
          var heading = tasks[0].element(by.css('h4'));
          var status = tasks[0].element(by.css('p'));
          expect(heading.getText()).toEqual('do some washing');
          expect(status.getText()).toEqual('todo');
        });
      });

      it('should have the correct copy in the 2nd item', function(){
        element.all(by.repeater('task in tasks')).then(function(tasks) {
          var heading = tasks[1].element(by.css('h4'));
          var status = tasks[1].element(by.css('p'));
          expect(heading.getText()).toEqual('call phone company');
          expect(status.getText()).toEqual('todo');
        });
      });

    });

  });

  describe('interaction: filter by string - in progess', function(){

    beforeEach(function() {
      filterToggleStringItems.get(1).click();
    });

    it('should display new filtered items', function(){
      expect(tasks).toBeDefined();
      expect(tasks.count()).toEqual(2);
    });

    it('should have the correct copy in 1st task', function(){
      element.all(by.repeater('task in tasks')).then(function(tasks) {
        var heading = tasks[0].element(by.css('h4'));
        var status = tasks[0].element(by.css('p'));
        expect(heading.getText()).toEqual('get some tea bags');
        expect(status.getText()).toEqual('in-progress');
      });
    });

    it('should have the correct copy in new filter items - 2nd item', function(){
      element.all(by.repeater('task in tasks')).then(function(tasks) {
        var heading = tasks[1].element(by.css('h4'));
        var status = tasks[1].element(by.css('p'));
        expect(heading.getText()).toEqual('write some code');
        expect(status.getText()).toEqual('in-progress');
      });
    });

  });

  describe('interaction: filter by string - complete', function(){

    beforeEach(function() {
      filterToggleStringItems.get(2).click();
    });

    it('should display new filtered items', function(){
      expect(tasks).toBeDefined();
      expect(tasks.count()).toEqual(1);
    });

    it('should have the correct copy in 1st task', function(){
      element.all(by.repeater('task in tasks')).then(function(tasks) {
        var heading = tasks[0].element(by.css('h4'));
        var status = tasks[0].element(by.css('p'));
        expect(heading.getText()).toEqual('make some tea');
        expect(status.getText()).toEqual('complete');
      });
    });

  });



});