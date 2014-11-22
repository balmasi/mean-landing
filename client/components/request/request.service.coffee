'use strict'

angular.module 'taskyApp'
.factory 'Request', ($resource) ->
  $resource '/api/requests/:id/',
    id: '@_id'
  ,
    update:
      method: 'PUT'

    getForm:
      method: 'GET'
      isArray: true
      url: '/api/requests/:category_route/form'