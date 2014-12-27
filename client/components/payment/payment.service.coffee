'use strict'

angular.module 'taskyApp'
.factory 'Payment', ($http) ->
  charge: ( options ) ->
    $http.post '/api/payments', options