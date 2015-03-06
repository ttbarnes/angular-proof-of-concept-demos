'use strict';

angular.module('ajsRouterSeperationApp')
  .controller('displayDataFromServiceCtrl', function ($scope, supermanService) {

    $scope.supermanCharacters = supermanService.all();

  });
