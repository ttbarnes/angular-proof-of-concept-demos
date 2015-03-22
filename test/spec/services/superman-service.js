'use strict';

describe('Service: supermanService', function(){

  // load the controller's module
  beforeEach(module('proofOfConceptDemos'));


  describe('characters all', function(){

    it('should be defined', inject(function(supermanService){
        expect(supermanService.all()).toBeDefined();
    }));

    it('should have a length of 3', inject(function(supermanService){
        expect(supermanService.all().length).toEqual(3);
    }));

    it('should have the correct copy', inject(function(supermanService){
        expect(supermanService.all()[0]).toEqual('Clark Kent');
        expect(supermanService.all()[1]).toEqual('Lois Lane');
        expect(supermanService.all()[2]).toEqual('Lex Luthor');
    }));

  });

  describe('characters - first', function(){

    it('should be defined', inject(function(supermanService){
        expect(supermanService.first).toBeDefined();
    }));

    it('should have a length of 0', inject(function(supermanService){
        expect(supermanService.first.length).toEqual(0);
    }));

    it('should have the correct copy', inject(function(supermanService){
        expect(supermanService.first()).toEqual('Clark Kent');
    }));

  });

});