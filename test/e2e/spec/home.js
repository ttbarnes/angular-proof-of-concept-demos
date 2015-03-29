describe('page: home', function() {

  beforeEach(function() {
    browser.get('http://localhost:9000/#/');
  });

  describe('header', function(){

    it('should be defined', function(){ 
      expect(element(protractor.By.css('header')).isPresent()).toBe(true);
    });

    it('should have a main app title', function(){
      var appTitle = element(by.id('app-title'));
      expect(appTitle.isPresent()).toBe(true);
      expect(appTitle.getText()).toEqual('Angular proof of concept demos');
    });

  });

  describe('navigation', function(){

    it('should be defined', function(){
      expect(element(protractor.By.css('.home-nav')).isPresent()).toBe(true);
    });

    it('should have 5 parent lists/list items', function(){
      var parentListItems = element.all(protractor.By.css('.home-nav > li'));
      var parentLists = element.all(protractor.By.css('.home-nav > ol'));
      expect(parentListItems.count()).toEqual(5);
      expect(parentLists.count()).toEqual(5);
    });

    it('should have a total of 15 list items ', function(){
      var elements = element.all(protractor.By.css('.home-nav li'));
      expect(elements.count()).toEqual(15);
    });

  });

  describe('footer', function(){

    it('should be defined', function(){ 
      expect(element(protractor.By.css('footer')).isPresent()).toBe(true);
    });

    it('should have a first child with a link to github project', function(){ 
      var footerGithub = element.all(by.css('footer li:first-child')).get(0);
      var footerGithubLink = element.all(by.css('footer li:first-child a')).get(0);
      expect(footerGithub.getText()).toEqual('github.com/ttbarnes/angular-proof-of-concept-demos');
      expect(footerGithubLink.getAttribute('href')).toEqual('http://github.com/ttbarnes/angular-proof-of-concept-demos');
      expect(footerGithubLink.getAttribute('target')).toEqual('_blank');
    });

    it('should have a first child with a link to portfolio', function(){ 
      var footerPortfolio = element.all(by.css('footer li:last-child')).get(0);
      var footerPortfolioLink = element.all(by.css('footer li:last-child a')).get(0);
      expect(footerPortfolio.getText()).toEqual('tonybarnes.me');
      expect(footerPortfolioLink.getAttribute('href')).toEqual('http://tonybarnes.me/');
      expect(footerPortfolioLink.getAttribute('target')).toEqual('_blank');
    });

  });


});