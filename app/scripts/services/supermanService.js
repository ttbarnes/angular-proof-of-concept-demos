'use strict';

angular.module('ajsRouterSeperationApp').factory('supermanService', function() {
  var users = ['Will', 'Daniel', 'Nina'];

  return {
    all: function() {
      return users;
    },
    first: function() {
      return users[0];
    }
  };
});
