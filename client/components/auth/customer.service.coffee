'use strict'

angular.module 'taskyApp'
.factory 'Customer', ($resource) ->
  $resource '/api/customer/:id/:controller',
    id: '@_id'
  ,

    get:
      method: 'GET'
      params:
        id: 'me'

