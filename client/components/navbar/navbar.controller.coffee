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


.directive 'onePageNav', () ->
  p =
    navbarScrollTop: $(window).height() / 4 # When add background to navbar
    scrollSpeed: 1000 # Smooth scrolling speed
    scrollOffset: 80 # For one page nav. Recomended to be as navbar height

  return {
    link: (scope, elem, attrs) ->
      if scope.isHome()
      # One Page Navigation
        $("#header").find(".nav").onePageNav
          currentClass: "active"
          scrollSpeed: p.scrollSpeed
          scrollOffset: p.scrollOffset
          filter: ':not(.submenu > a)'
        return
  }