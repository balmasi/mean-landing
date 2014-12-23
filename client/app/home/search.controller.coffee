'use strict'

angular.module 'taskyApp'
.controller 'SearchCtrl', ($scope, Category) ->
  $scope.loading = false

  $scope.getCategories = (val) ->
    Category.search
      searchTerm: val
    .$promise.then (response) ->
      response