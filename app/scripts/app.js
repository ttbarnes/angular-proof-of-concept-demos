'use strict';

/**
 * @ngdoc overview
 * @name ajsRouterSeperationApp
 * @description
 * # ajsRouterSeperationApp
 *
 * Main module of the application.
 */
angular
  .module('ajsRouterSeperationApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'routes',
    'checklist-model'
  ])
  //.config(function($stateProvider, $urlRouterProvider) {
  .config(function() {
    
    /*
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/');
    //
    // Now set up the states
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html'
      })
      .state('toc', {
        url: '/toc',
        templateUrl: 'views/toc.html'
      });
      */
  });