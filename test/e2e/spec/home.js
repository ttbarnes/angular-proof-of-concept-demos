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

    it('should have 6 parent lists/list items', function(){
      var parentListItems = element.all(protractor.By.css('.home-nav > li'));
      var parentLists = element.all(protractor.By.css('.home-nav > ol'));
      expect(parentListItems.count()).toEqual(6);
      expect(parentLists.count()).toEqual(6);
    });

    it('should have the correct amount of list items ', function(){
      var elements = element.all(protractor.By.css('.home-nav li'));
      expect(elements.count()).toEqual(18);
    });

    describe('forms', function(){

      var navLinks = element.all(by.css('.nav-forms a'));

      it('should have the correct number of form items', function(){
        expect(navLinks.count()).toBe(3);
      });

      it('should direct to the correct form views', function(){
        navLinks.get(0).click();
        expect(browser.driver.getCurrentUrl()).toEqual('http://localhost:9000/#/forms/form-validation');
      });

      it('should direct to the correct form views', function(){
        navLinks.get(1).click();
        expect(browser.driver.getCurrentUrl()).toEqual('http://localhost:9000/#/forms/disable-radio');
      });

       it('should direct to the correct form views', function(){
        navLinks.get(2).click();
        expect(browser.driver.getCurrentUrl()).toEqual('http://localhost:9000/#/forms/active-checkbox-label');
      });

    });

    describe('ng-repeat', function(){

      var navLinks = element.all(by.css('.nav-ng-repeat a'));

      it('should have the correct number of ng-repeat items', function(){
        expect(navLinks.count()).toBe(2);
      });

      it('should direct to the correct ng-repeat views', function(){
        navLinks.get(0).click();
        expect(browser.driver.getCurrentUrl()).toEqual('http://localhost:9000/#/ng-repeat/ng-repeat-filter-toggle');
      });

      it('should direct to the correct ng-repeat views', function(){
        navLinks.get(1).click();
        expect(browser.driver.getCurrentUrl()).toEqual('http://localhost:9000/#/ng-repeat/nested-ng-repeat');
      });

    });

    describe('services', function(){

      var navLinks = element.all(by.css('.nav-services a'));

      it('should have the correct number of services items', function(){
        expect(navLinks.count()).toBe(2);
      });

      it('should direct to the correct services views', function(){
        navLinks.get(0).click();
        expect(browser.driver.getCurrentUrl()).toEqual('http://localhost:9000/#/services/simple-service');
      });

      it('should direct to the correct services views', function(){
        navLinks.get(1).click();
        expect(browser.driver.getCurrentUrl()).toEqual('http://localhost:9000/#/services/gifbase');
      });

    });

    describe('directives', function(){

      var navLinks = element.all(by.css('.nav-directives a'));

      it('should have the correct number of directives items', function(){
        expect(navLinks.count()).toBe(2);
      });

      it('should direct to the correct directives views - item 1', function(){
        browser.get('http://localhost:9000/#/');
        navLinks.get(0).click();
        expect(browser.driver.getCurrentUrl()).toEqual('http://localhost:9000/#/directives/active-hover-directive');
      });

      it('should direct to the correct directives views - item 2', function(){
        browser.get('http://localhost:9000/#/');
        navLinks.get(1).click();
        expect(browser.driver.getCurrentUrl()).toEqual('http://localhost:9000/#/directives/random-robot-image');
      });

    });

    describe('scope watch', function(){

      var navLinks = element.all(by.css('.nav-scope-watch a'));

      it('should have the correct number of ui items', function(){
        expect(navLinks.count()).toBe(1);
      });

      it('should direct to the correct scope watch views', function(){
        navLinks.get(0).click();
        expect(browser.driver.getCurrentUrl()).toEqual('http://localhost:9000/#/scope-watch/form-completion-value');
      });

    });

    describe('ui', function(){

      var navLinks = element.all(by.css('.nav-ui a'));

      it('should have the correct number of ui items', function(){
        expect(navLinks.count()).toBe(2);
      });

      it('should direct to the correct ui views - item 1', function(){
        navLinks.get(0).click();
        expect(browser.driver.getCurrentUrl()).toEqual('http://localhost:9000/#/ui/dropdown-menu-with-ng-focus-and-ng-blur');
      });

      it('should direct to the correct ui views - item 2', function(){
        navLinks.get(1).click();
        expect(browser.driver.getCurrentUrl()).toEqual('http://localhost:9000/#/ui/ng-click-show-hide');
      });

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