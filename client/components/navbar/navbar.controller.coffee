'use strict'

angular.module 'taskyApp'
.controller 'NavbarCtrl', ($scope, $animate, $location, Auth, $rootScope, $timeout) ->

  nav = this

  nav.isCollapsed = true # collapse = small
  nav.signupActive = false # Signup dropdown active?
  nav.avatarActive = false # Avatar dropdown active?

  nav.isLoggedIn = Auth.isLoggedIn
  nav.isAdmin = Auth.isAdmin
  nav.user = Auth.getCurrentUser()

  nav.dashboardUrl = ->
    if Auth.isPro() then '/pro' else '/tasks'

  nav.isPro = -> Auth.isPro()

  nav.getUserAvatar = ->
    nav.user = Auth.getCurrentUser()
    nav.user?.image?.thumb
  nav.getUserName = ->
    nav.user.firstName + ' ' + nav.user.lastName

  nav.logout = ->
    Auth.logout()
    nav.avatarActive = false
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