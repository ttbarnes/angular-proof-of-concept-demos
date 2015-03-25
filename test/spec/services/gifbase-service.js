'use strict';

describe('Service: gifbaseService', function(){

  var gifbaseService;


  beforeEach(function (){
    module('proofOfConceptDemos');
    inject(function(_gifbaseService_) {
      gifbaseService = _gifbaseService_;
    });
  });


  describe('initialisation', function(){

    var gifbaseConfig = null;
    var apiURL;
    var paramTag;
    var paramFormat;
    var query;
    var fetchApiURL;
    var fetchParamTag;
    var fetchParamFormat;
    var fetchQuery;

    beforeEach(function(){

      gifbaseConfig = {
        configApiURL: function(value) {
          apiURL = value;
        },
        getApiURL: function() {
          return apiURL;
        },

        configParamTag: function(value) {
          paramTag = value;
        },
        getParamTag: function() {
          return paramTag;
        },

        configParamFormat: function(value) {
          paramFormat = value;
        },
        getParamFormat: function() {
          return paramFormat;
        },

        configQuery: function(value) {
          query = value;
        },
        getQuery: function() {
          return query;
        }
      };

      spyOn(gifbaseConfig, 'configApiURL', 'configParamTag', 'configParamFormat', 'configQuery').and.callThrough();

      gifbaseConfig.configApiURL('http://gifbase.com/');
      gifbaseConfig.configParamTag('tag/smile?');
      gifbaseConfig.configParamFormat('format=json');
      gifbaseConfig.configQuery('');

      fetchApiURL = gifbaseConfig.getApiURL();
      fetchParamTag = gifbaseConfig.getParamTag();
      fetchParamFormat = gifbaseConfig.getParamFormat();
      fetchQuery = fetchApiURL + fetchParamTag + fetchParamFormat;

    });

    it('should have a getTheGifs function', function(){
      expect(angular.isFunction(gifbaseService.gifbase.getTheGifs)).toBeDefined();
    });

    it('should have the correct base api URL defined', function(){
      expect(fetchApiURL).toEqual('http://gifbase.com/');
    });

    it('should have the correct tag parameter defined', function(){
      expect(fetchParamTag).toEqual('tag/smile?');
    });

    it('should have the correct format parameter defined', function(){
      expect(fetchParamFormat).toEqual('format=json');
    });

    it('should bla dlka sldf alskfdas', function(){
      expect(fetchQuery).toEqual('http://gifbase.com/tag/smile?format=json');
    });

  });


});