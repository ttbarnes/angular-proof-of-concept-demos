describe('page: scope-watch - form completion value', function() {

  beforeEach(function() {
    browser.get('http://localhost:9000/#/scope-watch/form-completion-value');
  });

  it('should have a header title defined', function(){ 
    var pageTitle = element.all(by.css('.page-title')).get(0);
    expect(pageTitle).toBeDefined();
    expect(pageTitle.getText()).toEqual('form completion value');
  });

  var formParent = element.all(by.css('ol'));
  var rows = element.all(by.css('.user-form form > .row'));
  var labels = element.all(by.css('.user-form label'));
  var inputs = element.all(by.css('.user-form input'));
  var completionTotal = element(by.css('.completion-info p.total'));
  var completionTotalValue = element(by.css('.completion-info p.total span'));

  describe('initialisation', function(){

    it('should have a form defined', function(){
      expect(formParent).toBeDefined();
    });

    it('should have 5 rows', function(){
      expect(rows.count()).toEqual(5);
    });

    it('should have 5 labels and inputs', function(){
      expect(labels.count()).toEqual(5);
      expect(inputs.count()).toEqual(5);
    });

    it('should have 0% completion text', function(){
      expect(completionTotal.getText()).toEqual('Completion: 0%');
    });

  });

  describe('user name', function(){

    var label = element(by.css('.row.user-name label'));
    var input = element(by.css('.row.user-name input'));

    it('should have label and input defined with correct copy', function(){
      expect(label).toBeDefined();
      expect(input).toBeDefined();
      expect(label.getText()).toEqual('name');
      expect(input.getAttribute('placeholder')).toEqual('Clark Kent');
    });

    it('should have the correct html/angular input attributes', function(){
      expect(label.getAttribute('for')).toEqual('userName');
      expect(input.getAttribute('name')).toEqual('userName');
      expect(input.getAttribute('ng-model')).toEqual('userName');
    });

    it('should add/remove completion total when text is added/removed', function(){
      input.sendKeys('steven');
      expect(completionTotalValue.getText()).toEqual('20%');
      input.sendKeys('asdfasdfasdfasdfadsfasdfasdfasdfasdf');
      expect(completionTotalValue.getText()).toEqual('20%');
      input.clear();
      expect(completionTotalValue.getText()).toEqual('0%');
    });

  });

  describe('user about', function(){

    var label = element(by.css('.row.user-about label'));
    var input = element(by.css('.row.user-about input'));

    it('should have label and input defined with correct copy', function(){
      expect(label).toBeDefined();
      expect(input).toBeDefined();
      expect(label.getText()).toEqual('about');
      expect(input.getAttribute('placeholder')).toEqual('high flyer');
    });

    it('should have the correct html/angular input attributes', function(){
      expect(label.getAttribute('for')).toEqual('userAbout');
      expect(input.getAttribute('name')).toEqual('userAbout');
      expect(input.getAttribute('ng-model')).toEqual('userAbout');
    });

    it('should add/remove completion total when text is added/removed', function(){
      input.sendKeys('making the world a better place');
      expect(completionTotalValue.getText()).toEqual('20%');
      input.sendKeys('asdfasdfasdfasdfadsfasdfasdfasdfasdfasdfasdfasdfasfd');
      expect(completionTotalValue.getText()).toEqual('20%');
      input.clear();
      expect(completionTotalValue.getText()).toEqual('0%');
    });

  });

  describe('user favourite colours', function(){

    var label = element(by.css('.row.user-favourite-colours label'));
    var input = element(by.css('.row.user-favourite-colours input'));

    it('should have label and input defined with correct copy', function(){
      expect(label).toBeDefined();
      expect(input).toBeDefined();
      expect(label.getText()).toEqual('favourite colours');
      expect(input.getAttribute('placeholder')).toEqual('red and blue');
    });

    it('should have the correct html/angular input attributes', function(){
      expect(label.getAttribute('for')).toEqual('userFavouriteColours');
      expect(input.getAttribute('name')).toEqual('userFavouriteColours');
      expect(input.getAttribute('ng-model')).toEqual('userFavouriteColours');
    });

    it('should add/remove completion total when text is added/removed', function(){
      input.sendKeys('red');
      expect(completionTotalValue.getText()).toEqual('20%');
      input.sendKeys('orange, pink, blue');
      expect(completionTotalValue.getText()).toEqual('20%');
      input.clear();
      expect(completionTotalValue.getText()).toEqual('0%');
    });

  });

  describe('user hobbies', function(){

    var label = element(by.css('.row.user-hobbies label'));
    var input = element(by.css('.row.user-hobbies input'));

    it('should have label and input defined with correct copy', function(){
      expect(label).toBeDefined();
      expect(input).toBeDefined();
      expect(label.getText()).toEqual('hobbies');
      expect(input.getAttribute('placeholder')).toEqual('lasers');
    });

    it('should have the correct html/angular input attributes', function(){
      expect(label.getAttribute('for')).toEqual('userHobbies');
      expect(input.getAttribute('name')).toEqual('userHobbies');
      expect(input.getAttribute('ng-model')).toEqual('userHobbies');
    });

    it('should add/remove completion total when text is added/removed', function(){
      input.sendKeys('flying, lasers');
      expect(completionTotalValue.getText()).toEqual('20%');
      input.sendKeys('ironing my cape');
      expect(completionTotalValue.getText()).toEqual('20%');
      input.clear();
      expect(completionTotalValue.getText()).toEqual('0%');
    });

  });

  describe('user terms', function(){

    var label = element(by.css('.row.user-terms label'));
    var input = element(by.css('.row.user-terms input'));

    it('should have label and input defined with correct copy', function(){
      expect(label).toBeDefined();
      expect(input).toBeDefined();
      expect(label.getText()).toEqual('accept terms?');
    });

    it('should have the correct html/angular input attributes', function(){
      expect(label.getAttribute('for')).toEqual('userTerms');
      expect(input.getAttribute('name')).toEqual('userTerms');
      expect(input.getAttribute('ng-model')).toEqual('userTerms');
    });

    it('should add/remove completion total when text is added/removed', function(){
      input.click();
      expect(completionTotalValue.getText()).toEqual('20%');
      input.click();
      expect(completionTotalValue.getText()).toEqual('0%');
    });

  });

  ////////////////////////////////////////////////////////
  //
  //note that because we have quite extensive
  //tests in the controller,
  //we won't be too extensive here
  //
  ////////////////////////////////////////////////////////



});