'use strict'

angular.module 'taskyApp'
.controller 'LoginCtrl', ($scope, Auth, $state, $window) ->
  $scope.pageVariables.pageClass = 'page-login'
  $scope.user = {}
  $scope.errors = {}
  $scope.login = (form) ->
    $scope.submitted = true

    if form.$valid
      # Logged in, redirect to home
      Auth.login
        email: $scope.user.email
        password: $scope.user.password

      .then (user)->
        switch user._accountType
          when 'Customer' then $state.go 'tasks'
          when 'Pro' then $state.go 'pro'
          else $state.go 'home'
      .catch (err) ->
        $scope.errors.other = err.message

  $scope.loginOauth = (provider) ->
    $window.location.href = '/auth/' + provider
