'use strict';

angular
  .module('proofOfConceptDemos', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'routes'
  ])
  .config(function() {
    
  })
  .run([ '$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;

      $rootScope.$on('$viewContentLoaded', function(){ 
        window.scrollTo(0, 0); 
      });
    }
  ]);