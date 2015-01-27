'use strict'

angular.module 'taskyApp'
.controller 'SearchCtrl', ($scope, Category, $q, $state, Search) ->
  $scope.loading =
    category: false
    location: false

  $scope.location =
    latLng:
      lat: undefined
      lng: undefined
    subLocality: undefined #e.g. North York

  categoryRoute = undefined

  $scope.getCategories = (val) ->
    Category.search
      searchTerm: val
    .$promise


  $scope.setCategory = (item) ->
    categoryRoute = item.route

  $scope.newRequest = ->
    Search.subLocality $scope.location.subLocality
    Search.lngLat
      lng: $scope.location.latLng.lng
      lat: $scope.location.latLng.lat
    $state.go 'request',
      categoryRoute: categoryRoute,