'use strict';

angular.module('routes', ['ui.router'])

  .constant('states', {
    home: {
      name: 'home'
    },
    displayDataFromService: {
      name: 'displayDataFromService'
    },
    radioDisable: {
      name: 'radioDisable'
    },
    toggleMenuWithNgFocusNgBlur: {
      name: 'toggleMenuWithNgFocusNgBlur'
    },
    activeCheckboxLabel: {
      name: 'activeCheckboxLabel'
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
      .state(states.displayDataFromService.name, {
        url: '/displayDataFromService',
        templateUrl: 'views/displayDataFromService.html',
        controller: 'displayDataFromServiceCtrl'
      })
      .state(states.radioDisable.name, {
        url: '/radio-disable',
        templateUrl: 'views/radio-disable.html',
        controller: 'radioDisablingCtrl'
      })
      .state(states.toggleMenuWithNgFocusNgBlur.name, {
        url: '/toggle-menu-with-ng-focus-and-ng-blur',
        templateUrl: 'views/toggle-menu-with-ng-focus-and-ng-blur.html'
      })
      .state(states.activeCheckboxLabel.name, {
        url: '/active-checkbox-label',
        templateUrl: 'views/activeCheckboxLabel.html',
        controller: 'labelCheckboxToggleCtrl'
      })
      .state(states.ngRepeatFilterToggle.name, {
        url: '/ngRepeatFilterToggle',
        templateUrl: 'views/ngRepeatFilterToggle.html',
        controller: 'ngRepeatFilterToggleCtrl'
      })

});