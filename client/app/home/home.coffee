'use strict'

angular.module 'taskyApp'
.config ($stateProvider) ->
  $stateProvider.state 'home',
    url: '/'
    templateUrl: 'app/home/home.html'
    controller: 'HomeCtrl'
