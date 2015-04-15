'use strict';

describe('Controller: formCompletionValueCtrl', function () {

  // load the controller's module
  beforeEach(module('proofOfConceptDemos'));

  var formCompletionValueCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    formCompletionValueCtrl = $controller('formCompletionValueCtrl', {
      $scope: scope
    });
  }));

  it('should have empty default values', function () {
    expect(scope.userName).toEqual('');
    expect(scope.userAbout).toEqual('');
    expect(scope.userFavouriteColours).toEqual('');
    expect(scope.userHobbies).toEqual('');
  });

  describe('scope watch completionTotal - addition', function(){

    it('should add completion total if userName length is above or equal to 5', function(){
      scope.userName = 'steve';
      scope.$digest();
      expect(scope.completionTotal).toEqual(20);
    });

    it('should add completion total if userAbout length is above or equal to 10', function(){
      scope.userAbout = 'I do all the things';
      scope.$digest();
      expect(scope.completionTotal).toEqual(20);
    });

    it('should add completion total if userFavouriteColours length is above or equal to 3', function(){
      scope.userFavouriteColours = 'red';
      scope.$digest();
      expect(scope.completionTotal).toEqual(20);
    });

    it('should add completion total if userHobbies length is above or equal to 5', function(){
      scope.userHobbies = 'skiing';
      scope.$digest();
      expect(scope.completionTotal).toEqual(20);
    });

    it('should add completion total if userTerms is true', function(){
      scope.userTerms = true;
      scope.$digest();
      expect(scope.completionTotal).toEqual(20);
    });

  });

  describe('scope watch completionTotal - subtraction', function(){

    it('should remove completion total if userName is added and removed', function(){
      scope.userName = 'steve';
      scope.$digest();
      scope.userName = '';
      scope.$digest();
      expect(scope.completionTotal).toEqual(0);
    });

    it('should remove completion total if userAbout is added and removed', function(){
      scope.userAbout = 'I do all the things';
      scope.$digest();
      scope.userAbout = '';
      scope.$digest();
      expect(scope.completionTotal).toEqual(0);
    });

    it('should remove completion total if userFavouriteColours is added and removed', function(){
      scope.userFavouriteColours = 'red';
      scope.$digest();
      scope.userFavouriteColours = '';
      scope.$digest();
      expect(scope.completionTotal).toEqual(0);
    });

    it('should remove completion total if userHobbies is added and removed', function(){
      scope.userHobbies = 'skiing';
      scope.$digest();
      scope.userHobbies = '';
      scope.$digest();
      expect(scope.completionTotal).toEqual(0);
    });

    it('should remove completion total if userTerms is checked and unchecked', function(){
      scope.userTerms = true;
      scope.$digest();
      scope.userTerms = false;
      scope.$digest();
      expect(scope.completionTotal).toEqual(0);
    });

  });

  describe('scope watch completionTotal - all items', function(){

    it('should calculate correctly when all items are added', function(){
      scope.userName = 'steve';
      scope.$digest();
      expect(scope.completionTotal).toEqual(20);

      scope.userAbout = 'I do all the things';
      scope.$digest();
      expect(scope.completionTotal).toEqual(40);

      scope.userFavouriteColours = 'red';
      scope.$digest();
      expect(scope.completionTotal).toEqual(60);

      scope.userHobbies = 'skiing';
      scope.$digest();
      expect(scope.completionTotal).toEqual(80);

      scope.userTerms = true;
      scope.$digest();
      expect(scope.completionTotal).toEqual(100);
    });

    it('should calculate correctly if items are added and removed', function(){
      scope.userName = 'steve';
      scope.userAbout = 'I do all the things';
      scope.$digest();
      expect(scope.completionTotal).toEqual(40);

      scope.userName = 'st';
      scope.$digest();
      expect(scope.completionTotal).toEqual(20);

      scope.userFavouriteColours = 'red';
      scope.$digest();
      expect(scope.completionTotal).toEqual(40);

      scope.userFavouriteColours = 're';
      scope.$digest();
      expect(scope.completionTotal).toEqual(20);

      scope.userHobbies = 'skiing';
      scope.$digest();
      expect(scope.completionTotal).toEqual(40);
      scope.userHobbies = 'ski';
      scope.$digest();
      expect(scope.completionTotal).toEqual(20);

      scope.userTerms = true;
      scope.$digest();
      expect(scope.completionTotal).toEqual(40);
      scope.userTerms = false;
      scope.$digest();
      expect(scope.completionTotal).toEqual(20);
    });

  });

});
