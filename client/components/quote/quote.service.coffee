'use strict'

angular.module 'taskyApp'
.factory 'Quote', ($resource) ->
  QuoteService = $resource '/api/quotes/:id/',
    id: '@_id'
  ,
    update:
      method: 'PUT'

    getByRequestAndPro:
      method: 'GET'
      url: '/api/quotes/request/:requestId/pro/:proId'

    addMessage:
      method: 'POST'
      url: '/api/quotes/:id/messages'


  QuoteService.changeStatus = (quote, newStatus) ->
    return if newStatus not in ['pending', 'hired', 'rejected']
    if newStatus isnt quote.last_status
      quoteCopy = angular.copy quote
      quoteCopy.from = quote.from._id
      quoteCopy.last_status = quote.status
      quoteCopy.status = newStatus
      quoteCopy.status_changed_on = new Date()
      return this.update({ id: quote._id} , quoteCopy).$promise
    #TODO: Return promise here

  QuoteService.undoStatus = (quote) ->
    if quote.last_status?
      quoteCopy = angular.copy quote
      quoteCopy.from = quote.from._id
      quoteCopy.status = quote.last_status
      quoteCopy.last_status = undefined if quote.status is 'pending'
      quoteCopy.status_changed_on = new Date()
      return this.update({ id: quote._id} , quoteCopy).$promise
    #TODO: return promise here.

  return QuoteService



