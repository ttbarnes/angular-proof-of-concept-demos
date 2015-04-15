'use strict';

describe('Controller: activeCheckboxLabelCtrl', function () {

  // load the controller's module
  beforeEach(module('proofOfConceptDemos'));

  var activeCheckboxLabelCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    activeCheckboxLabelCtrl = $controller('activeCheckboxLabelCtrl', {
      $scope: scope
    });
  }));

  it('should have items defined', function () {
    expect(scope.items).toBeDefined();
  });

  it('should have 3 items defined', function () {
    expect(scope.items.length).toBe(3);
  });

  it('should have correct copy in the item 1', function () {
    expect(scope.items[0].title).toEqual('item 1');
    expect(scope.items[0].description).toEqual('description 1');
  });

  it('should have correct copy in the item 2', function () {
    expect(scope.items[1].title).toEqual('item 2');
    expect(scope.items[1].description).toEqual('description 2');
  });

  it('should have correct copy in the item 3', function () {
    expect(scope.items[2].title).toEqual('item 3');
    expect(scope.items[2].description).toEqual('description 3');
  });

  it('should have a false isChecked variable', function(){
    expect(scope.isChecked).toEqual(false);
  });

});
