'use strict';

angular.module('routes', ['ui.router'])

  .constant('states', {
    home: {
      name: 'home'
    },
    forms: {
      name: 'forms',
      formValidation: {
        name: 'forms.formValidation'
      },
      disableSubmitRadioSelection: {
        name: 'forms.disableSubmitRadioSelection'
      },
      activeCheckboxLabel: {
        name: 'forms.activeCheckboxLabel'
      }
    },
    ngRepeat: {
      name: 'ngRepeat',
      ngRepeatFilterToggle: {
        name: 'ngRepeat.ngRepeatFilterToggle'
      },
      nestedNgRepeat: {
        name: 'ngRepeat.nestedNgRepeat'
      },
    },
    services: {
      name: 'services',
      simpleService: {
        name: 'services.simpleService'
      },
      gifbase: {
        name: 'services.gifbase'
      }
    },
    directives: {
      name: 'directives',
      activeHoverDirective: {
        name: 'directives.activeHoverDirective'
      },
      randomRobotImage: {
        name: 'directives.randomRobotImage'
      }
    },
    ui: {
      name: 'ui',
      toggleMenuWithNgFocusNgBlur: {
        name: 'ui.toggleMenuWithNgFocusNgBlur'
      }
    }
  })

  .config(function($stateProvider, $urlRouterProvider, states) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state(states.home.name, {
        url: '/',
        templateUrl: 'views/home.html'
      })

      ////////////////////
      //forms
      ////////////////////
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

      ////////////////////
      //ngRepeat
      ////////////////////
      .state(states.ngRepeat.name, {
        url: '/ng-repeat',
        templateUrl: 'views/forms/index.html'
      })
      .state(states.ngRepeat.ngRepeatFilterToggle.name, {
        url: '/ng-repeat-filter-toggle',
        templateUrl: 'views/ng-repeat/ng-repeat-filter-toggle.html',
        controller: 'ngRepeatFilterToggleCtrl',
        data: {
          pageTitle: 'ng-repeat filter toggle'
        }
      })
      .state(states.ngRepeat.nestedNgRepeat.name, {
        url: '/nested-ng-repeat',
        templateUrl: 'views/ng-repeat/nested-ng-repeat.html',
        controller: 'nestedNgRepeatCtrl',
        data: {
          pageTitle: 'nested ng-repeat'
        }
      })

      ////////////////////
      //services
      ////////////////////
      .state(states.services.name, {
        url: '/services',
        templateUrl: 'views/services/index.html'
      })
      .state(states.services.simpleService.name, {
        url: '/simple-service',
        templateUrl: 'views/services/simple-service.html',
        controller: 'simpleServiceCtrl',
        data: {
          pageTitle: 'simple service'
        }
      })
      .state(states.services.gifbase.name, {
        url: '/gifbase',
        templateUrl: 'views/services/gifbase.html',
        controller: 'gifbaseCtrl',
        data: {
          pageTitle: 'http call to 3rd party api'
        }
      })

      ////////////////////
      //directives
      ////////////////////
      .state(states.directives.name, {
        url: '/directives',
        templateUrl: 'views/directives/index.html'
      })
      .state(states.directives.activeHoverDirective.name, {
        url: '/active-hover-directive',
        templateUrl: 'views/directives/active-hover.html',
        data: {
          pageTitle: 'active hover directive'
        }
      })
      .state(states.directives.randomRobotImage.name, {
        url: '/random-robot-image',
        templateUrl: 'views/directives/random-robot-image.html',
        data: {
          pageTitle: 'random robot image'
        }
      })

      ////////////////////
      //ui
      ////////////////////
      .state(states.ui.name, {
        url: '/ui',
        templateUrl: 'views/ui/index.html'
      })
      .state(states.ui.toggleMenuWithNgFocusNgBlur.name, {
        url: '/toggle-menu-with-ng-focus-and-ng-blur',
        templateUrl: 'views/ui/toggle-menu-with-ng-focus-and-ng-blur.html',
        data: {
          pageTitle: 'toggle menu with ng-focus and ng-blur'
        }
      });

});