'use strict'

angular.module 'taskyApp'
.controller 'NavbarCtrl', ($scope, $animate, $location, Auth, $rootScope, $timeout) ->

  nav = this

  nav.isCollapsed = true # collapse = small
  nav.signupMenuCollapsed = true # Signup dropdown collapsed?
  $scope.accountMenuCollapsed = true # Avatar dropdown active?

  nav.isLoggedIn = Auth.isLoggedIn
  nav.isAdmin = Auth.isAdmin
  nav.user = Auth.getCurrentUser()

  collapseAll = ->
    nav.isCollapsed = true
    nav.signupMenuCollapsed = nav.accountMenuCollapsed = false

  updateChangedUser = ->
    Auth.getCurrentUser(true)
    .$promise?.then (user) ->
      nav.user = user

  $rootScope.$on 'profilePicChanged', (e, data) ->
    nav.user.image =
      url: data.url
      thumb: data.thumb

  $rootScope.$on 'loggedIn', updateChangedUser
  $rootScope.$on 'userUpdated', updateChangedUser


  nav.dashboardUrl = ->
    if Auth.isPro() then '/pro' else '/tasks'

  nav.isPro = -> Auth.isPro()

  nav.getUserName = ->
    return '' if !nav.user.firstName
    nav.user.firstName + ' ' + nav.user.lastName

  nav.logout = ->
    Auth.logout()
    nav.accountMenuCollapsed = false
    $location.path '/login'

  nav.isActive = $scope.isActive = (route) ->
    route is $location.path()

  nav.isHome = $scope.isHome = ->
    $location.path() is '/'

  nav.isSignUp = $scope.isSignUp = ->
    /signup\/.+/.test $location.path()

  nav.isChooseAccount = ->
    /signup\/?$/.test $location.path()

  $rootScope.$on '$stateChangeSuccess', ->
    collapseAll()