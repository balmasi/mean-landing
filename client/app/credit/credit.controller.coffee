'use strict'

angular.module 'taskyApp'
.controller 'CreditCtrl', ($scope, account, Payment, toastr, $state) ->
  $scope.pageVariables.pageClass = 'page-credits'

  $scope.packages = [
    name: 'small'
    credits: 5
    price: 10
    ppc: 2
  ,
    name: 'large'
    credits: 20
    price: 35
    ppc: 1.75
  ,
    name: 'large'
    credits: 50
    price: 80
    ppc: 1.6
  ]

  $scope.buy = (pack, e) ->
    handler = StripeCheckout.configure
      key: 'pk_test_eCdeZLHKYQbI6rsnCKWzVvED',
      token: (token) ->
        Payment.charge
          proId: account._id
          token: token.id
          pack: pack
          description: "#{account.email} buying #{pack.credits} tasky credits"
        .then (res) ->
          toastr.success "You now have #{res.data.credits} credits!\n Start quoting!"
          $state.go "pro"


    handler.open
      name: 'Tasky',
      description: pack.credits + ' Credits',
      amount: pack.price*100
      email: account.email

    e.preventDefault()
    $scope.$on '$stateChangeStart', ->
      handler.close()