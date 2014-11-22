'use strict'

angular.module 'taskyApp'
.factory 'Category', ($resource) ->
  $resource '/api/categories/:id/',
    id: '@_id'
  ,
    update:
      method: 'PUT'

    getRootCategories:
      method: 'GET',
      url: '/api/categories/root',
      isArray: true,
      cache: true

    getSubcategories:
      method: 'GET'
      url: '/api/categories/:id/sub'
      isArray: true
