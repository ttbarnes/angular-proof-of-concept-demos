'use strict';

angular.module('routes', ['ui.router'])

  .constant('states', {
    home: {
      name: 'home'
    },
    about: {
      name: 'about'
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
    ngRepeatFilterToggle: {
      name: 'ngRepeatFilterToggle'
    }
  })

  .config(function($stateProvider, $urlRouterProvider, states) {

   // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/');
    //
    $stateProvider
      .state(states.home.name, {
        url: '/',
        templateUrl: 'views/home.html'
      })
      .state(states.about.name, {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
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
      .state(states.ngRepeatFilterToggle.name, {
        url: '/ngRepeatFilterToggle',
        templateUrl: 'views/ngRepeatFilterToggle.html',
        controller: 'ngRepeatFilterToggleCtrl'
      })

});