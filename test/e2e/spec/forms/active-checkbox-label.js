describe('page: forms - active-checkbox-label', function() {

  beforeEach(function() {
    browser.get('http://localhost:9000/#/forms/active-checkbox-label');
  });

  it('should have a header title defined', function(){ 
    var pageTitle = element.all(by.css('.page-title')).get(0);
    expect(pageTitle).toBeDefined();
    expect(pageTitle.getText()).toEqual('active checkbox label');
  });

  var hasClass = function (element, cls) {
    return element.getAttribute('class').then(function (classes) {
      return classes.split(' ').indexOf(cls) !== -1;
    });
  };

  var listItems = element.all(by.css('.active-checkbox-label-wrap li'));
  var listItemsInnerDiv = element.all(by.css('.active-checkbox-label-wrap .inner'));
  var listItemsInnerDivChecked = element.all(by.css('.active-checkbox-label-wrap .inner.checked'));
  var listItemsLabel = element.all(by.css('.active-checkbox-label-wrap li label'));
  var listItemsInput = element.all(by.css('.active-checkbox-label-wrap li input'));
  var listItemsDesc = element.all(by.css('.active-checkbox-label-wrap li small'));

  describe('initialisation', function(){

    it('should have 3 items', function(){
      expect(listItems.count()).toEqual(3);
    });

    it('should not have a checked class', function(){
      expect(hasClass(element(by.css('.active-checkbox-label-wrap .inner')), 'checked')).toBe(false);
    });

    it('should have an ng-model with isChecked', function(){
      expect(listItemsInput.get(0).getAttribute('ng-model')).toEqual('isChecked');
      expect(listItemsInput.get(1).getAttribute('ng-model')).toEqual('isChecked');
      expect(listItemsInput.get(2).getAttribute('ng-model')).toEqual('isChecked');
    });

    it('should have label copy', function(){
      expect(listItemsLabel).toBeDefined();
      expect(listItemsLabel.count()).toEqual(3);
      expect(listItemsLabel.getText()).toBeDefined();
    });

    it('should have description copy', function(){
      expect(listItemsDesc).toBeDefined();
      expect(listItemsDesc.count()).toEqual(3);
      expect(listItemsDesc.getText()).toBeDefined();
    });

  });

  describe('interaction - 1st item', function(){

    var label = listItemsLabel.get(0);

    it('should add a checked class on label click', function(){
      label.click();
      expect(hasClass(element.all(by.css('.active-checkbox-label-wrap .inner')).get(0), 'checked')).toBe(true);
    });

    it('should remove a checked class on label click', function(){
      label.click();
      label.click();
      expect(hasClass(element.all(by.css('.active-checkbox-label-wrap .inner')).get(0), 'checked')).toBe(false);
    });

  });

  describe('interaction - 2nd item', function(){

    var label = listItemsLabel.get(1);

    it('should add a checked class on label click', function(){
      label.click();
      expect(hasClass(element.all(by.css('.active-checkbox-label-wrap .inner')).get(1), 'checked')).toBe(true);
    });

    it('should remove a checked class on label click', function(){
      label.click();
      label.click();
      expect(hasClass(element.all(by.css('.active-checkbox-label-wrap .inner')).get(1), 'checked')).toBe(false);
    });

  });

  describe('interaction - 3rd item', function(){

    var label = listItemsLabel.get(2);

    it('should add a checked class on label click', function(){
      label.click();
      expect(hasClass(element.all(by.css('.active-checkbox-label-wrap .inner')).get(2), 'checked')).toBe(true);
    });

    it('should remove a checked class on label click', function(){
      label.click();
      label.click();
      expect(hasClass(element.all(by.css('.active-checkbox-label-wrap .inner')).get(2), 'checked')).toBe(false);
    });

  });

  describe('interaction - all items', function(){

    var label0 = listItemsLabel.get(0);
    var label1 = listItemsLabel.get(1);
    var label2 = listItemsLabel.get(2);

    it('should add checked classes on label click', function(){
      label0.click();
      expect(hasClass(element.all(by.css('.active-checkbox-label-wrap .inner')).get(0), 'checked')).toBe(true);
      label1.click();
      expect(hasClass(element.all(by.css('.active-checkbox-label-wrap .inner')).get(1), 'checked')).toBe(true);
      label2.click();
      expect(hasClass(element.all(by.css('.active-checkbox-label-wrap .inner')).get(2), 'checked')).toBe(true);
    });

    it('should remove checked classes on label click', function(){
      label0.click();
      label1.click();
      label2.click();
      label0.click();
      label1.click();
      label2.click();
      expect(hasClass(element.all(by.css('.active-checkbox-label-wrap .inner')).get(0), 'checked')).toBe(false);
      expect(hasClass(element.all(by.css('.active-checkbox-label-wrap .inner')).get(1), 'checked')).toBe(false);
      expect(hasClass(element.all(by.css('.active-checkbox-label-wrap .inner')).get(2), 'checked')).toBe(false);
    });

  });


});