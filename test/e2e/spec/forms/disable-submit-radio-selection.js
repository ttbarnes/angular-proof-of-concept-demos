describe('page: forms - disable-radio', function() {

  beforeEach(function() {
    browser.get('http://localhost:9000/#/forms/disable-radio');
  });

  it('should have a header title defined', function(){ 
    var pageTitle = element.all(by.css('.page-title')).get(0);
    expect(pageTitle).toBeDefined();
    expect(pageTitle.getText()).toEqual('disable submit until certain radio button is selected');
  }); 

  var form = element.all(by.css('form')).get(0);
  var formLabels = element.all(by.css('label'));
  var formRadios = element.all(by.css('label > input'));
  var selectionCounter = element(by.className('selection-counter'));
  var selectionSuccess = element(by.className('selection-success'));
  var formSubmit = element(by.tagName('button'));

  describe('initialisation', function(){

    it('should have a form', function(){ 
      expect(form).toBeDefined();
    });

    it('should have 4 items defined', function(){ 
      expect(formLabels.count()).toEqual(4);
    });

    it('should have 4 labels defined with the correct copy', function(){ 
      expect(formLabels.get(0).getText()).toEqual('John');
      expect(formLabels.get(1).getText()).toEqual('Paul');
      expect(formLabels.get(2).getText()).toEqual('George');
      expect(formLabels.get(3).getText()).toEqual('Ringo');
    });

    it('should have 4 radio inputs with no selection', function(){
      var hasClass = protractor.helperHasClass.hasClass();
      expect(formRadios.count()).toEqual(4);
      expect(hasClass(element(by.name('individual')), 'ngTouched')).toBe(false);
    });

    describe('selection counter element', function(){

      it('should be defined', function(){
        expect(selectionCounter).toBeDefined();
      });

      it('should be hidden', function(){
        expect(selectionCounter.isDisplayed()).toBeFalsy();
      });

    });

    describe('selection success element', function(){

      it('should be defined', function(){
        expect(selectionSuccess).toBeDefined();
      });

      it('should be hidden', function(){
        expect(selectionSuccess.isDisplayed()).toBeFalsy();
      });

    });

    describe('submit button', function(){

      it('should be defined', function(){
        expect(formSubmit).toBeDefined();
      });

      it('should be disabled', function(){
        expect(formSubmit.getAttribute('disabled')).toEqual('true');
        expect(formSubmit.getAttribute('ng-disabled')).toEqual('selected.radio != 1');
      });

    });

  });

  describe('interaction', function(){

    describe('1st radio selection/click', function(){

      it('should have a disabled submit button', function(){
        formRadios.get(0).click();
        expect(formSubmit.getAttribute('disabled')).toEqual('true');
      });

      it('should have the correct index in selection counter', function(){
        formRadios.get(0).click();
        expect(selectionCounter.getText()).toEqual('selected: 0');
      });

    });

    describe('2nd radio selection/click', function(){

      it('should have an enabled submit button', function(){
        formRadios.get(1).click();
        expect(formSubmit.getAttribute('disabled')).toBeNull();
      });

      it('should have the correct index in selection counter', function(){
        formRadios.get(1).click();
        expect(selectionCounter.getText()).toEqual('selected: 1');
      });

      it('should display a success message', function(){
        formRadios.get(1).click();
        expect(selectionSuccess.getText()).toEqual('Paul is selected!');
      });

    });

    describe('3rd radio selection/click', function(){

      it('should have a disabled submit button', function(){
        formRadios.get(2).click();
        expect(formSubmit.getAttribute('disabled')).toEqual('true');
      });

      it('should have the correct index in selection counter', function(){
        formRadios.get(2).click();
        expect(selectionCounter.getText()).toEqual('selected: 2');
      });

    });

    describe('4th radio selection/click', function(){

      it('should have a disabled submit button', function(){
        formRadios.get(3).click();
        expect(formSubmit.getAttribute('disabled')).toEqual('true');
      });

      it('should have the correct index in selection counter', function(){
        formRadios.get(3).click();
        expect(selectionCounter.getText()).toEqual('selected: 3');
      });

    });

  });

});
