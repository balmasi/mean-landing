'use strict'

angular.module 'taskyApp'
.controller 'CustomerSignupCtrl', ($scope, Auth, $location, $window) ->
  $scope.pageVariables.pageClass = 'page-signup'
  $scope.user = {
    _type: 'customer'
  }
  $scope.errors = {}
  $scope.register = (form) ->
    $scope.submitted = true

    if form.$valid
      # Account created, redirect to home
      Auth.createUser $scope.user

      .then ->
        $location.path '/'

      .catch (err) ->
        err = err.data
        $scope.errors = {}

        # Update validity of form fields that match the mongoose errors
        angular.forEach err.errors, (error, field) ->
          form[field].$setValidity 'mongoose', false
          $scope.errors[field] = error.message

  $scope.loginOauth = (provider) ->
    $window.location.href = '/auth/' + provider
