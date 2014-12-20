'use strict'

angular.module 'taskyApp'
.config ($stateProvider) ->
  $stateProvider

  .state 'tasks', #State that lists customer's requests
    url: '/tasks'
    templateUrl: 'app/task/tasks.html'
    controller: 'TaskCtrl'
    authenticate: true
    resolve:
    # Gets a list of Customer's requests
      requests: ($http) ->
        $http.get '/api/requests/me'
        .then (response) ->
          return response.data

  .state 'quotes', # Parent state for customer quotes Tab View
    url: '/quotes/:requestId'
    templateUrl: 'app/task/quotes.html'
    abstract: true
    controller: 'QuotesCtrl'
    resolve:
      request: (Request, $stateParams) ->
        Request.get({ id: $stateParams.requestId }).$promise

  .state 'quotes.offer', #Child State for Customer Quote Tab View
    url: '/:offerId'
    templateUrl: 'app/task/offer.html'
    controller: 'QuoteShowCtrl'
    resolve:
      me: (User) ->
        User.get().$promise
