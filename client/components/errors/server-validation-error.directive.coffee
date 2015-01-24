'use strict'

###
Removes server error from a field defined on the attribute
###
angular.module 'taskyApp'
.directive 'serverValidationError', ->
  restrict: 'A'
  require: 'ngModel'
  link: (scope, element, attrs, ngModel) ->
    element.on 'keydown', ->
      ngModel.$setValidity attrs.serverValidationError, true