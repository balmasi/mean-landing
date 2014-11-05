'use strict'

angular.module 'taskyApp'
.config ($stateProvider) ->
  $stateProvider
  .state 'admin-users',
    url: '/admin/users'
    templateUrl: 'app/admin/users/users.html'
    controller: 'AdminUsersCtrl'
