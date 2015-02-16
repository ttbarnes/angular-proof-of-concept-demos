'use strict';

angular.module('ajsRouterSeperationApp')
  .controller('radioDisablingCtrl', function ($scope) {


    /*
    $scope.checked1 = 1;

    $scope.uncheck = function () {
      console.log('bla');
        if ($scope.checked === event.target.value) {
          $scope.checked = false;
        }
    };
    */



    //$scope.show = function () {
        //alert($scope.field);
    //};

    /*
    $scope.checkState = function() {
        $scope.color = $scope.field;
        if($scope.color1 === true) {
          $scope.color2 = false;
        }
    };
    */

    $scope.bingo = '';

    $scope.people = [{
        name: 'John'
    }, 
    {
        name: 'Paul'
    }, 
    {
        name: 'George'
    }, 
    {
        name: 'Ringo'
    }];




  });
