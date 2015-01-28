'use strict'

angular.module 'taskyApp'
.factory 'Category', ($resource) ->
  $resource '/api/categories/:id/:controller',
    id: '@_id'
  ,
    update:
      method: 'PUT'

    getRootCategories:
      method: 'GET',
      url: '/api/categories/root',
      isArray: true,
      cache: true

    getAllServices:
      method: 'GET',
      isArray: true,
      cache: true
      url: '/api/categories/getAllServices'

    addToOtherServices:
      method: 'POST'
      params:
        controller: 'addToOtherServices'

    getSubcategories:
      method: 'GET'
      url: '/api/categories/:id/sub'
      isArray: true

    getByRoute:
      method: 'GET'
      url: '/api/categories/route/:route'
      cache: true

    search:
      method: 'GET'
      url: '/api/categories/search/:searchTerm'
      cache: true
      isArray: true