'use strict'

angular.module 'taskyApp'
.config ($stateProvider) ->


  $stateProvider
  .state 'settings',
    url: '/settings'
    templateUrl: 'app/account/settings/settings.html'
    controller: 'SettingsCtrl'
    controllerAs: 'vm'
    authenticate: true
    resolve:
      myAccount: (Auth) ->
        Auth.getCurrentUser().$promise
