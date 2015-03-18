'use strict';

angular.module('ajsRouterSeperationApp')
  .controller('activeCheckboxLabelCtrl', function ($scope) {

      $scope.modules = [
        { 
          title: 'Module 1', 
          description: 'Description 1' 
        },
        { 
          title: 'Module 2', 
          description: 'Description 2' 
        },
        { 
          title: 'Module 3', 
          description: 'Description 3' 
        }
      ];

      $scope.isChecked = false;

  });