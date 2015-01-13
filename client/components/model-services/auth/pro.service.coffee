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

    myQuotes:
      method: 'GET'
      params:
        id: 'me'
        controller: 'quotes'
      isArray: yes

    newReview:
      method: 'POST'
      params:
        controller: 'review'