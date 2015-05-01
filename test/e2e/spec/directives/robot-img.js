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
  var roboHashUrl = 'http://robohash.org/';
  var wrapper = element(by.css(wrapperElm));
  var textIntro = element(by.css(wrapperElm + 'p'));
  var input = element(by.css(robotImgWrapper + 'input'));
  var img = element(by.css(robotImgWrapper + 'img'));
  var textNoRobots = element(by.css(robotImgWrapper + 'small'));

  describe('initialisation', function(){

    it('should have some intro text', function(){
      expect(textIntro.getText()).toEqual('enter some random characters to generate a unique robot:');
    });

    it('should have a div', function(){
      expect(robotImgWrapper).toBeDefined();
    });

    describe('text input', function(){

      it('should have a text input defined', function(){
        expect(input).toBeDefined();
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

      it('should not be displayed', function(){
        expect(img.isDisplayed()).toBeFalsy();
      });

      it('should have correct ng-show value', function(){
        expect(img.getAttribute('ng-show')).toEqual('imageParam');
      });

      it('should have correct alt copy', function(){
        expect(img.getAttribute('alt')).toEqual('robot image');
      });

    });

    describe('no robots text', function(){

      it('should be defined and visible', function(){
        expect(textNoRobots).toBeDefined();
        expect(textNoRobots.isDisplayed()).toBeTruthy();
      });

      it('should have the correct ng-hide value', function(){
        expect(textNoRobots.getAttribute('ng-hide')).toEqual('imageParam');
      });

      it('should have the correct copy', function(){
        expect(textNoRobots.getText()).toEqual('no robots yet...');
      });

    });

  });

  describe('interaction', function(){

    it('should add input ng-model to image ng-src and show the image', function(){
      input.sendKeys('ab');
      browser.sleep(500);
      browser.waitForAngular();
      expect(img.getAttribute('ng-src')).toEqual(roboHashUrl + 'ab');
      expect(img.isPresent()).toBe(true);
    });

    it('should add new image params if input is modified', function(){
      input.sendKeys('ab');
      expect(img.getAttribute('ng-src')).toEqual(roboHashUrl + 'ab');
      expect(img.isPresent()).toBe(true);
      input.sendKeys('cd');
      expect(img.getAttribute('ng-src')).toEqual(roboHashUrl + 'abcd');
      expect(img.isPresent()).toBe(true);
    });

    it('should add new image params if input is modified many times with large amounts of characters', function(){
      input.sendKeys('ab');
      expect(img.getAttribute('ng-src')).toEqual(roboHashUrl + 'ab');
      expect(img.isPresent()).toBeTruthy();
      input.sendKeys('cd');
      expect(img.isPresent()).toBeTruthy();
      input.sendKeys('efg');
      expect(img.isPresent()).toBeTruthy();
      input.sendKeys('hijk');
      expect(img.isPresent()).toBeTruthy();
      input.sendKeys('lmnop');
      expect(img.isPresent()).toBeTruthy();
      expect(img.getAttribute('ng-src')).toEqual(roboHashUrl + 'abcdefghijklmnop');
      input.sendKeys('12345');
      expect(img.getAttribute('ng-src')).toEqual(roboHashUrl + 'abcdefghijklmnop12345');
      input.sendKeys('!@£$%^&*()');
      expect(img.getAttribute('ng-src')).toEqual(roboHashUrl + 'abcdefghijklmnop12345!@£$%^&*()');
      expect(img.isPresent()).toBeTruthy();
      input.sendKeys('asdf7890');
      expect(img.getAttribute('ng-src')).toEqual(roboHashUrl + 'abcdefghijklmnop12345!@£$%^&*()asdf7890');
      expect(img.isPresent()).toBeTruthy();
    });

    it('should remove image params and hide the image if input is added and then removed', function(){
      input.sendKeys('ab');
      browser.sleep(500);
      browser.waitForAngular();
      expect(img.getAttribute('ng-src')).toEqual(roboHashUrl + 'ab');
      input.sendKeys('cd');
      browser.sleep(500);
      browser.waitForAngular();
      expect(img.getAttribute('ng-src')).toEqual(roboHashUrl + 'abcd');
      input.clear();
      browser.sleep(500);
      browser.waitForAngular();
      expect(img.isDisplayed()).toBeFalsy();
    });

    it('should remove the no-robots-text when an image is present', function(){
      input.sendKeys('ab');
      browser.sleep(500);
      browser.waitForAngular();
      expect(textNoRobots.isDisplayed()).toBeFalsy();
    });

  });

});