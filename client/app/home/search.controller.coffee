'use strict'

angular.module 'taskyApp'
.controller 'SearchCtrl', ($scope, Category, $q, $state, Search) ->
  $scope.pageVariables.pageClass = 'page-search'
  $scope.loading =
    category: false
    location: false

  $scope.spinnerTexts = [
    'Plumber'
    'Mover'
    'Painter'
    'Photographer'
    'DJ'
  ]

  _requestInfo =
    latLng:
      lat: undefined
      lng: undefined
    subLocality: undefined #e.g. North York
    categoryRoute: undefined

  $scope.getCategories = (val) ->
    Category.search
      searchTerm: val
    .$promise

  $scope.getAddresses = (val) ->
    geocoder = new google.maps.Geocoder();
    deferred = $q.defer()
    geocoder.geocode
      address: val
      componentRestrictions:
        country: 'CA'
    ,
      (results, status) ->
        if status is google.maps.GeocoderStatus.OK
          # limit to 10
          results = Array.prototype.slice.call results, 0, 5
          deferred.resolve results
        else
          deferred.reject results

    deferred.promise

  $scope.setLatLng = (i,m,l) ->
    _requestInfo.latLng =
      lat: i.geometry.location.lat(),
      lng: i.geometry.location.lng(),

    subLoc = _.find i.address_components, (item) ->
      !!~item.types.indexOf 'sublocality_level_1'

    _requestInfo.subLocality = (subLoc || i.address_components[0]).short_name

  $scope.setCategory = (item) ->
    _requestInfo.categoryRoute = item.route

  $scope.newRequest = ->
    Search.subLocality _requestInfo.subLocality
    Search.lngLat
      lng: _requestInfo.latLng.lng
      lat: _requestInfo.latLng.lat
    $state.go 'request',
      categoryRoute: _requestInfo.categoryRoute,