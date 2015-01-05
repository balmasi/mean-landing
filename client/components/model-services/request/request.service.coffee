'use strict'

angular.module 'taskyApp'
.factory 'Request', ($resource) ->
  $resource '/api/requests/:id/',
    id: '@_id'
  ,
    update:
      method: 'PUT'