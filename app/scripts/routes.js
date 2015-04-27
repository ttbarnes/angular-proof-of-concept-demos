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
      simple: {
        name: 'services.simple'
      },
      gifbase: {
        name: 'services.gifbase'
      }
    },
    directives: {
      name: 'directives',
      activeHover: {
        name: 'directives.activeHover'
      },
      randomRobotImage: {
        name: 'directives.randomRobotImage'
      }
    },
    scopeWatch: {
      name: 'scopeWatch',
      formCompletionValue: {
        name: 'scopeWatch.formCompletionValue'
      }
    },
    ui: {
      name: 'ui',
      dropDownMenuWithNgFocusNgBlur: {
        name: 'ui.dropDownMenuWithNgFocusNgBlur'
      },
      ngClickShowHide: {
        name: 'ui.ngClickShowHide'
      },
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
        data: {
          pageTitle: 'form validation'
        }
      })
      .state(states.forms.disableSubmitRadioSelection.name, {
        url: '/disable-radio',
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
      .state(states.services.simple.name, {
        url: '/simple',
        templateUrl: 'views/services/simple.html',
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
      .state(states.directives.activeHover.name, {
        url: '/active-hover',
        templateUrl: 'views/directives/active-hover.html',
        data: {
          pageTitle: 'active hover'
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
      //scope watch
      ////////////////////
      .state(states.scopeWatch.name, {
        url: '/scope-watch',
        templateUrl: 'views/scope-watch/index.html'
      })
      .state(states.scopeWatch.formCompletionValue.name, {
        url: '/form-completion-value',
        templateUrl: 'views/scope-watch/form-completion-value.html',
        controller:'formCompletionValueCtrl',
        data: {
          pageTitle: 'form completion value'
        }
      })

      ////////////////////
      //ui
      ////////////////////
      .state(states.ui.name, {
        url: '/ui',
        templateUrl: 'views/ui/index.html'
      })
      .state(states.ui.dropDownMenuWithNgFocusNgBlur.name, {
        url: '/dropdown-menu-with-ng-focus-and-ng-blur',
        templateUrl: 'views/ui/dropdown-menu-with-ng-focus-and-ng-blur.html',
        data: {
          pageTitle: 'drop down menu with ng-focus and ng-blur'
        }
      })
      .state(states.ui.ngClickShowHide.name, {
        url: '/ng-click-show-hide',
        templateUrl: 'views/ui/ng-click-show-hide.html',
        data: {
          pageTitle: 'ng-click show/hide'
        }
      });

});