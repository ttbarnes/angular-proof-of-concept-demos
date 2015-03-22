'use strict';

angular.module('proofOfConceptDemos')
  .controller('nestedNgRepeatCtrl', function ($scope) {

    $scope.fruits = [
      {
        name: 'apple'
      },
      {
        name: 'banana'
      },
      {
        name: 'pineapple'
      }

    ];

  });