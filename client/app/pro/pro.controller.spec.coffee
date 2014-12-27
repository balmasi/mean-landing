'use strict'

describe 'Controller: ProCtrl', ->

  # load the controller's module
  beforeEach module 'taskyApp'
  ProCtrl = undefined
  scope = undefined

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    ProCtrl = $controller 'ProCtrl',
      $scope: scope

  it 'should ...', ->
    expect(1).toEqual 1
