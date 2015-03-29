'use strict';

describe('Directive: activeHover', function () {

  var compile, 
      httpBackend, 
      rootScope, 
      scope, 
      template;

  beforeEach(module('proofOfConceptDemos'));

  beforeEach(inject(function($injector) {
    rootScope = $injector.get('$rootScope');
    compile = $injector.get('$compile');
    
    //inject $httpBackend service
    httpBackend = $injector.get('$httpBackend');
    
    //mock request to html
    httpBackend.whenGET('my.html').respond('gotIt');
    scope = rootScope.$new();
    template = compile('<div active-hover></div>' + '<div active-hover></div>')(scope);
    scope.$digest();
  }));

  describe('initialisation', function() {
    it('should not have classes by default', function() {
      expect(scope).not.toHaveClass('active-hover');
      expect(scope).not.toHaveClass('inactive-hover');
    });
  });

  describe('events', function() {
    it('should add an active class on mouseover', function() {
      template.trigger('mouseover');
      expect(template).toHaveClass('active-hover');
      expect(template).not.toHaveClass('inactive-hover');
    });

    it('should remove active class on mouseout', function() {
      template.trigger('mouseover');
      expect(template).toHaveClass('active-hover');
      template.trigger('mouseout');
      expect(template).not.toHaveClass('active-hover');
    });

    it('should only add an active class to one element on mouseover', function() {
      template.eq(1).trigger('mouseover');
      expect(template.eq(1)).toHaveClass('active-hover');
      expect(template.eq(0)).not.toHaveClass('active-hover');
    });

  });


});