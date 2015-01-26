'use strict'

angular.module 'taskyApp'
.config ($stateProvider) ->
  $stateProvider
  .state 'choose-account',
    url: '/signup'
    templateUrl: 'app/account/signup/choose-account.html'