'use strict';

angular.module('proofOfConceptDemos')
  .controller('gifbaseCtrl', function ($scope, gifbaseService) {

    gifbaseService.getTheGifs().then(function (data) {
      $scope.gifs = data.gifs;
    });

  });