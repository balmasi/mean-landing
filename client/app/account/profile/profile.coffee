'use strict'

angular.module 'taskyApp'
.config ($stateProvider) ->


  $stateProvider
  .state 'profile',
    url: '/pro/:proId'
    templateUrl: 'app/account/profile/profile.html'
    controller: 'ProfileCtrl'
    controllerAs: 'vm'
    resolve:
      pro: (Pro, $stateParams) ->
        Pro.get
          id: $stateParams.proId
        .$promise
      me: (Auth) ->
        Auth.getCurrentUser().$promise