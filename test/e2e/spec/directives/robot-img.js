describe('page: directives - random-robot-image', function() {

  beforeEach(function() {
    browser.get('http://localhost:9000/#/directives/random-robot-image');
  });

  it('should have a header title defined', function(){
    var pageTitle = element.all(by.css('.page-title')).get(0);
    expect(pageTitle).toBeDefined();
    expect(pageTitle.getText()).toEqual('random robot image');
  });

  var wrapperElm = '.robot-img-wrap ';
  var robotImgWrapper = 'div.robot-img ';
  var wrapper = element(by.css(wrapperElm));
  var introText = element(by.css(wrapperElm + 'p'));
  var textInput = element(by.css(robotImgWrapper + 'input'));
  var img = element(by.css(robotImgWrapper + 'img'));
  var noRobotsText = element(by.css(robotImgWrapper + 'small'));

  describe('initialisation', function(){

    it('should have some intro text', function(){
      expect(introText.getText()).toEqual('enter some random characters to generate a unique robot:');
    });

    it('should have a div', function(){
      expect(robotImgWrapper).toBeDefined();
    });

    describe('text input', function(){

      it('should have a text input defined', function(){
        expect(textInput).toBeDefined();
      });

      it('should have a text input with the correct attributes', function(){
        expect(element(by.css('.robot-img-wrap input')).getAttribute('type')).toEqual('text');
        expect(element(by.css('.robot-img-wrap input')).getAttribute('ng-model')).toEqual('imageParam');
        expect(element(by.css('.robot-img-wrap input')).getAttribute('placeholder')).toEqual('random characters');
      });

    });

    describe('image', function(){

      it('should be defined', function(){
        expect(img).toBeDefined();
      });

      it('should have a robohash url and empty param', function(){
        expect(img.getAttribute('ng-src')).toEqual('http://robohash.org/');
      });

      it('should have correct alt copy', function(){
        expect(img.getAttribute('alt')).toEqual('robot image');
      });

    });

    describe('no robots text', function(){

      it('should be defined and visible', function(){
        expect(noRobotsText).toBeDefined();
        expect(noRobotsText.isDisplayed()).toBeTruthy();
      });

      it('should have the correct copy', function(){
        expect(noRobotsText.getText()).toEqual('no robots yet...');
      });

    });

  });

  describe('interaction', function(){


  });

});