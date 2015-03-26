'use strict';

angular.module('proofOfConceptDemos')
  .directive('robotImg', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/directive-templates/robot-img.html'
    };
  });