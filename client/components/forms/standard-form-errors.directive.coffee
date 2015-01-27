'use strict'

angular.module 'taskyApp'
.directive 'standardFormErrors', ($sce) ->
  restrict: 'A'
  scope: true
  compile: (tElem, tAttr) ->
    name = tAttr.name
    formName = tElem.closest('form').attr('name')
    ngMessages = angular.element("
          <div name='#{name}'
            ng-if='#{formName}.#{name}.$dirty'
            ng-messages='#{formName}.#{name}.$error'
            class='form-error' role='alert'
            ng-messages-include='components/errors/standard-field.html'>
          </div>")

    if tAttr.standardFormErrors != ''
      errors = angular.fromJson tAttr.standardFormErrors
      angular.forEach errors, (v,k) ->
        ngMessages.append "<div ng-message='#{k}'>#{v}</div>"

    tElem.after ngMessages