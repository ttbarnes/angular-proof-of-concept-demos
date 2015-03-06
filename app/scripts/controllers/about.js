'use strict';

/**
 * @ngdoc function
 * @name ajsRouterSeperationApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ajsRouterSeperationApp
 */
angular.module('ajsRouterSeperationApp')
  .controller('AboutCtrl', function ($scope, supermanService) {

    $scope.supermanCharacters = supermanService.all();

  });
