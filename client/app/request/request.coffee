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
      FormData: (Request, $stateParams) ->
        Request.getForm
          category_route: $stateParams.categoryRoute
        .$promise
