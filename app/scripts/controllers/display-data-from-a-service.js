'use strict';

angular.module('proofOfConceptDemos')
  .controller('displayDataFromAServiceCtrl', function ($scope, simpleService) {

    $scope.supermanCharacters = simpleService.all();

  });
