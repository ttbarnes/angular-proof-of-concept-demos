'use strict';

angular.module('proofOfConceptDemos')
  .directive('activeHover', function () {
    return {
      restrict: 'A',
      link: function(scope, elem){

        scope.$watch(elem,function(){

          elem.bind('mouseover', function(){
            elem.addClass('active-hover');
            elem.parent().children('li').addClass('inactive-hover');
            elem.removeClass('inactive-hover');
          });

          elem.bind('mouseout', function(){
            elem.removeClass('active-hover');
            elem.parent().children('li').removeClass('inactive-hover');
          });

        });

      }
    };
  });