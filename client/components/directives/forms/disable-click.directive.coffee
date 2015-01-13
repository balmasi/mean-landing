'use strict'

angular.module 'taskyApp'
.directive 'disableClick', ->
  restrict: 'A'
  scope:
    disableClick: '='
    disabledTooltip: '@'
  link: (scope, element, attrs) ->
    stopClick = (e) ->
      e.preventDefault()
      false

    scope.$watch 'disableClick', ->
      if scope.disableClick
        element.css 'pointer-events', 'auto'
        element.addClass 'disabled'
        element.on 'click', stopClick
      else
        element.removeClass 'disabled'
        element.off 'click', stopClick
