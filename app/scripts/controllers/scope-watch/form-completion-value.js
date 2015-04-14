'use strict';

angular.module('proofOfConceptDemos')
  .controller('formCompletionValueCtrl', function ($scope) {

    $scope.userName = '';
    $scope.userAbout = '';
    $scope.userFavouriteColours = '';
    $scope.userHobbies = '';

    $scope.$watch('userName + userAbout + userFavouriteColours + userHobbies + userTerms', function(){

      $scope.completionTotal = 0;

      if($scope.userName.length >= 5) {
        $scope.completionTotal += 20;
      }

      if($scope.userAbout.length >= 10) {
        $scope.completionTotal += 20;
      }

      if($scope.userFavouriteColours.length >= 3) {
        $scope.completionTotal += 20;
      }

      if($scope.userHobbies.length >= 5) {
        $scope.completionTotal += 20;
      }

      if($scope.userTerms) {
        $scope.completionTotal += 20;
      }

    });

  });