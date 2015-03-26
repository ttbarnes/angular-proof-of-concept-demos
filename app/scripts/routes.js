'use strict';

angular.module('routes', ['ui.router'])

  .constant('states', {
    home: {
      name: 'home'
    },
    forms: {
      name: 'forms',
      formValidation: {
        name: 'forms.formValidation',
        pageTitle: 'form validation'
      },
      disableSubmitRadioSelection: {
        name: 'forms.disableSubmitRadioSelection'
      },
      activeCheckboxLabel: {
        name: 'forms.activeCheckboxLabel'
      }
    },
    displayDataFromAService: {
      name: 'displayDataFromAService'
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
    nestedNgRepeat: {
      name: 'nestedNgRepeat'
    },
    activeHoverDirective: {
      name: 'activeHoverDirective'
    },
    gifbase: {
      name: 'gifbase'
    }
  })

  .config(function($stateProvider, $urlRouterProvider, states) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state(states.home.name, {
        url: '/',
        templateUrl: 'views/home.html'
      })
      .state(states.forms.name, {
        url: '/forms',
        templateUrl: 'views/forms/index.html'
      })
      .state(states.forms.formValidation.name, {
        url: '/form-validation',
        templateUrl: 'views/forms/form-validation.html',
        controller: 'formValidationCtrl',
        data: {
          pageTitle: 'form validation'
        }
      })
      .state(states.forms.disableSubmitRadioSelection.name, {
        url: '/radio-disable',
        templateUrl: 'views/forms/disable-submit-radio-selection.html',
        controller: 'disableSubmitRadioSelectionCtrl',
        data: {
          pageTitle: 'disable submit until certain radio button is selected'
        }
      })
      .state(states.forms.activeCheckboxLabel.name, {
        url: '/active-checkbox-label',
        templateUrl: 'views/forms/active-checkbox-label.html',
        controller: 'activeCheckboxLabelCtrl',
        data: {
          pageTitle: 'active checkbox label'
        }
      })


      .state(states.displayDataFromAService.name, {
        url: '/simple-service',
        templateUrl: 'views/simple-service.html',
        controller: 'simpleServiceCtrl',
        data: {
          pageTitle: 'simple service'
        }
      })
      .state(states.toggleMenuWithNgFocusNgBlur.name, {
        url: '/toggle-menu-with-ng-focus-and-ng-blur',
        templateUrl: 'views/toggle-menu-with-ng-focus-and-ng-blur.html',
        data: {
          pageTitle: 'toggle menu with ng-focus and ng-blur'
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
      .state(states.nestedNgRepeat.name, {
        url: '/nested-ng-repeat',
        templateUrl: 'views/nested-ng-repeat.html',
        controller: 'nestedNgRepeatCtrl',
        data: {
          pageTitle: 'nested ng-repeat'
        }
      })
      .state(states.activeHoverDirective.name, {
        url: '/active-hover-directive',
        templateUrl: 'views/active-hover-directive.html',
        data: {
          pageTitle: 'active hover directive'
        }
      })
      .state(states.gifbase.name, {
        url: '/gifbase',
        templateUrl: 'views/gifbase.html',
        controller: 'gifbaseCtrl',
        data: {
          pageTitle: 'http call to 3rd party api'
        }
      })

});