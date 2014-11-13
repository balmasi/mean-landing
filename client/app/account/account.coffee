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
    controller: 'BusinessSignupCtrl'

  .state 'business-signup.category',
    url: '/category'
    templateUrl: 'app/account/signup/business/_category.html'


  .state 'business-signup.services',
    url: '/services'
    templateUrl: 'app/account/signup/business/_services.html'

  .state 'business-signup.location',
    url: '/location'
    templateUrl: 'app/account/signup/business/_location.html'

  .state 'business-signup.description', #BName, Website, Description
    url: '/description'
    templateUrl: 'app/account/signup/business/_description.html'

  .state 'business-signup.account', #Name, Email, Number(txt) ,PAss?
    url: '/contact'
    templateUrl: 'app/account/signup/business/_account.html'

  .state 'customer-signup',
    url: '/signup/customer'
    templateUrl: 'app/account/signup/customer/signup.html'
    controller: 'SignupCtrl'

  .state 'settings',
    url: '/settings'
    templateUrl: 'app/account/settings/settings.html'
    controller: 'SettingsCtrl'
    authenticate: true
