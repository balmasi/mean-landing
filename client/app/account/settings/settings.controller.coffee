'use strict'

angular.module 'taskyApp'
.controller 'SettingsCtrl', ($scope, User, Auth, $upload) ->
  vm = this
  vm.uploading = false

  $scope.me = User.get()
  $scope.errors = {}
  $scope.changePassword = (form) ->
    $scope.submitted = true

    if form.$valid
      Auth.changePassword $scope.user.oldPassword, $scope.user.newPassword
      .then ->
        $scope.message = 'Password successfully changed.'

      .catch ->
        form.password.$setValidity 'mongoose', false
        $scope.errors.other = 'Incorrect password'
        $scope.message = ''

  $scope.profilePic = undefined
  $scope.$watch 'profilePic', ->

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
      .error (err) ->
        console.error err
      .finally ->
        vm.uploading = false

  vm