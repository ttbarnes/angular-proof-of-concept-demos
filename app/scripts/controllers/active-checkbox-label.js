'use strict';

angular.module('ajsRouterSeperationApp')
  .controller('activeCheckboxLabelCtrl', function ($scope) {

      $scope.items = [
        { 
          title: 'item 1', 
          description: 'description 1' 
        },
        { 
          title: 'item 2', 
          description: 'description 2' 
        },
        { 
          title: 'item 3', 
          description: 'description 3' 
        }
      ];

      $scope.isChecked = false;

  });