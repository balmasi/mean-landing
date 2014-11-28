'use strict'

angular.module 'taskyApp'
.config ($stateProvider) ->
  $stateProvider.state 'task',
    url: '/tasks'
    templateUrl: 'app/task/list.html'
    controller: 'TaskCtrl'
    nav: true