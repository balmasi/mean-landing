'use strict'

angular.module 'taskyApp'
.config ($stateProvider) ->
  $stateProvider
  .state 'customer-signup',
    url: '/signup/customer'
    templateUrl: 'app/account/signup/customer/signup.html'
    controller: 'CustomerSignupCtrl'
