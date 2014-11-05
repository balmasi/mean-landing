'use strict'

angular.module 'taskyApp'
.controller 'AdminBusinessCtrl', ($scope, $http, Business) ->

  $scope.businesses = Business.query()

  $scope.delete = (business) ->
    Business.remove id: business._id
    _.remove $scope.businesses, business