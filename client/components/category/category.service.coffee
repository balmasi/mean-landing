'use strict'

angular.module 'taskyApp'
.factory 'Category', ($resource) ->
  categories = [
    { id: 1, label: 'Cleaning' }, { id: 2, label: 'Moving' }
  ]

  services =
    1: ['House Cleaning',
    'Carpet Cleaning',
    'Gutter Cleaning',
    'Office Cleaning']

    2: ['Moving Within The City',
      'Moving Between Cities']

  getCategories: ->
    categories

  getServices: (categoryId) ->
    services[categoryId]