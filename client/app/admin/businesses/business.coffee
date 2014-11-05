'use strict'

angular.module 'taskyApp'
.config ($stateProvider) ->
  $stateProvider
  .state 'admin-businesses',
    url: '/admin/businesses'
    templateUrl: 'app/admin/businesses/businesses.html'
    controller: 'AdminBusinessCtrl'
