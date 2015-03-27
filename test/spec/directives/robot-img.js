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
    template = compile('<div class="robot-img"><input type="text" ng-model="imageParam" placeholder="random characters"/><br/><img ng-show="imageParam" ng-src="http://robohash.org/{{imageParam}}" alt="robot image" /><br/><small ng-hide="imageParam">no robots yet...</small></div>')(scope);
    scope.$digest();
  }));


});