'use strict'

angular.module 'taskyApp'
.controller 'TaskCtrl', ($scope, requests, $state) ->
  $scope.pageVariables.pageClass = 'page-tasks'

  $scope.incoming_requests = requests

  $scope.hasQuotes = (r) ->
    r.quotes.length > 0

  $scope.goToQuotes = (r) ->
    return if not $scope.hasQuotes(r)
    q = r.quotes[0]
    $state.go 'quotes.offer',
      requestId: r._id
      offerId: q._id

  $scope.newRequest = ->
    $state.go 'home'

.controller 'QuotesCtrl', ($scope, request,  $state) ->
  $scope.pageVariables.pageClass = 'page-quotes'
  $scope.quotes = request.quotes
  $scope.rating = 4;


  $scope.category = request.category?.name

  $scope.go = (q) ->
    $state.go 'quotes.offer',
      offerId: q._id

.controller 'QuoteShowCtrl', ($scope, $stateParams, me, Quote, Request, toastr, request, $state, Mail) ->

  $scope.quote = _.findWhere $scope.quotes , { _id: $stateParams.offerId }
  # Delete version since we dont have revision-sensitive operations
  delete $scope.quote.__v

  $scope.messages = $scope.quote.messages
  $scope.me = me
  $scope.pro = $scope.quote.from

  $scope.goToProfile = (pro) ->
    $state.go 'profile',
      proId: pro._id

  $scope.replyClicked = false
  $scope.toggleReply = ->
    $scope.replyClicked = ! $scope.replyClicked

  $scope.$on '$stateChangeSuccess', ->
    $scope.quote.tab_active = true


  $scope.hire = ->
    Quote.changeStatus $scope.quote, 'hired', $scope.quotes
    .then ->
      toastr.success 'Accepted Offer', 'Hired'
    .then ->
      Mail.Pros.hire
        pro: $scope.pro
        request: request


  $scope.reject = ->
    Quote.changeStatus $scope.quote, 'rejected', $scope.quotes
    .then ->
      toastr.error 'Declined Offer'

  $scope.undoStatus = ->
    Quote.undoStatus $scope.quote, $scope.quotes, request

  getNameFromAccount = (account) ->
    account.firstName + ' ' + account.lastName

  $scope.isMine = (msg) ->
    msg.from is me._id

  $scope.getSender = (msg) ->
    myName = getNameFromAccount me
    bizName = getNameFromAccount $scope.pro
    if msg.from is me._id then myName else bizName

  $scope.getMsgThumb = (m) ->
    if m.from is me._id then me.getThumbnailUrl() else $scope.pro.image?.thumb

  $scope.addMessage = ->
    newMessage =
      from: me._id
      message: $scope.newMessage
      date: Date.now()

    Quote.addMessage
      id: $scope.quote._id
    ,
        newMessage
    .$promise.then (m) ->
      $scope.messages.push newMessage
      $scope.newMessage = ''
      toastr.success 'Message Sent Successfully'
    .catch (err) ->
      toastr.error 'Could not send your message'