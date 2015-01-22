'use strict'

angular.module 'taskyApp'
.factory 'Mail', ($http) ->

  Pros =
    basePath: '/api/mail/pros/hire'
    hire: (options)->
#     Options are:
#      pro = options.pro
#      request = options.request
      $http.post @basePath,
        options

  return {
    Pros: Pros
  }