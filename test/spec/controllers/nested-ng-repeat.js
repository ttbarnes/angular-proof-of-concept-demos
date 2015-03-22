'use strict';

describe('Controller: nestedNgRepeatCtrl', function () {

  // load the controller's module
  beforeEach(module('proofOfConceptDemos'));

  var nestedNgRepeatCtrl,
    scope;

  // Initialize the controller and a mock scopea
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    nestedNgRepeatCtrl = $controller('nestedNgRepeatCtrl', {
      $scope: scope
    });
  }));

  describe('fruits object', function(){
    it('should have an object', function(){
      expect(scope.fruits.length).toEqual(3);
    });
    it('should have 3 fruits defined', function(){
      expect(scope.fruits.length).toEqual(3);
    });
  });

  describe('fruits object - apple', function(){

    it('should have the correct name', function(){
      expect(scope.fruits[0].name).toEqual('apple');
    });

    it('should have an info property defined', function(){
      expect(scope.fruits[0].info).toBeDefined();
    });

    it('should have info property - color', function(){
      expect(scope.fruits[0].info[0].color).toBeDefined();
      expect(scope.fruits[0].info[0].color).toEqual('various');
    });

    it('should have info property - size', function(){
      expect(scope.fruits[0].info[0].size).toBeDefined();
      expect(scope.fruits[0].info[0].size).toEqual('small');
    });

    it('should have additionalInfo property defined', function(){
      expect(scope.fruits[0].info[0].additionalInfo).toBeDefined();
    });

    it('should have additionalInfo property - purchase', function(){
      expect(scope.fruits[0].info[0].additionalInfo[0].purchase).toBeDefined();
      expect(scope.fruits[0].info[0].additionalInfo[0].purchase).toEqual('singular or in bunches');
    });

  });

  describe('fruits object - banana', function(){

    it('should have the correct name', function(){
      expect(scope.fruits[1].name).toEqual('banana');
    });

    it('should have an info property defined', function(){
      expect(scope.fruits[1].info).toBeDefined();
    });

    it('should have info property - color', function(){
      expect(scope.fruits[1].info[0].color).toBeDefined();
      expect(scope.fruits[1].info[0].color).toEqual('yellow or green');
    });

    it('should have info property - size', function(){
      expect(scope.fruits[1].info[0].size).toBeDefined();
      expect(scope.fruits[1].info[0].size).toEqual('small-medium');
    });

    it('should have additionalInfo property defined', function(){
      expect(scope.fruits[1].info[0].additionalInfo).toBeDefined();
    });

    it('should have additionalInfo property - purchase', function(){
      expect(scope.fruits[1].info[0].additionalInfo[0].purchase).toBeDefined();
      expect(scope.fruits[1].info[0].additionalInfo[0].purchase).toEqual('singular or in bunches');
    });

  });

  describe('fruits object - pineapple', function(){

    it('should have the correct name', function(){
      expect(scope.fruits[2].name).toEqual('pineapple');
    });

    it('should have an info property defined', function(){
      expect(scope.fruits[2].info).toBeDefined();
    });

    it('should have info property - color', function(){
      expect(scope.fruits[2].info[0].color).toBeDefined();
      expect(scope.fruits[2].info[0].color).toEqual('yellow and green');
    });

    it('should have info property - size', function(){
      expect(scope.fruits[2].info[0].size).toBeDefined();
      expect(scope.fruits[2].info[0].size).toEqual('medium');
    });

    it('should have additionalInfo property defined', function(){
      expect(scope.fruits[2].info[0].additionalInfo).toBeDefined();
    });

    it('should have additionalInfo property - purchase', function(){
      expect(scope.fruits[2].info[0].additionalInfo[0].purchase).toBeDefined();
      expect(scope.fruits[2].info[0].additionalInfo[0].purchase).toEqual('singular');
    });

  });

});
