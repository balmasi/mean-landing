'use strict'

angular.module 'taskyApp'
.directive 'requestInfo', ($sce) ->
  restrict: 'EA'
  transclude: true
  scope:
    request: "="
  templateUrl: 'components/directives/forms/request-info/request-info.html'
  link: (scope, elem, attrs) ->
    scope.multipleChoices = (q) ->
      _.isArray q.answer

    return