'use strict'

angular.module 'taskyApp'
.config ($stateProvider, sparkActionProps) ->
  $stateProvider.state 'home',
    url: '/'
    views:
      'search@home':
        controller: 'SearchCtrl'
        templateUrl: 'app/search/search.html'

      '':
        templateUrl: 'app/home/home.html'
        controller: 'HomeCtrl'
        controllerAs: 'vm'

  .state 'pros-info',
    templateUrl: 'app/home/pros/pros-info.html'
    url: '/pros/how-tasky-works'

  .state 'about-credits',
    templateUrl: 'app/home/pros/about-credits.html'
    url: '/pros/about-credits'


  pathIsHome = -> !!~['', '/'].indexOf window.location.pathname
  angular.extend sparkActionProps,
    downStagger:
      down: (o)->
        staggerMs = 0
        staggerDiff = 100
        _.each @element.find(o.val), (elem) ->
          setTimeout ->
            $(elem).addClass 'animated fadeIn'
          ,
            staggerMs = staggerMs + staggerDiff

    highlightHomeHeader:
      down: ->
        @element.addClass 'highlight' if pathIsHome()

      up: ->
        @element.removeClass 'highlight' if pathIsHome()