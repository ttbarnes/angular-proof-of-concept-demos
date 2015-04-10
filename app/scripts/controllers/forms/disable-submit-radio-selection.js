'use strict';

angular.module('proofOfConceptDemos')
  .controller('disableSubmitRadioSelectionCtrl', function ($scope) {

    $scope.people = [
      {
        name: 'John'
      }, 
      {
        name: 'Paul'
      }, 
      {
        name: 'George'
      }, 
      {
        name: 'Ringo'
      }
    ];

  });