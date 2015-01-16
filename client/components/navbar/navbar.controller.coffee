'use strict'

angular.module 'taskyApp'
.controller 'NavbarCtrl', ($scope, $animate, $location, Auth, $rootScope, $timeout) ->

  nav = this

  nav.isCollapsed = true # collapse = small
  nav.signupActive = false # Signup dropdown active?

  nav.isLoggedIn = Auth.isLoggedIn
  nav.isAdmin = Auth.isAdmin

  nav.dashboardUrl = ->
    if Auth.isPro() then '/pro' else '/tasks'


  nav.logout = ->
    Auth.logout()
    $location.path '/login'

  nav.isActive = $scope.isActive = (route) ->
    route is $location.path()

  nav.isHome = $scope.isHome = ->
    $location.path() is '/'

  nav.isSignUp = $scope.isSignUp = ->
    /signup/.test $location.path()

  $rootScope.$on '$stateChangeSuccess', ->
    $timeout ->
      $('.navbar-toggle').click() unless nav.isCollapsed
    ,
      0