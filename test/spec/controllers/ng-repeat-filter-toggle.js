'use strict';

describe('Controller: ngRepeatFilterToggleCtrl', function () {

  // load the controller's module
  beforeEach(module('proofOfConceptDemos'));

  var ngRepeatFilterToggleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ngRepeatFilterToggleCtrl = $controller('ngRepeatFilterToggleCtrl', {
      $scope: scope
    });
  }));


  it('should have 5 tasks defined', function(){
    expect(scope.tasks.length).toBe(5);
  });

  it('should have correct strings and numbers in task 1', function(){
    var task = scope.tasks[0];
    expect(task.name).toEqual('do some washing');
    expect(task.status).toEqual('todo');
    expect(task.specialId).toEqual(1);
  });

  it('should have correct strings and numbers in task 2', function(){
    var task = scope.tasks[1];
    expect(task.name).toEqual('call phone company');
    expect(task.status).toEqual('todo');
    expect(task.specialId).toEqual(1);
  });

  it('should have correct strings and numbers in task 3', function(){
    var task = scope.tasks[2];
    expect(task.name).toEqual('get some tea bags');
    expect(task.status).toEqual('in-progress');
    expect(task.specialId).toEqual(2);
  });

  it('should have correct strings and numbers in task 4', function(){
    var task = scope.tasks[3];
    expect(task.name).toEqual('write some code');
    expect(task.status).toEqual('in-progress');
    expect(task.specialId).toEqual(2);
  });

  it('should have correct strings and numbers in task 5', function(){
    var task = scope.tasks[4];
    expect(task.name).toEqual('make some tea');
    expect(task.status).toEqual('complete');
    expect(task.specialId).toEqual(3);
  });

});
