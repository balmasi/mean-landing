'use strict'

angular.module 'taskyApp'
.directive 'preloader', ($timeout, $animate, $document, $rootScope, $cookieStore) ->
  restrict: 'AE'
  template: '<div id="preloader" ng-transclude></div>'
  transclude: true
  replace: true
  link: (scope, iElem) ->
    if $cookieStore.get 'splash'
      return $timeout ->
        $rootScope.$broadcast 'preloader-hidden'
      , 100


    body = $document[0].body
    show = ->
      $(body).css 'overflow', 'hidden'
      iElem.css('display', 'block')

    hide = ->
      $(body).css 'overflow', 'auto'
      $animate.addClass iElem, 'animated fadeOut'
      .then ->
        iElem.remove()
        $rootScope.$broadcast 'preloader-hidden'
        $cookieStore.put 'splash', 1

    show()
    $timeout hide, 3000

.directive 'afterPreloader', ->
  restrict: 'A'
  scope:
    callback: '&afterPreloader'
  link: (scope, iElem) ->
    scope.$on 'preloader-hidden', ->
      handler = scope.callback()
      handler(iElem)