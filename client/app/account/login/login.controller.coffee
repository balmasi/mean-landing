'use strict'

angular.module 'taskyApp'
.controller 'LoginCtrl', ($scope, Auth, $location, $state,  $window) ->
  $scope.pageVariables.pageClass = 'page-login'
  $scope.user = {}
  $scope.errors = {}

  $scope.loginAs = (who,form) ->
    switch who
      when 'customer'
        $scope.user.email = 'test@test.com'
        $scope.user.password = 'test'
      when 'pro'
        $scope.user.email = 'pro@pro.com'
        $scope.user.password = 'pro'
      when 'pro2'
        $scope.user.email = 'pro2@pro.com'
        $scope.user.password = 'pro'
      when 'admin'
        $scope.user.email = 'admin@admin.com'
        $scope.user.password = 'admin'
    $scope.login(form)

  $scope.login = (form) ->
    $scope.submitted = true

    if form.$valid
      # Logged in, redirect to home
      Auth.login
        email: $scope.user.email
        password: $scope.user.password

      .then (user)->
        switch user._accountType
          when 'Customer' then return $location.path 'tasks'
          when 'Pro' then return $location.path 'pro'
          else return $state.go 'admin' if user.role is 'admin'
        $state.go 'home'
      .catch (err) ->
        $scope.errors.other = err.message

  $scope.loginOauth = (provider) ->
    $location.path '/auth/' + provider
