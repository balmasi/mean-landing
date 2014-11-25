'use strict'

angular.module 'taskyApp'
.factory 'Pro', ($resource) ->
  $resource '/api/pro/:id/:controller',
    id: '@_id'
  ,

    get:
      method: 'GET'
      params:
        id: 'me'