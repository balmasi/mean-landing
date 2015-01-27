'use strict'

angular.module 'taskyApp'
.factory 'Search', ($http) ->
  location =
    lng: undefined
    lat: undefined
    subLocality: undefined

  # getter/setter
  subLocality: (name) ->
    return location.subLocality unless name?
    location.subLocality = name
    return

  lngLat: (lngLat) ->
    return [location.lng, location.lat] unless lngLat?
    location.lng = lngLat.lng
    location.lat = lngLat.lat
    return

  isRequestLocationSet: ->
    location.lng && location.lat && location.subLocality

  clearLocation: ->
    location = {}