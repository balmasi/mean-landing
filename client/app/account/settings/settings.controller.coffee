'use strict'

angular.module 'taskyApp'
.controller 'SettingsCtrl', ($scope, User, Auth, $upload, $rootScope, toastr) ->
  $scope.pageVariables.pageClass = 'page-settings'
  vm = this
  vm.uploading = false

  $scope.me = Auth.getCurrentUser()

  vm.password =
    oldPassword: null
    newPassword: null

  vm.updateUser = (form) ->
    return if form.$invalid
    # protect a bit against hackers
    userCopy = _.pick $scope.me, ['_id', 'firstName', 'lastName', 'phone', 'email', 'name', 'website', 'description']
    User.update userCopy
    .$promise
    .then (data) ->
      toastr.success 'Updated User'


  vm.changePassword = (form) ->
    $scope.submitted = true

    if form.$valid
      Auth.changePassword vm.password.oldPassword, vm.password.newPassword
      .then ->
        toastr.success 'Password Changed!'
        vm.password.oldPassword = vm.password.newPassword

      .catch ->
        form.password.$setValidity 'mongoose', false


  $scope.uploadImage = (files, e) ->
    file = files[0]
    vm.uploading = true

    $upload.upload
      url: '/api/users/me/image'
      method: 'POST'
      data :
        'Content-Type': if file.type != '' then file.type else 'application/octet-stream'
        filename: file.name
      file: file
      fileFormDataName: 'profile'
    .success (data) ->
      $scope.me.image = {} unless $scope.me.image?
      $scope.me.image.url = data.url
      $scope.me.image.thumb = data.thumbUrl

      $rootScope.$emit 'profilePicChanged',
        url: data.url
        thumb: data.thumbUrl

    .error (err) ->
      console.error err
    .finally ->
      vm.uploading = false

  vm