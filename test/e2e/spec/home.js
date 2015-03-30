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

    describe('forms', function(){

      var navLinks = element.all(by.css('.nav-forms a'));

      it('should have the correct number of form items', function(){
        expect(navLinks.count()).toBe(3);
      });

      it('should direct to the correct form views', function(){
        navLinks.get(0).click();
        expect(browser.driver.getCurrentUrl()).toEqual('http://localhost:9000/#/forms/form-validation');

        browser.get('http://localhost:9000/#/');
        navLinks.get(1).click();
        expect(browser.driver.getCurrentUrl()).toEqual('http://localhost:9000/#/forms/disable-radio');

        browser.get('http://localhost:9000/#/');
        navLinks.get(2).click();
        expect(browser.driver.getCurrentUrl()).toEqual('http://localhost:9000/#/forms/active-checkbox-label');
      });

    });

    describe('ng-repeat', function(){

      browser.get('http://localhost:9000/#/');
      var navLinks = element.all(by.css('.nav-ng-repeat a'));

      it('should have the correct number of ng-repeat items', function(){
        expect(navLinks.count()).toBe(2);
      });

      it('should direct to the correct ng-repeat views', function(){
        browser.get('http://localhost:9000/#/');
        navLinks.get(0).click();
        expect(browser.driver.getCurrentUrl()).toEqual('http://localhost:9000/#/ng-repeat/ng-repeat-filter-toggle');

        browser.get('http://localhost:9000/#/');
        navLinks.get(1).click();
        expect(browser.driver.getCurrentUrl()).toEqual('http://localhost:9000/#/ng-repeat/nested-ng-repeat');
      });

    });

    describe('services', function(){

      browser.get('http://localhost:9000/#/');
      var navLinks = element.all(by.css('.nav-services a'));

      it('should have the correct number of services items', function(){
        expect(navLinks.count()).toBe(2);
      });

      it('should direct to the correct services views', function(){
        navLinks.get(0).click();
        expect(browser.driver.getCurrentUrl()).toEqual('http://localhost:9000/#/services/simple-service');

        browser.get('http://localhost:9000/#/');
        navLinks.get(1).click();
        expect(browser.driver.getCurrentUrl()).toEqual('http://localhost:9000/#/services/gifbase');
      });

    });

    describe('directives', function(){

      browser.get('http://localhost:9000/#/');
      var navLinks = element.all(by.css('.nav-directives a'));

      it('should have the correct number of directives items', function(){
        expect(navLinks.count()).toBe(2);
      });

      it('should direct to the correct directives views', function(){
        navLinks.get(0).click();
        expect(browser.driver.getCurrentUrl()).toEqual('http://localhost:9000/#/directives/active-hover-directive');

        browser.get('http://localhost:9000/#/');
        navLinks.get(1).click();
        expect(browser.driver.getCurrentUrl()).toEqual('http://localhost:9000/#/directives/random-robot-image');
      });

    });

    describe('ui', function(){

      browser.get('http://localhost:9000/#/');
      var navLinks = element.all(by.css('.nav-ui a'));

      it('should have the correct number of ui items', function(){
        expect(navLinks.count()).toBe(1);
      });

      it('should direct to the correct ui views', function(){
        navLinks.get(0).click();
        expect(browser.driver.getCurrentUrl()).toEqual('http://localhost:9000/#/ui/toggle-menu-with-ng-focus-and-ng-blur');
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