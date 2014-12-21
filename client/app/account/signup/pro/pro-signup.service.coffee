'use strict'

angular.module 'taskyApp'
.factory 'ProSignupData', (Category, $q) ->
  _data = {}
  _redirected = false

  api =

    setSelectedCategory: (catId) ->
      _data.category = catId

    getSelectedCategory: () ->
      _data.category

    getCategories:->
      Category.getRootCategories()

    getServices: ->
      return _data.services if _data.services?

      Category.getSubcategories({ id: _data.category })
        .$promise
        .then (services) ->
          _data.services = {}
          services.forEach (service) ->
            _data.services[service._id] =
              id: service._id
              selected: false
              label: service.name
          _data.services.other =
            id: 'other'
            selected: false
            value: undefined

          _data.services

    getServicesAsArray: ->
      selectedServices = _.omit(_data.services, (service) ->
        !service.selected || service.id == 'other')
      _.keys selectedServices

    getOtherService: ->
      _data.services?.other?.value if _data.services?.other?.selected


    setServices: (services) ->
      selectedServices = _.omit services, (service) ->
        !service.selected

      _data.services = _.merge _data.services, selectedServices

    getLocationData: ->
      _data.location || {}

    setLocationData: (loc) ->
      _data.location = loc


    getDescriptionData: ->
      _data.description || {}

    setDescriptionData: (desc) ->
      _data.description =  desc

    getAccountData: ->
      _data.account || {}

    setAccountData: (accData) ->
      _data.account = accData

    getAll: ->
      _data

    toggleRedirected: ->
      _redirected = !_redirected

    hasRedirected: () ->
      _redirected

  return api