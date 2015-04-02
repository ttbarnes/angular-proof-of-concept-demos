ddescribe('page: ng-repeat - nested ng-repeat', function() {

  beforeEach(function() {
    browser.get('http://localhost:9000/#/ng-repeat/nested-ng-repeat');
  });

  it('should have a header title defined', function(){ 
    var pageTitle = element.all(by.css('.page-title')).get(0);
    expect(pageTitle).toBeDefined();
    expect(pageTitle.getText()).toEqual('nested ng-repeat');
  });



  var listsParent = element.all(by.css('ol'));
  var level2listItems = element.all(by.css('.level-2 ol > li'));
  var level2listItemsNested = element.all(by.css('.level-2 ol > li > ul > li'));

  var level3listItems = element.all(by.css('.level-3 ol > li'));
  var level3listItemsNested = element.all(by.css('.level-3 ol > li > ul > li'));
  var level3listItemsNestedNested = element.all(by.css('.level-3 ol > li > ul > ul > li'));

  it('should have 2 parent lists defined', function(){
    expect(listsParent.count()).toEqual(2);
  });

  describe('2 level list', function(){

    it('should have 3 parent items in the 2 level list', function(){
      expect(level2listItems.count()).toEqual(3);
    });

    it('should have 6 second level items in the 2 level list', function(){
      expect(level2listItemsNested.count()).toEqual(6);
    });

  });

  describe('3 level list', function(){

    it('should have 3 parent items in the 3 level list', function(){
      expect(level3listItems.count()).toEqual(3);
    });

    it('should have 6 second level items in the 3 level list', function(){
      expect(level3listItemsNested.count()).toEqual(6);
    });

    it('should have 3 third level items in the 3 level list', function(){
      expect(level3listItemsNestedNested.count()).toEqual(3);
    });

  });

  ////////////////////////////////////////////////////////
  //
  //note that because the majority of data in this page
  //is generated via the controller, 
  //we won't be too extensive here
  //
  ////////////////////////////////////////////////////////



});