'use strict';

angular.module('ajsRouterSeperationApp')
  .controller('ngRepeatFilterToggleCtrl', function ($scope) {

    $scope.tasks = [
      {
         name:'do some washing',
         status:'todo'
      },
      {
         name:'call phone company',
         status:'todo'
      },
      {
         name:'get some tea bags',
         status:'in-progress'
      },
      {
         name:'write some code',
         status:'in-progress'
      },
      {
         name:'make some tea',
         status:'complete'
      }
    ];

  });