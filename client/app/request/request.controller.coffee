'use strict'

angular.module 'taskyApp'
.controller 'RequestCtrl', ($scope, user, FormData, Request, Auth) ->
  $scope.pageVariables.pageClass = 'page-request'

  _categoryId = FormData._id
  $scope.questions = FormData.questions
  $scope.user = user
  $scope.errors = {}

  $scope.hasAccount = () ->
    $scope.user._id if $scope.user._id?


  $scope.sendRequest = (form) ->
    results = []
    $scope.questions.forEach (q) ->
      if q.field_type == 'checklist'
        transformedChoices = _.map q.choices, (choice) ->
          if choice.can_describe
            return choice.answer if choice.answer? && choice.answer && choice.otherChecked
          else
            return choice.value if choice.answer? && choice.answer
        q.answer = _.compact transformedChoices
        results.push _.pick(q,['question','answer']) if q.answer.length

      else if q.field_type == 'select'
        if q.answer?
          results.push
            question: q.question
            answer: q.answer.value

      else
        results.push _.pick(q,['question','answer']) if q.answer? && q.answer


    # This function creates a request given
    # $scope.user contains the user that's been created
    # or already exists
    createRequest = () ->
      request = new Request
        requested_by: $scope.user._id
        category: _categoryId,
        questions: results

      request.$save()
        .then (res) ->
          console.log 'successfully created request'
        .catch errorHandler

    if form.$valid
      # If user has no account create it, then create request
      if !$scope.hasAccount()
        Auth.createUser 'Customer',
          email: $scope.user.email
          password: $scope.user.password
        .then (token) ->
          Auth.getCurrentUser().$promise
        .then (user)->
          $scope.user = user
          createRequest()
        .catch errorHandler
      # Otherwise just create the request
      else
        createRequest()

  # For each mongo error returned, set the field's validity to false
  # and add a message to be displayed in DOM via $scope.errors
  errorHandler = (err) ->
    angular.forEach err.data.errors, (error, field) ->
      form[field].$setValidity 'mongoose', false
      $scope.errors[field] = error.message