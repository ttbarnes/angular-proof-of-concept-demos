describe('page: directives - random-robot-image', function() {

  beforeEach(function() {
    browser.get('http://localhost:9000/#/directives/random-robot-image');
  });

  it('should have a header title defined', function(){
    var pageTitle = element.all(by.css('.page-title')).get(0);
    expect(pageTitle).toBeDefined();
    expect(pageTitle.getText()).toEqual('random robot image');
  });

  var wrapperElm = '.robot-img-wrap';
  var wrapper = element(by.css(wrapperElm));
  var introText = element(by.css(wrapperElm + 'p'));
  var robotImgWrapper = element(by.css(wrapperElm + 'div.robot-img'));

  describe('initialisation', function(){

    it('should have some intro text', function(){
      expect(introText.getText()).toEqual('enter some random characters to generate a unique robot:');
    });

    it('should have robot-img div element', function(){
      expect(robotImgWrapper).toBeDefined();
    });

  });

  describe('interaction', function(){


  });

});