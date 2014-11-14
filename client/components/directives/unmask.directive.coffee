'use strict'

angular.module 'taskyApp'
.directive 'unmask', () ->
  # A function that masks every character except last one. TODO: Make advanced masker
  maskTillLast = (val) ->
    strLen = val.length
    return Array(strLen).join("●") + val.slice(strLen-1,strLen)

  {
    restrict: 'AE',
    require: '?ngModel',
    template: '''
      <div class="clearfix" style="position: relative">
        <input name="password" class="form-control" type="{{textType}}"/>
        <i
          class="fa fa-eye-slash"
          ng-click="toggleMask()"
        ></i>
      </div>
    ''',
    link: (scope, elem, attrs, ngModel) ->
      # if ng-model isn't set
      if not ngModel?
        return undefined

      $input = elem.find 'input'

      scope.textType = 'password'
      scope.toggleMask = () ->
        scope.textType =  if (scope.textType == 'password') then 'text' else 'password'
        return

      $input.on 'keyup', (e) ->
        scope.$apply ->
          ngModel.$setViewValue $input.val()


  }