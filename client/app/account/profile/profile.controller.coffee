'use strict'

angular.module 'taskyApp'
.controller 'ProfileCtrl', ($scope, $state, pro, me, Auth, Pro, toastr) ->
  $scope.pageVariables.pageClass = 'page-profile'

  vm = this

  vm.pro = pro
  vm.loggedIn = Auth.isLoggedIn()
  vm.loggedInUser = me

  # === Reviews

  vm.reviewOpen = false
  vm.newReview = ->
    vm.reviewOpen = true

  vm.submitReview =  ->
    Pro.newReview
      id: pro._id
    ,
      vm.newReview
    .$promise
    .then (data) ->
      vm.pro.feedback.reviews.push data.review
      vm.pro.feedback.average_rating = data.rating
      vm.resetReview()
      vm.reviewOpen = false

    .catch (err) ->
      toastr.error 'There was a problem adding your review :('

  vm.resetReview = () ->
    vm.newReview =
      reviewer_name: me?.firstName + " " + me?.lastName
      reviewer_thumb: me?.image?.thumb
      from: me?._id
      rating: 0
      comment: ''


  vm.resetReview()
  return
