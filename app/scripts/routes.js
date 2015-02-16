'use strict';

angular.module('routes', ['ui.router'])
  /*
  $stateProvider.state('Modal', {
    views:{
      "modal": {
        templateUrl: "modal.html"
      }
    },
    abstract: true
  });
  */

  .constant('states', {
    home: {
      name: 'home'
    },
    about: {
      name: 'about'
    },
    toc: {
      name: 'toc'
    },
    radioDisable: {
      name: 'radioDisable'
    }
  })

  .config(function($stateProvider, $urlRouterProvider, states) {

   // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/');
    //
    // Now set up the states
    $stateProvider
      //.state('home', {
      .state(states.home.name, {
        url: '/',
        templateUrl: 'views/main.html'
      })
      //.state('about', {
        .state(states.about.name, {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .state('toc', {
        url: '/toc',
        templateUrl: 'views/toc.html'
      })
      .state(states.radioDisable.name, {
        url: '/radioDisable',
        templateUrl: 'views/radioDisable2.html',
        controller: 'radioDisablingCtrl'
      });

});