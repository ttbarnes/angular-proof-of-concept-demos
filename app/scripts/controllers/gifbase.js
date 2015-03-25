'use strict';

angular.module('proofOfConceptDemos')
  .controller('gifbaseCtrl', function ($scope, gifbaseService) {

    gifbaseService.gifbase().then(function (data) {
      $scope.gifs = data.gifs;
    });

  });