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
    },
    error: {
      name: 'error'
    }
  })

  .config(function($stateProvider, $urlRouterProvider, states) {

    $urlRouterProvider.otherwise('/error');

    $stateProvider
      .state(states.home.name, {
        url: '/',
        templateUrl: 'views/home.html'
      })
      .state(states.displayDataFromAService.name, {
        url: '/display-data-from-a-service',
        templateUrl: 'views/display-data-from-a-service.html',
        controller: 'displayDataFromAServiceCtrl',
        data: {
          pageTitle: 'display data from a service'
        }
      })
      .state(states.disableSubmitRadioSelection.name, {
        url: '/radio-disable',
        templateUrl: 'views/disable-submit-radio-selection.html',
        controller: 'disableSubmitRadioSelectionCtrl',
        data: {
          pageTitle: 'disable submit until certain radio button is selected'
        }
      })
      .state(states.toggleMenuWithNgFocusNgBlur.name, {
        url: '/toggle-menu-with-ng-focus-and-ng-blur',
        templateUrl: 'views/toggle-menu-with-ng-focus-and-ng-blur.html',
        data: {
          pageTitle: 'toggle menu with ng-focus and ng-blur'
        }
      })
      .state(states.activeCheckboxLabel.name, {
        url: '/active-checkbox-label',
        templateUrl: 'views/active-checkbox-label.html',
        controller: 'activeCheckboxLabelCtrl',
        data: {
          pageTitle: 'active checkbox label'
        }
      })
      .state(states.ngRepeatFilterToggle.name, {
        url: '/ng-repeat-filter-toggle',
        templateUrl: 'views/ng-repeat-filter-toggle.html',
        controller: 'ngRepeatFilterToggleCtrl',
        data: {
          pageTitle: 'ng-repeat filter toggle'
        }
      })
      .state(states.error.name, {
        url: '/error',
        templateUrl: 'views/error.html',
        data: {
          pageTitle: 'Whoops!'
        }
      })

});