'use strict';

angular.module('ajsRouterSeperationApp').factory('supermanService', function() {
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
