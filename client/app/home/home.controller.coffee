'use strict'

angular.module 'taskyApp'

.controller 'HomeCtrl', ($scope, $http, $rootScope, $detect, sparkSetup) ->
  $scope.pageVariables.pageClass = 'page-home'

  vm = this

  sparkSetup.disableSparkScrollAnimate = true if $detect.isMobile()

  $scope.spinnerTexts = [
    'Cleaner'
    'Mover'
    'Painter'
  ]

  $scope.$on '$stateChangeStart', ->
    $scope.pageVariables.pageClass = ''

  # Slides in the header module and
  # sets ready status to ready for SEO pre-renderer
  $scope.pageIsReady = (elem) ->
    elem.addClass 'animated fadeInDown'
    $rootScope.readyStatus = 'ready'