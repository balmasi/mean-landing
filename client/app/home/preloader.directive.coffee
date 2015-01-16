'use strict'

angular.module 'taskyApp'
.directive 'preloader', ($timeout, $animate, $document, $rootScope) ->
  restrict: 'AE'
  template: '<div id="preloader" ng-transclude></div>'
  transclude: true
  replace: true
  link: (scope, iElem) ->
    body = $document[0].body
    show = ->
      $(body).css 'overflow', 'hidden'
      iElem.show()

    hide = ->
      $(body).css 'overflow', 'auto'
      $animate.addClass iElem, 'animated fadeOut'
      .then ->
        iElem.remove()
        $rootScope.$broadcast 'preloader-hidden'

    show()
    $timeout hide, 2000

.directive 'afterPreloader', ->
  restrict: 'A'
  scope:
    callback: '&afterPreloader'
  link: (scope, iElem) ->
    scope.$on 'preloader-hidden', ->
      handler = scope.callback()
      handler(iElem)