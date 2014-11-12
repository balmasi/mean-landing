'use strict'

angular.module 'taskyApp'
.directive 'unmask', () ->
  # A function that masks every character except last one. TODO: Make advanced masker
  maskTillLast = (val) ->
    strLen = val.length
    return Array(strLen).join("●") + val.slice(strLen-1,strLen)

  {
    restrict: 'AE',
    template: '''
      <div class="clearfix" style="position: relative">
        <input class="form-control" type="{{textType}}" ng-model="password" />
        <i
          class="fa fa-eye-slash"
          ng-click="toggleMask()"
        ></i>
      </div>
    ''',
    link: (scope, elem, attrs, ngModelCtrl) ->
      scope.textType = 'password'
      scope.toggleMask = () ->
        scope.textType =  if (scope.textType == 'password') then 'text' else 'password'
        return
  }