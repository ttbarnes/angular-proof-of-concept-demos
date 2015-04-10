'use strict';

describe('Controller: disableSubmitRadioSelectionCtrl', function () {

  // load the controller's module
  beforeEach(module('proofOfConceptDemos'));

  var disableSubmitRadioSelectionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    disableSubmitRadioSelectionCtrl = $controller('disableSubmitRadioSelectionCtrl', {
      $scope: scope
    });
  }));

  it('should have people defined', function(){
    expect(scope.people).toBeDefined();
  });

  it('should have 4 items/person defined', function(){
    expect(scope.people.length).toBe(4);
  });

  it('should have correct copy in each item/person', function(){
    expect(scope.people[0].name).toEqual('John');
    expect(scope.people[1].name).toEqual('Paul');
    expect(scope.people[2].name).toEqual('George');
    expect(scope.people[3].name).toEqual('Ringo');
  });

});
