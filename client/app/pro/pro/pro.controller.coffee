'use strict'

angular.module 'taskyApp'
.controller 'ProCtrl', ($scope, account, $modal) ->
  $scope.pageVariables.pageClass = 'page-pro-requests'
  $scope.account = account
  $scope.requests = account.requests

  $scope.openWorkspace = (request) ->
    $modal.open
      templateUrl: 'workspace-modal.html'
      windowClass: 'quote-modal'
      controller: ($scope, request, $modalInstance, Request, Quote, toastr , myQuote) ->
        if myQuote?
          $scope.messages = myQuote?.messages

        $scope.alreadyQuoted = () ->
          myQuote?

        $scope.messagePlaceholder = if $scope.alreadyQuoted()
        then "Send a message"
        else "Introduce yourself. Mention what makes you great and why they should hire you!"
        
        $scope.isMsgMine = (m) ->
          m.from == account._id

        $scope.sendMessage = ->
          newMessage =
            from: account._id
            message: $scope.newMessage

          Quote.addMessage
            id: myQuote._id
          ,
            newMessage
          .$promise.then (m) ->
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
            request: request._id
            from: account._id
            messages: [
              {
                from: account._id,
                message: $scope.newMessage
              }
            ]
            rate:
              method: $scope.newQuote.rate.method
              value: $scope.newQuote.rate.value

          newQuote.$save()
          .then (q) ->
            account.requests[requestIndex].quotes.push q
            toastr.success 'Sent Quote Succesfully'
            $modalInstance.close(q)
          .catch (err) ->
            console.error err

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
              deferred.resolve undefined

          deferred.promise

      size: 'lg'