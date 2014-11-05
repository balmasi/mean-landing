'use strict'

angular.module 'taskyApp'
.factory 'Business', ($resource) ->
  $resource '/api/businesses/:id/',
    id: '@_id'
  ,
    update:
      method: 'PUT'
