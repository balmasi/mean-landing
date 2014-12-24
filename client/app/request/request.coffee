'use strict'

angular.module 'taskyApp'
.config ($stateProvider) ->
  $stateProvider.state 'request',
    url: '/request/:categoryRoute/:latLng'
    templateUrl: 'app/request/form.html'
    controller: 'RequestCtrl',
    nav: false,
    resolve:
      user: (Auth) ->
        Auth.getCurrentUser().$promise
      category: (Category, $stateParams) ->
        Category.getByRoute
          route: $stateParams.categoryRoute
        .$promise