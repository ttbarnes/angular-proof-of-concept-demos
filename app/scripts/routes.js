'use strict';

angular.module('routes', ['ui.router'])

  .constant('states', {
    home: {
      name: 'home'
    },
    displayDataFromAService: {
      name: 'displayDataFromAService'
    },
    disableSubmitRadioSelection: {
      name: 'disableSubmitRadioSelection'
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

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state(states.home.name, {
        url: '/',
        templateUrl: 'views/home.html'
      })
      .state(states.displayDataFromAService.name, {
        url: '/display-data-from-a-service',
        templateUrl: 'views/display-data-from-a-service.html',
        controller: 'displayDataFromAServiceCtrl'
      })
      .state(states.disableSubmitRadioSelection.name, {
        url: '/radio-disable',
        templateUrl: 'views/disable-submit-radio-selection.html',
        controller: 'disableSubmitRadioSelectionCtrl'
      })
      .state(states.toggleMenuWithNgFocusNgBlur.name, {
        url: '/toggle-menu-with-ng-focus-and-ng-blur',
        templateUrl: 'views/toggle-menu-with-ng-focus-and-ng-blur.html'
      })
      .state(states.activeCheckboxLabel.name, {
        url: '/active-checkbox-label',
        templateUrl: 'views/active-checkbox-label.html',
        controller: 'activeCheckboxLabelCtrl'
      })
      .state(states.ngRepeatFilterToggle.name, {
        url: '/ng-repeat-filter-toggle',
        templateUrl: 'views/ng-repeat-filter-toggle.html',
        controller: 'ngRepeatFilterToggleCtrl'
      })

});