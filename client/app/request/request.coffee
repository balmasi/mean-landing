'use strict'

angular.module 'taskyApp'
.config ($stateProvider) ->
  $stateProvider.state 'request',
    url: '/customer/request'
    templateUrl: 'app/request/form.html'
    controller: 'RequestCtrl',
    nav: false
