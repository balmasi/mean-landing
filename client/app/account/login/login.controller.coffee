'use strict'

angular.module 'taskyApp'
.controller 'LoginCtrl', ($scope, Auth, $state,  $window) ->
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
