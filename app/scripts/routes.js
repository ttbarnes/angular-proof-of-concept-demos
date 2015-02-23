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
    },
    ngFocus: {
      name: 'ngFocus'
    },
    labelCheckboxToggle: {
      name: 'labelCheckboxToggle'
    },
    labelCheckboxToggle2: {
      name: 'labelCheckboxToggle2'
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
      })
      .state(states.ngFocus.name, {
        url: '/ngFocus',
        templateUrl: 'views/ng-focus.html'
      })
      .state(states.labelCheckboxToggle.name, {
        url: '/labelCheckboxToggle',
        templateUrl: 'views/labelCheckboxToggle.html',
        controller: 'labelCheckboxToggleCtrl'
      })
      .state(states.labelCheckboxToggle2.name, {
        url: '/labelCheckboxToggle2',
        templateUrl: 'views/labelCheckboxToggle2.html',
        controller: 'labelCheckboxToggleCtrl2'
      })

});