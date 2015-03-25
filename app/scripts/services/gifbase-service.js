'use strict';

angular.module('proofOfConceptDemos').factory('gifbaseService', function ($http) {

  var promise;

  var gifbase = {
    getTheGifs: function() {

      var apiURL = 'http://gifbase.com/';
      var paramTag = 'tag/smile?';
      var paramFormat = 'format=json';
      var gifbaseQuery = apiURL + paramTag + paramFormat;

      if(!promise) {
        promise = $http.get(gifbaseQuery).then(function (response){
          console.info('gifs are coming');
          console.log(response);
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
