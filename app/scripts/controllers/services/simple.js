'use strict';

angular.module('proofOfConceptDemos')
  .controller('simpleServiceCtrl', function ($scope, simpleService) {

    $scope.supermanCharacters = simpleService.all();

  });
