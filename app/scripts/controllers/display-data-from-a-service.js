'use strict';

angular.module('proofOfConceptDemos')
  .controller('displayDataFromAServiceCtrl', function ($scope, supermanService) {

    $scope.supermanCharacters = supermanService.all();

  });
