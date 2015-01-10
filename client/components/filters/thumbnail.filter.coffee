'use strict'

angular.module 'taskyApp'
.filter 'thumbnail', ->
  (imageUrl) ->
    return 'assets/images/profiles/empty-profile.png' if !imageUrl? or imageUrl == ''
    return imageUrl if !!~imageUrl.indexOf '/thumb'
    return imageUrl + '/thumb'