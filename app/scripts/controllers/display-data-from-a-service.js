'use strict';

angular.module('ajsRouterSeperationApp')
  .controller('displayDataFromAServiceCtrl', function ($scope, supermanService) {

    $scope.supermanCharacters = supermanService.all();

  });
