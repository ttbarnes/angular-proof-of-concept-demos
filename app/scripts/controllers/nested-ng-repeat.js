'use strict';

angular.module('proofOfConceptDemos')
  .controller('nestedNgRepeatCtrl', function ($scope) {

    $scope.fruits = [
      {
        name: 'apple',
        info:[{
          color: 'various',
          size: 'small',
          additionalInfo:[{
            purchase:'singular or in bunches'
          }]
        }]
      },
      {
        name: 'banana',
        info:[{
          color: 'yellow or green',
          size: 'small-medium',
          additionalInfo:[{
            purchase:'singular or in bunches'
          }]
        }]
      },
      {
        name: 'pineapple',
        info:[{
          color: 'yellow or green',
          size: 'medium',
          additionalInfo:[{
            purchase:'singular'
          }]
        }]
      }

    ];

  });