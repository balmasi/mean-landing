'use strict'

describe 'Service: payment', ->

  # load the service's module
  beforeEach module 'taskyApp'

  # instantiate service
  payment = undefined
  beforeEach inject (_payment_) ->
    payment = _payment_

  it 'should do something', ->
    expect(!!payment).toBe true
