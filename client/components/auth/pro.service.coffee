'use strict'

angular.module 'taskyApp'
.factory 'Pro', ($resource) ->
  $resource '/api/pros/:id/:controller',
    id: '@_id'
  ,

    get:
      method: 'GET'
      params:
        id: 'me'