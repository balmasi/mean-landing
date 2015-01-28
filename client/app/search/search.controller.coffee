'use strict'

angular.module 'taskyApp'
.controller 'SearchCtrl', ($scope, Category, $q, $state, Location) ->
  vm = this

  $scope.loading =
    category: false
    location: false

  categoryRoute = undefined
  categorySearchIndex = lunr ->
    @field 'name', boost: 40
    @field 'action', boost: 30
    @field 'actor', boost: 30
    @field 'search_keywords', boost: 25
    @ref 'name'
    return
  fetchedServices = null
  chosenService = null

  # Category Logic
  Category.getAllServices().$promise.then (services) ->
    fetchedServices = services
    _.each services, (service) ->
      categorySearchIndex.add service


  $scope.getCategories = (val) ->
    d = $q.defer()
    d.resolve categorySearchIndex.search val
    d.promise


  $scope.setCategory = (item) ->
    chosenService = _.find fetchedServices, name: item.ref
    categoryRoute = categorySearchIndex.search chosenService.route

  $scope.newRequest = ->
    $state.go 'request',
      categoryRoute: chosenService.route