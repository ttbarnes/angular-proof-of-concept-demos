describe('page: ui - ng-click show/hide', function() {

  beforeEach(function() {
    browser.get('http://localhost:9000/#/ui/ng-click-show-hide');
  });

  it('should have a header title defined', function(){ 
    var pageTitle = element.all(by.css('.page-title')).get(0);
    expect(pageTitle).toBeDefined();
    expect(pageTitle.getText()).toEqual('ng-click show/hide');
  });

  var button = element(by.css('.ng-click-show-hide-wrapper button'));
  var mainMessage = element(by.css('.ng-click-show-hide-wrapper p'));

  describe('initialisation', function(){

    it('should have the correct ng-click expression', function(){
      expect(button.getAttribute('ng-click')).toEqual('showSomething = !showSomething');
    });

    it('should have the correct ng-show expression', function(){
      expect(mainMessage.getAttribute('ng-show')).toEqual('showSomething');
    });

    it('should have the correct copy in button', function(){
      expect(button.getText()).toEqual('show me something');
    });

    it('should have the main message hidden', function(){
      expect(mainMessage.isDisplayed()).toBeFalsy();
    });

  });

  describe('interaction', function(){

    it('should show and hide main message when clicking', function(){
      button.click();
      expect(mainMessage.isDisplayed()).toBeTruthy();
      button.click();
      expect(mainMessage.isDisplayed()).toBeFalsy();
      button.click();
      expect(mainMessage.isDisplayed()).toBeTruthy();
      button.click();
      expect(mainMessage.isDisplayed()).toBeFalsy();
    });

    it('should have the correct copy in the main message', function(){
      button.click();
      expect(mainMessage.getText()).toEqual('hello! Is it me you\'re looking for?');
    });

  });


});