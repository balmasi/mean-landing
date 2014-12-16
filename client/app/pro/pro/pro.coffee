'use strict'

angular.module 'taskyApp'
.config ($stateProvider) ->
  $stateProvider.state 'pro',
    url: '/pro'
    templateUrl: 'app/pro/pro/pro.html'
    controller: 'ProCtrl'
    resolve:
      account: (Auth) ->
        Auth.getCurrentUser()