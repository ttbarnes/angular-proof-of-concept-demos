ddescribe('page: forms - active-checkbox-label', function() {

  beforeEach(function() {
    browser.get('http://localhost:9000/#/forms/active-checkbox-label');
  });

  it('should have a header title defined', function(){ 
    var pageTitle = element.all(by.css('.page-title')).get(0);
    expect(pageTitle).toBeDefined();
    expect(pageTitle.getText()).toEqual('active checkbox label');
  });

  /*
  var hasClass = function (element, cls) {
    return element.getAttribute('class').then(function (classes) {
      return classes.split(' ').indexOf(cls) !== -1;
    });
  };
  */
  
  var listItems = element.all(by.css('.active-checkbox-label-wrap li'));
  //var listItemsInnerDiv = element.all(by.css('.active-checkbox-label-wrap li div'));
  //var listItemsLabel = element.all(by.css('.active-checkbox-label-wrap li label'));

  describe('initialisation', function(){

    it('should have 3 items', function(){
      expect(listItems.count()).toEqual(3);
    });

    /*
    it('should have 3 items with label copy', function(){
      expect(listItemsLabel).toBeDefined();
    });
    */


    /*
    it('should not have a checked class', function(){
      expect(hasClass(element(by.css(listItemsInnerDiv)), 'checked')).toBe(false);
    });
    */

  });



});