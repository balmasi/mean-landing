'use strict'

angular.module 'taskyApp'
.config ($stateProvider) ->
  $stateProvider.state 'request',
    url: '/request/:categoryRoute'
    templateUrl: 'app/request/form.html'
    controller: 'RequestCtrl',
    nav: false,
    resolve:
      user: (Auth) ->
        Auth.getCurrentUser()
      category: (Category, $stateParams) ->
        Category.getByRoute
          route: $stateParams.categoryRoute
        .$promise