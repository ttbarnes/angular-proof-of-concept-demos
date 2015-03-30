'use strict';

angular.module('proofOfConceptDemos')
  .directive('robotImg', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/partials/directives/robot-img.html'
    };
  });