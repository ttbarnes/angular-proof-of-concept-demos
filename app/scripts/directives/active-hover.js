'use strict';

angular.module('proofOfConceptDemos')
  .directive('activeHover', function () {
    return {
      link: function(scope, elem){
        scope.$watch(elem,function(){
          elem.bind('mouseover', function(){
            elem.addClass('active-hover');
          });
          elem.bind('mouseout', function(){
            elem.removeClass('active-hover');
          });
        });
      }
    };
  });