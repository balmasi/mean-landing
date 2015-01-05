'use strict'

angular.module 'taskyApp'
.directive 'disableClick', ->
  restrict: 'A'
  scope:
    disableClick: '='
  link: (scope, element, attrs) ->
    stopClick = (e) ->
      e.preventDefault()
      false

    scope.$watch 'disableClick', ->
      if scope.disableClick
        element.css 'pointer-events', 'auto'
        element.on 'click', stopClick
      else
        element.off 'click', stopClick
