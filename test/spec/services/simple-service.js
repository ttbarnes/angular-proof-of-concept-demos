'use strict';

describe('Service: simpleService', function(){

  // load the controller's module
  beforeEach(module('proofOfConceptDemos'));


  describe('characters all', function(){

    it('should be defined', inject(function(simpleService){
        expect(simpleService.all()).toBeDefined();
    }));

    it('should have a length of 3', inject(function(simpleService){
        expect(simpleService.all().length).toEqual(3);
    }));

    it('should have the correct copy', inject(function(simpleService){
        expect(simpleService.all()[0]).toEqual('Clark Kent');
        expect(simpleService.all()[1]).toEqual('Lois Lane');
        expect(simpleService.all()[2]).toEqual('Lex Luthor');
    }));

  });

  describe('characters - first', function(){

    it('should be defined', inject(function(simpleService){
        expect(simpleService.first).toBeDefined();
    }));

    it('should have a length of 0', inject(function(simpleService){
        expect(simpleService.first.length).toEqual(0);
    }));

    it('should have the correct copy', inject(function(simpleService){
        expect(simpleService.first()).toEqual('Clark Kent');
    }));

  });

});