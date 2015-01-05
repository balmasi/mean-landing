'use strict'

describe 'Directive: appointmentSelector', ->

  # load the directive's module and view
  beforeEach module 'taskyApp'
  beforeEach module 'components/directives/forms/new-request/appointment-selector/appointment-selector.html'
  element = undefined
  scope = undefined
  beforeEach inject ($rootScope) ->
    scope = $rootScope.$new()

  it 'should make hidden element visible', inject ($compile) ->
    element = angular.element '<appointment-selector></appointment-selector>'
    element = $compile(element) scope
    scope.$apply()
    expect(element.text()).toBe 'this is the appointmentSelector directive'

