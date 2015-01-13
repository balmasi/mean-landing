'use strict'

angular.module 'taskyApp'
.directive "disableAnimate", ($animate)->
  return ($scope, $element)->
    $animate.enabled false, $element