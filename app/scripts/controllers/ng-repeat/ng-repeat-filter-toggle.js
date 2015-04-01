'use strict';

angular.module('proofOfConceptDemos')
  .controller('ngRepeatFilterToggleCtrl', function ($scope) {

    $scope.tasks = [
      {
         name: 'do some washing',
         status: 'todo',
         specialId: 1
      },
      {
         name: 'call phone company',
         status: 'todo',
         specialId: 1
      },
      {
         name: 'get some tea bags',
         status: 'in-progress',
         specialId: 2
      },
      {
         name: 'write some code',
         status: 'in-progress',
         specialId: 2
      },
      {
         name: 'make some tea',
         status: 'complete',
         specialId: 3
      }
    ];

    $scope.statusFilter = 'todo';


  });