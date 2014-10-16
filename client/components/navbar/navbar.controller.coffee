'use strict'

angular.module 'taskyApp'
.controller 'NavbarCtrl', ($scope, $location, Auth) ->
  $scope.isCollapsed = true
  $scope.isLoggedIn = Auth.isLoggedIn
  $scope.isAdmin = Auth.isAdmin
  $scope.getCurrentUser = Auth.getCurrentUser
  $scope.signupActive = false

  $scope.logout = ->
    Auth.logout()
    $location.path '/login'

  $scope.isActive = (route) ->
    route is $location.path()

  $scope.isHome = ->
    $location.path() is '/'