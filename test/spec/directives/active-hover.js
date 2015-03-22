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
    template = compile('<div active-hover id="test-element-1"> </div>' + '<div active-hover id="test-element-2"> </div>')(scope);
    scope.$digest();
  }));

  describe('initialisation', function() {
    it('should not have classes by default', function() {
      expect(scope).not.toHaveClass('active-hover');
      expect(scope).not.toHaveClass('inactive-hover');
    });
  });

  describe('events', function() {
    it('should add a class on mouseover', function() {
      //$('#test-element-1').trigger('mouseover');
      //expect($('#test-element-1')).toHaveClass('active-hover');

    });
  });


});