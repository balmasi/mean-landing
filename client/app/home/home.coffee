'use strict'

angular.module 'taskyApp'
.config ($stateProvider, sparkActionProps) ->
  $stateProvider.state 'home',
    url: '/'
    nav: ['transparent', 'home']
    views:
      'search@home':
        controller: 'SearchCtrl'
        templateUrl: 'app/search/search.html'

      '':
        templateUrl: 'app/home/home.html'
        controller: 'HomeCtrl'
        controllerAs: 'vm'

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