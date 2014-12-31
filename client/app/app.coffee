'use strict'

angular.module 'taskyApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngAnimate',
  'toastr',
  'ui.router',
  'ngMessages',
  'ui.bootstrap',
  'yaru22.angular-timeago',
  'btford.socket-io',
]
.config ($urlRouterProvider, $locationProvider, $httpProvider, toastrConfig) ->

  $urlRouterProvider
  .otherwise '/'

  $locationProvider.html5Mode true
  $httpProvider.interceptors.push 'authInterceptor'
  angular.extend toastrConfig,
    positionClass: 'toast-bottom-right',
    tapToDismiss: true,
    timeOut: 4000,
    toastClass: 'toastr'


.factory 'authInterceptor', ($rootScope, $q, $cookieStore, $location) ->
  # Add authorization token to headers
  request: (config) ->
    config.headers = config.headers or {}
    config.headers.Authorization = 'Bearer ' + $cookieStore.get 'token' if $cookieStore.get 'token'
    config

  # Intercept 401s and redirect you to login
  responseError: (response) ->
    if response.status is 401
      # remove any stale tokens
      $cookieStore.remove 'token'
      $location.path '/login'

    $q.reject response

.run ($rootScope, $location, Auth) ->
  # Redirect to login if route requires auth and you're not logged in
  $rootScope.$on '$stateChangeStart', (event, next) ->
    Auth.isLoggedInAsync (loggedIn) ->
      return if next.name in ['customer-signup', 'login', 'pro-signup.category']
      $location.path "/login" if next.authenticate and not loggedIn
