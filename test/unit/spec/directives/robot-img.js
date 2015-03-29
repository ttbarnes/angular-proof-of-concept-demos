'use strict';

describe('Directive: robotImg', function () {

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
    template = compile('<input type="text" ng-model="imageParam" placeholder="random characters"/><br/><img id="testing-500" ng-show="imageParam" ng-src="http://robohash.org/{{imageParam}}" alt="robot image" /><br/><small ng-hide="imageParam">no robots yet...</small>')(scope);
    scope.$digest();

  }));

  describe('initialisation', function() {

    it('should have an ng-model', function() {
      expect(template.attr('ng-model')).toEqual('imageParam');
    });

    it('should have the correct placeholder text', function() {
      expect(template.attr('placeholder')).toEqual('random characters');
    });

  });


});