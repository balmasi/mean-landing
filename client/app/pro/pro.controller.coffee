'use strict'

angular.module 'taskyApp'
.controller 'ProCtrl', ($scope, account, $modal, quotes, Pro, $state) ->
  $scope.pageVariables.pageClass = 'page-pro-requests'
  $scope.account = account
  $scope.account.credits = 'Unlimited' if account?.credits == null
  $scope.requests = account.requests

  $scope.filters =
    noquote: true
    pending: true
    hired: true
    rejected: true

  _getQuoteForRequest = (r) ->
    _(quotes).findWhere
      request: r._id

  _getRequestForQuote = (q) ->
    _($scope.requests).findWhere
      _id: q.request

  _(quotes).each (q) ->
    r = _getRequestForQuote q
    r.quoteStatus = q.status if r?

  $scope.statusFilter = (req) ->
    return $scope.filters.noquote unless req.quoteStatus?
    $scope.filters[req.quoteStatus]

  $scope.haveSentQuote = (req) ->
    req.quoteStatus?

  $scope.multipleChoices = (q) ->
    _.isArray q.answer

  $scope.openQuoteModal = (request, e) ->
    e.stopPropagation()
    $modal.open
      templateUrl: 'app/pro/quote-modal.html'
      windowClass: 'quote-modal'
      controller: 'QuoteCtrl'
      size: 'lg'
      resolve:
        request: () ->
          request
        account: () ->
          account
        myQuote: ->
          Pro.myQuotes().$promise
          .then (qs) ->
            quotes = qs
            _getQuoteForRequest request

.controller 'QuoteCtrl', ($scope, request, $modalInstance, Quote, toastr , myQuote , account , $state) ->
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


  # Message Logic
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
      request.quoteStatus = 'pending'
      request.quotes.push res.quote
      toastr.success 'Sent Quote Succesfully'
      $modalInstance.close(res.quote)
    .catch (err) ->
      console.error err

  $scope.goToCreditStore = ->
    $state.go 'buy-credits'
    $modalInstance.close()