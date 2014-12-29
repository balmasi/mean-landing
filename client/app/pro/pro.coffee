'use strict'

angular.module 'taskyApp'
.config ($stateProvider) ->
  $stateProvider.state 'pro',
    url: '/pro'
    templateUrl: 'app/pro/pro.html'
    controller: 'ProCtrl'
    authenticate: true
    resolve:
      account: (Auth) ->
        Auth.getCurrentUser()