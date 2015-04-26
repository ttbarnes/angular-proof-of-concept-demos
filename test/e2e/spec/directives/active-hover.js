describe('page: directives - active-hover', function() {

  beforeEach(function() {
    browser.get('http://localhost:9000/#/directives/active-hover');
  });

  it('should have a header title defined', function(){ 
    var pageTitle = element.all(by.css('.page-title')).get(0);
    expect(pageTitle).toBeDefined();
    expect(pageTitle.getText()).toEqual('active hover');
  });

  var hasClass = function (element, cls) {
    return element.getAttribute('class').then(function (classes) {
      return classes.split(' ').indexOf(cls) !== -1;
    });
  };

  var items = element.all(by.css('.active-hover-items div'));
  var item1 = items.get(0);
  var item2 = items.get(1);
  var item3 = items.get(2);
  var item4 = items.get(3);

  describe('initialisation', function(){

    it('should have 4 items', function(){
      expect(items.count()).toEqual(4);
    });

    it('should have 4 items with active-hover attribute', function(){
      expect(item1.getAttribute('active-hover')).toBeDefined();
      expect(item2.getAttribute('active-hover')).toBeDefined();
      expect(item3.getAttribute('active-hover')).toBeDefined();
      expect(item4.getAttribute('active-hover')).toBeDefined();
    });

    it('should have 4 items with no class', function(){
      expect(hasClass(item1, 'active-hover')).toBe(false);
      expect(hasClass(item1, 'inactive-hover')).toBe(false);
      expect(hasClass(item2, 'active-hover')).toBe(false);
      expect(hasClass(item2, 'inactive-hover')).toBe(false);
      expect(hasClass(item3, 'active-hover')).toBe(false);
      expect(hasClass(item3, 'inactive-hover')).toBe(false);
      expect(hasClass(item4, 'active-hover')).toBe(false);
      expect(hasClass(item4, 'inactive-hover')).toBe(false);
    });
    
  });

  describe('interaction', function(){

    it('should add correct active/inactive classes on mouse over', function(){
      browser.actions().mouseMove(item1).perform();
      expect(item1.getAttribute('class')).toEqual('active-hover');
      expect(item2.getAttribute('class')).toEqual('inactive-hover');
    });

    it('should add correct active/inactive classes on multiple mouse overs', function(){
      browser.actions().mouseMove(item2).perform();
      expect(item2.getAttribute('class')).toEqual('active-hover');
      expect(item1.getAttribute('class')).toEqual('inactive-hover');
      expect(item3.getAttribute('class')).toEqual('inactive-hover');
      expect(item4.getAttribute('class')).toEqual('inactive-hover');
      browser.actions().mouseMove(item3).perform();
      expect(item3.getAttribute('class')).toEqual('active-hover');
      expect(item1.getAttribute('class')).toEqual('inactive-hover');
      expect(item2.getAttribute('class')).toEqual('inactive-hover');
      expect(item4.getAttribute('class')).toEqual('inactive-hover');
    });

  });

});