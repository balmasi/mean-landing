'use strict'

angular.module 'taskyApp'
.directive 'travelCheckboxes', ->
  scope:
    category: "="
    travel: "="
  restrict: 'EA'
  templateUrl: 'components/directives/forms/new-request/travel-checkboxes/travel-checkboxes.html'
  link: (scope, element, attrs) ->
    numTypes = scope.category.travel_types.length

    if numTypes is 1
      scope.travel[scope.category.travel_types[0]] = true
      scope.travelSet = true
      return

    scope.noneSelected = ->
      numChecked = element.find('input[type="checkbox"]:checked').length
      return numChecked is 0

    scope.hasTravelType = (type) ->
      !!~scope.category.travel_types.indexOf type

    # km's willing to travel (customer)
    scope.travelOptions = [5, 10, 25, 50]