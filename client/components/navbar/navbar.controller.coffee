'use strict'

angular.module 'taskyApp'
.controller 'NavbarCtrl', ($scope, $state, $location, Auth, $rootScope, $timeout) ->

  $scope.isCollapsed = true # collapse = small
  $scope.signupActive = false # Signup dropdown active?

  $scope.isLoggedIn = Auth.isLoggedIn
  $scope.isAdmin = Auth.isAdmin

  $scope.logout = ->
    Auth.logout()
    $location.path '/login'

  $scope.isActive = (route) ->
    route is $location.path()

  $scope.isHome = ->
    $location.path() is '/'

  $scope.isSignUp = ->
    /signup/.test $location.path()

  $rootScope.$on '$stateChangeSuccess', ->
    $timeout ->
      $('.navbar-toggle').click() unless $scope.isCollapsed
    ,
      0