'use strict'

angular.module 'taskyApp'
.controller 'LoginCtrl', ($scope, Auth, $state,  $window) ->
  $scope.pageVariables.pageClass = 'page-login'
  $scope.user = {}
  $scope.errors = {}

  $scope.loginAs = (who,form) ->
    switch who
      when 'customer'
        $scope.user.email = 'tasky-test@mailinator.com'
        $scope.user.password = 'taskytest'
      when 'pro'
        $scope.user.email = 'tasky-pro@mailinator.com'
        $scope.user.password = 'taskypro'
      when 'pro2'
        $scope.user.email = 'tasky-pro2@mailinator.com'
        $scope.user.password = 'taskypro'
      when 'admin'
        $scope.user.email = 'tasky-admin@mailinator.com'
        $scope.user.password = 'taskyadmin'
    form.$valid = true
    $scope.login(form)

  $scope.login = (form) ->
    $scope.submitted = true
    if form.$valid
      # Logged in, redirect to home
      Auth.login
        email: $scope.user.email
        password: $scope.user.password

      .then (user)->
        $scope.$emit 'loggedIn'
        switch user._accountType
          when 'Customer' then return $state.go 'tasks'
          when 'Pro' then return $state.go 'pro'
          else return $state.go 'admin' if user.role is 'admin'
        $state.go 'home'
      .catch (err) ->
        form.email.$error.serverEmail = err.email?.message
        form.password.$error.serverPassword = err.password?.message

  $scope.loginOauth = (provider) ->
    $window.location.href =  '/auth/' + provider
