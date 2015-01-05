'use strict'

describe 'Directive: multicheck', ->

  # load the directive's module and view
  beforeEach module 'taskyApp'
  beforeEach module 'components/directives/forms/new-request/multicheck/multicheck.html'
  element = undefined
  scope = undefined
  beforeEach inject ($rootScope) ->
    scope = $rootScope.$new()

  it 'should make hidden element visible', inject ($compile) ->
    element = angular.element '<multicheck></multicheck>'
    element = $compile(element) scope
    scope.$apply()
    expect(element.text()).toBe 'this is the multicheck directive'

