'use strict'

angular.module 'taskyApp'
.factory 'User', ($resource, $filter) ->
  User = $resource '/api/users/:id/:controller',
    id: '@_id'
  ,
    changePassword:
      method: 'PUT'
      params:
        controller: 'password'

    get:
      method: 'GET'
      params:
        id: 'me'

  # Only call this on prepopulated User model
  User.prototype.getThumbnailUrl = ->
    if not this.image? then '' else this.image.thumb



  User.prototype.getImageUrl = ->
    return '' unless this.image?
    this.image.url

  User