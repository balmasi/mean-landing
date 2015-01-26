'use strict'

angular.module 'taskyApp'

.controller 'AboutCreditsCtrl', (Auth) ->

  vm = this
  vm.user = Auth.getCurrentUser()

  vm.hasLowCredits = ->
    return false if vm.user.credits is null #infinite credits
    if vm.user._accountType is 'Pro' and vm.user.credits < 3
      return true