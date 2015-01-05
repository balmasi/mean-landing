'use strict'

angular.module 'taskyApp'
.factory 'Quote', ($resource, $q, Request) ->
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


  QuoteService.changeStatus = (quote, newStatus, quotes) ->
    return if newStatus not in ['hired', 'rejected']
    thisUpdate =
      status: newStatus
      status_changed_on: new Date()
      last_status: quote.status

    # If one is hired, everyone else is rejected. *1
    othersUpdate = _.cloneDeep thisUpdate
    othersUpdate.status = 'rejected'

    # ========  IF pro is HIRED
    if newStatus is 'hired'
      promises= []
      _(quotes).each (q) ->
        # set this status to hired
        # set all others rejected
        if q._id is quote._id
          promises.push QuoteService.update({ id: quote._id} , thisUpdate).$promise
        else
          othersUpdate.last_status = q.status
          promises.push QuoteService.update({ id: q._id} , othersUpdate).$promise

      $q.all(promises).then (updatedQuotes) ->
        _(updatedQuotes).each (q, idx) ->
          quotes[idx].status = q.status
      .then ->
        # set Request to inactive
        Request.update
          id: quote.request
        ,
          status: 'inactive'# update scope for all after everything resolves
        .$promise


    # ========== IF pro is REJECTED
    else
      QuoteService.update({ id: quote._id} , thisUpdate).$promise
      .then -> quote.status = newStatus


  QuoteService.undoStatus = (quote, quotes, request) ->
    everyUpdate =
      status: 'pending'
      status_changed_on: new Date()

    if quote.status is 'hired'
      promises= _(quotes).map (q) ->
        everyUpdate.status = q.last_status
        QuoteService.update({ id: q._id} , everyUpdate).$promise

      $q.all promises
        .then ->
          # set Request to active
          Request.update
            id: quote.request
          ,
            status: 'active'
          .$promise
        .then ->
          request.status = 'inactive'
          _(quotes).each (q) ->
            q.status = q.last_status

    else
      everyUpdate.status = 'pending'
      QuoteService.update({ id: quote._id} , everyUpdate).$promise
      .then ->
        quote.status = 'pending'



  return QuoteService



