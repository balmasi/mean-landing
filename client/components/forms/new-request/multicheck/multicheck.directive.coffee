'use strict'

angular.module 'taskyApp'
.directive 'multicheck', ->
  scope:
    requireOne: '=requireOne'
    question: "="
  restrict: 'EA'
  templateUrl: 'components/forms/new-request/multicheck/multicheck.html'
  link: (scope, element, attrs) ->
    scope.anySelected = ->
      if scope.requireOne
        return !(element.find('input[type="checkbox"]:checked').length)