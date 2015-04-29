'use strict';

angular.module('proofOfConceptDemos').factory('simpleService', function() {
  
  var characters = ['Clark Kent', 'Lois Lane', 'Lex Luthor'];

  return {
    all: function() {
      return characters;
    },
    first: function() {
      return characters[0];
    }
  };

});
