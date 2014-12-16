'use strict'

angular.module 'taskyApp'
.controller 'TaskCtrl', ($scope, requests, $state) ->
  # This controller LISTS the Customer's outstanding Tasks
  $scope.pageVariables.pageClass = 'page-tasks'
  $scope.requests = requests

  $scope.goToQuotes = (r) ->
    $state.go 'quotes.offer',
      requestId: r._id
      offerId: 1

.controller 'QuotesCtrl', ($scope, request,  $state) ->
  $scope.pageVariables.pageClass = 'page-quotes'
  $scope.quotes = [
    {
      _id: 1,
      message: 'Hi1',
      rating: 4.5,
      name: 'Borna Biz1'
      img: '/assets/images/yeoman.png'
    },
    {
      _id: 2,
      message: 'Hi2',
      rating: 3.5,
      name: 'Borna Biz2'
      img: '/assets/images/yeoman.png'
    },
    {
      _id: 3
      message: 'Hi3',
      rating: 4.1,
      name: 'Borna Biz3'
      img: '/assets/images/yeoman.png'
    }
  ]

  $scope.category = request.category?.name

  $scope.go = (id) ->
    $state.go 'quotes.offer',
      offerId: id

.controller 'QuoteShowCtrl', ($scope, $stateParams) ->
  $scope.quote = $scope.quotes[$stateParams.offerId - 1]