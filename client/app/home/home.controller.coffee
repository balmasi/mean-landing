'use strict'

angular.module 'taskyApp'

.controller 'HomeCtrl', ($scope, $http, $rootScope) ->
  $scope.pageVariables.pageClass = 'page-home'

  vm = this
  $scope.spinnerTexts = [
    'Cleaner'
    'Mover'
    'Painter'
  ]

  # Slides in the header module and
  # sets ready status to ready for SEO pre-renderer
  $scope.pageIsReady = (elem) ->
    elem.addClass 'animated fadeInDown'
    $rootScope.readyStatus = 'ready'