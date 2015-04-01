describe('page: services - gifbase service', function() {

  beforeEach(function() {
    browser.get('http://localhost:9000/#/services/gifbase');
  });

  var hasClass = function (element, cls) {
    return element.getAttribute('class').then(function (classes) {
      return classes.split(' ').indexOf(cls) !== -1;
    });
  };

  it('should have a header title defined', function(){ 
    var pageTitle = element.all(by.css('.page-title')).get(0);
    expect(pageTitle).toBeDefined();
    expect(pageTitle.getText()).toEqual('http call to 3rd party api');
  });

  var items = element.all(by.css('.gifbase-service li'));
  var itemImages = element.all(by.css('.gifbase-service li img'));
  var itemTags = element.all(by.css('.gifbase-service li .tags'));

  it('should have 10 items defined', function(){
    expect(items).toBeDefined();
    expect(items.count()).toEqual(10);
  });

  describe('item specfics', function(){

    it('should have images', function(){
      expect(itemImages).toBeDefined();
      expect(itemImages.count()).toEqual(10);
    });

    it('should have image ng-src defined', function(){
      expect(itemImages.getAttribute('ng-src')).toBeDefined();
    });

    it('should have a tags element', function(){
      expect(itemTags).toBeDefined();
      expect(itemTags.count()).toEqual(10);
    });

  });

  ////////////////////////////////////////////////////////
  ////////
  //note that because this gifbase service could change,
  //we don't test copy/image specifics.
  //we only test that the elements are there.
  ////////
  ////////////////////////////////////////////////////////

});