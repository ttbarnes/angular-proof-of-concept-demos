'use strict';

angular.module('proofOfConceptDemos').factory('gifbaseService', function ($http) {

  var promise;

  var gifbase = {

    getTheGifs: function() {

      var apiURL = 'https://gifbase.com/';
      var paramTag = 'tag/smile?';
      var paramFormat = 'format=json';
      var gifbaseQuery = apiURL + paramTag + paramFormat;

      if(!promise) {
        promise = $http.get(gifbaseQuery).then(function (response){
          return response.data;
        });
      }

      return promise;
    }

  };

  return {
    gifbase: function() {
      return gifbase.getTheGifs();
    }
  };

});
