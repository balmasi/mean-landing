'use strict'

angular.module 'taskyApp'
.config ($stateProvider) ->
  $stateProvider.state 'buy-credits',
    url: '/credits'
    templateUrl: 'app/credit/store.html'
    controller: 'CreditCtrl'
    resolve:
      account: (Auth) ->
        Auth.getCurrentUser()