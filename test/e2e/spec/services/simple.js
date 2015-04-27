describe('page: services - simple service', function() {

  beforeEach(function() {
    browser.get('http://localhost:9000/#/services/simple');
  });

  it('should have a header title defined', function(){ 
    var pageTitle = element.all(by.css('.page-title')).get(0);
    expect(pageTitle).toBeDefined();
    expect(pageTitle.getText()).toEqual('simple service');
  });

  var items = element.all(by.css('.simple li'));

  it('should have 3 items defined', function(){
    expect(items).toBeDefined();
    expect(items.count()).toEqual(3);
  });

  describe('item specfics', function(){

    it('should have the correct copy in the 1st item', function(){
      expect((items).get(0).getText()).toEqual('Clark Kent');
    });

    it('should have the correct copy in the 2nd item', function(){
      expect((items).get(1).getText()).toEqual('Lois Lane');
    });

    it('should have the correct copy in the 3rd item', function(){
      expect((items).get(2).getText()).toEqual('Lex Luthor');
    });

  });

});