'use strict'

angular.module 'taskyApp'
.factory 'Quote', ($resource) ->
  $resource '/api/quotes/:id/',
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