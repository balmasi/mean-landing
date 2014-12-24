'use strict'

angular.module 'taskyApp'
.directive 'textSpinner', ($interval, $animate) ->
  template: '
    <span class="spinner-text-item spinner-text-first"></span>
    <span class="spinner-text-item spinner-text-second"></span>'
  restrict: 'EA'
  scope:
    items: '=textSpinner'
  link: (scope, element, attrs) ->
    first = element.find '.spinner-text-first'
    second = element.find '.spinner-text-second'

    selectedIndex = 0
    selectNewText = ->
      selectedIndex = (selectedIndex+1) % scope.items.length
      scope.items[selectedIndex]

    newText = scope.items[selectedIndex]
    first.text newText

    $interval ->
      newText = selectNewText()
      second.text newText
      $animate.leave(first)
      $animate.enter(second, element)
      [first, second] = [second, first]
    ,
      2000