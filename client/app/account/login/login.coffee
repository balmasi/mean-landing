'use strict'

angular.module 'taskyApp'
.config ($stateProvider) ->


  $stateProvider
  .state 'login',
    url: '/login'
    templateUrl: 'app/account/login/login.html'
    controller: 'LoginCtrl'