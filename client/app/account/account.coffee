'use strict'

angular.module 'taskyApp'
.config ($stateProvider) ->
  $stateProvider
  .state 'login',
    url: '/login'
    templateUrl: 'app/account/login/login.html'
    controller: 'LoginCtrl'

  .state 'business-signup',
    url: '/signup/business'
    templateUrl: 'app/account/signup/business/signup.html'
    controller: 'SignupCtrl'

  .state 'customer-signup',
    url: '/signup/customer'
    templateUrl: 'app/account/signup/customer/signup.html'
    controller: 'SignupCtrl'

  .state 'settings',
    url: '/settings'
    templateUrl: 'app/account/settings/settings.html'
    controller: 'SettingsCtrl'
    authenticate: true
