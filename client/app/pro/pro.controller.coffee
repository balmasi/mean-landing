'use strict'

angular.module 'taskyApp'
.controller 'ProCtrl', ($scope, account, $modal) ->
  $scope.pageVariables.pageClass = 'page-pro-requests'
  $scope.account = account
  $scope.account.credits = 'Unlimited' if account.credits == null
  $scope.requests = account.requests

  $scope.filters =
    active: true
    inactive: true
    fulfilled: true

  $scope.statusFilter = (req) ->
    $scope.filters[req.status]

  $scope.openQuoteModal = (request, e) ->
    e.stopPropagation()
    $modal.open
      templateUrl: 'app/pro/quote-modal.html'
      windowClass: 'quote-modal'
      controller: 'QuoteCtrl'
      resolve:
        request: () ->
          request
        account: () ->
          account
        myQuote: (Quote, $q) ->
          deferred = $q.defer()

          Quote.getByRequestAndPro
            requestId: request._id
            proId: account._id
          .$promise.then (quote) ->
            deferred.resolve quote
          ,
          (err) ->
            deferred.resolve null

          deferred.promise

.controller 'QuoteCtrl', ($scope, request, $modalInstance, Quote, toastr , myQuote , account , $state, User) ->
  $scope.category = request.category
  $scope.getCredits = ->
    account.credits

  $scope.hasNotQuoted = ->
    not myQuote?

  $scope.shouldBuyMoreCredits = ->
    $scope.needMoreCredits() && $scope.hasNotQuoted()

  $scope.needMoreCredits = ->
    account.credits isnt null and account.credits < request.category.credits_required

  $scope.canQuote = () ->
    not (myQuote? or $scope.needMoreCredits())

  $scope.newMessage =
    from: account._id

  $scope.messages = myQuote?.messages

  $scope.messagePlaceholder = if $scope.canQuote()
  then "Introduce yourself. Mention what makes you great and why they should hire you!"
  else "Send a message"

  $scope.isTheirs = (msg) ->
    msg.from isnt account._id


  getNameFromAccount = (a) ->
    a.firstName + ' ' + a.lastName

  $scope.getSender = (msg) ->
    myName = getNameFromAccount account
    custName = getNameFromAccount request.requested_by
    if msg.from is account._id then myName else custName

  $scope.sendMessage = ->
    Quote.addMessage
      id: myQuote._id
    ,
      $scope.newMessage
    .$promise.then (m) ->
      m.date = (new Date()).toISOString()
      $scope.messages.push m
      $scope.newMessage = ''
      toastr.success 'Message Sent Successfuly'
    .catch (err) ->
      toastr.error 'Could not send your message'

  requestIndex = account.requests.indexOf request

  $scope.newQuote =
    rate:
      method: 'hourly'

  $scope.sendOffer = () ->
    newQuote = new Quote
      credits_required: request.category.credits_required
      request: request._id
      from: account._id
      messages: [
        {
          from: $scope.newMessage.from
          message: $scope.newMessage.message
        }
      ]
      rate:
        method: $scope.newQuote.rate.method
        value: $scope.newQuote.rate.value

    newQuote.$save()
    .then (res) ->
      account.credits = res.credits
      account.requests[requestIndex].quotes.push res.request
      toastr.success 'Sent Quote Succesfully'
      $modalInstance.close(res.quote)
    .catch (err) ->
      console.error err

  $scope.goToCreditStore = ->
    $state.go 'buy-credits'
    $modalInstance.close()