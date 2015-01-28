'use strict'

angular.module 'taskyApp'
.controller 'SettingsCtrl', ($scope, User, Auth, $upload, $rootScope, toastr, myAccount) ->
  $scope.pageVariables.pageClass = 'page-settings'
  vm = this
  vm.uploading = false

  vm.me = angular.copy myAccount

  vm.password =
    oldPassword: null
    newPassword: null

  vm.updateUser = (form) ->
    return if form.$invalid
    # protect a bit against hackers
    userCopy = _.pick vm.me, ['_id', 'firstName', 'lastName', 'phone', 'email', 'name', 'website', 'description', 'preferences']
    User.update userCopy
    .$promise
    .then (data) ->
      toastr.success 'Updated User'
      $rootScope.$broadcast 'userUpdated'
    .catch (err) ->
      err = err.data
      if err.name is 'ValidationError'
        form.email.$setValidity 'mongoose', false
      toastr.error 'Could not update user information'



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
      vm.me.image = {} unless vm.me.image?
      vm.me.image.url = data.url
      vm.me.image.thumb = data.thumbUrl

      $rootScope.$emit 'profilePicChanged',
        url: data.url
        thumb: data.thumbUrl

    .error (err) ->
      console.error err
    .finally ->
      vm.uploading = false

  vm