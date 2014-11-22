'use strict'

angular.module 'taskyApp'
.controller 'RequestCtrl', ($scope, $location, Request) ->
  $scope.pageVariables.pageClass = 'page-request'

  Request.getForm
    category_route: 'intercity-moving'
  .$promise.then (result) ->
    $scope.questions = result[0].questions

  $scope.errors = {}

