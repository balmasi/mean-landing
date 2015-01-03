'use strict'

angular.module 'taskyApp'
.config ($stateProvider) ->
  $stateProvider.state 'pro',
    url: '/pro?refreshQuotes'
    templateUrl: 'app/pro/pro.html'
    controller: 'ProCtrl'
    authenticate: true
    resolve:
      account: (Auth, $state, $stateParams) ->
        refresh = $stateParams.refreshQuotes
        Auth.getCurrentUser(refresh).$promise
      quotes: (Pro) ->
        Pro.myQuotes().$promise