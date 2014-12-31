'use strict'

angular.module 'taskyApp'
.controller 'TaskCtrl', ($scope, requests, $state) ->
  $scope.pageVariables.pageClass = 'page-tasks'

  $scope.requests = requests

  $scope.hasQuotes = (r) ->
    r.quotes.length > 0

  $scope.goToQuotes = (r) ->
    return if not $scope.hasQuotes(r)
    q = r.quotes[0]
    $state.go 'quotes.offer',
      requestId: r._id
      offerId: q._id

  $scope.newRequest = ->
    $state.go 'search'

.controller 'QuotesCtrl', ($scope, request,  $state) ->
  $scope.pageVariables.pageClass = 'page-quotes'
  $scope.quotes = request.quotes
  $scope.rating = 4;


  $scope.category = request.category?.name

  $scope.go = (id) ->
    $state.go 'quotes.offer',
      offerId: id

.controller 'QuoteShowCtrl', ($scope, $stateParams, me, Quote, Request, toastr) ->

  $scope.quote = _.findWhere $scope.quotes , { _id: $stateParams.offerId }
  # Delete version since we dont have revision-sensitive operations
  delete $scope.quote.__v

  $scope.messages = $scope.quote.messages
  $scope.me = me

  $scope.replyClicked = false
  $scope.toggleReply = ->
    $scope.replyClicked = ! $scope.replyClicked

  $scope.hire = ->
    Quote.changeStatus $scope.quote, 'hired'
    .then (updatedQuote) ->
      $scope.quote.status = updatedQuote.status
      if updatedQuote.status == 'hired'
        Request.update
          id: $scope.quote.request
        ,
          status: 'fulfilled'
    .then ->
      toastr.success 'Accepted Offer', 'Hired'

  $scope.reject = ->
    Quote.changeStatus $scope.quote, 'rejected'
    .then (updatedQuote) ->
      $scope.quote.status = updatedQuote.status
      toastr.error 'Declined Offer'

  $scope.undoStatus = ->
    Quote.undoStatus $scope.quote
    .then (updatedQuote) ->
      if updatedQuote.status == 'pending'
        Request.update
          id: $scope.quote.request
        ,
          status: 'active'
      $scope.quote.status = updatedQuote.status


  getNameFromAccount = (account) ->
    account.firstName + ' ' + account.lastName

  $scope.isMine = (msg) ->
    msg.from is me._id

  $scope.getSender = (msg) ->
    myName = getNameFromAccount me
    bizName = getNameFromAccount $scope.quote.from
    if msg.from is me._id then myName else bizName

  $scope.addMessage = ->
    _messageAdded = yes
    newMessage =
      from: me._id
      message: $scope.newMessage

    Quote.addMessage
      id: $scope.quote._id
    ,
        newMessage
    .$promise.then (m) ->
      $scope.messages.push m
      $scope.newMessage = ''
      toastr.success 'Message Sent Successfuly'
    .catch (err) ->
      toastr.error 'Could not send your message'