'use strict'

describe 'Directive: textSpinner', ->

  # load the directive's module
  beforeEach module 'taskyApp'
  element = undefined
  scope = undefined
  beforeEach inject ($rootScope) ->
    scope = $rootScope.$new()

  it 'should make hidden element visible', inject ($compile) ->
    element = angular.element '<text-spinner></text-spinner>'
    element = $compile(element) scope
    expect(element.text()).toBe 'this is the textSpinner directive'
