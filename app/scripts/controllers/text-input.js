'use strict';

/**
 * @ngdoc function
 * @name ajsRouterSeperationApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ajsRouterSeperationApp
 */
angular.module('ajsRouterSeperationApp')
  .controller('textInputCtrl', function ($scope, textInputDataService) {

    $scope.thingy = textInputDataService.superAmazingPlaceholderText;

  });
