'use strict';

angular.module('ajsRouterSeperationApp')
  .controller('labelCheckboxToggleCtrl', function ($scope) {

    $scope.listItems = [
        {
            name:'bingo'
        },
        {
            name:'bongo'
        },
        {
            name:'oompa'
        },
    ];

    $scope.isSelected = false;

    $scope.toggleSelection = function(event) {
        if ($scope.isSelected) {
          $scope.isSelected = false;
        } else {
          $scope.isSelected = true;
        }
        console.log ('PRESSED!! toggleSelection!!');
      };
      
      $scope.changeToggleModel = function(event) {
        this.toggleSelection(event);
      };
      


      /*
      $scope.roles = [
        {id: 1, text: 'guest'},
        {id: 2, text: 'user'},
        {id: 3, text: 'customer'},
        {id: 4, text: 'admin'}
      ];
      */

      $scope.roles = {
        g: 'Guest',
        u: 'User',
        c: 'Customer',
        a: 'Administrator'
      };

        $scope.testValue = 'Im not changed yet!';
        $scope.imChanged = function(){
            $scope.testValue = $scope.user.roles.join(',');
            $scope.bla = true;
            console.log('i have changed');
        }

      $scope.user = {
        roles: ['c']
      };

      $scope.checkFirst = function() {
        $scope.user.roles.splice(0, $scope.user.roles.length); 
        $scope.user.roles.push('a');
      };


  });