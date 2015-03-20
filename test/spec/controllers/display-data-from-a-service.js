'use strict';

describe('Controller: displayDataFromAServiceCtrl', function () {

  // load the controller's module
  beforeEach(module('proofOfConceptDemos'));

  var displayDataFromAServiceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    displayDataFromAServiceCtrl = $controller('displayDataFromAServiceCtrl', {
      $scope: scope
    });
  }));

  it('should render some characters that come from supermanService', function(){
    expect(scope.supermanCharacters).toBeDefined();
  });

  it('should have correct copy', function(){
    expect(scope.supermanCharacters[0]).toEqual('Clark Kent');
    expect(scope.supermanCharacters[1]).toEqual('Lois Lane');
    expect(scope.supermanCharacters[2]).toEqual('Lex Luthor');
  });


});
