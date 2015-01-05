'use strict'

angular.module 'taskyApp'
.controller 'RequestCtrl', ($scope, $q, category, Request, Auth, toastr, Search, $state) ->
  $scope.pageVariables.pageClass = 'page-request'

  _categoryId = category._id
  $scope.category = category
  $scope.questions = category.questions
  $scope.user = Auth.getCurrentUser()

  $scope.schedule = {}

  # Who travels to whom
  $scope.travel = {}

  $scope.errors = {}

  $scope.hasAccount = () ->
    $scope.user._id if $scope.user._id?

  $scope.showErrorsOnHover = (form) ->
    debugger

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
        category: _categoryId
        questions: results
        schedule_type: $scope.schedule.scheduleType
        schedule_details:
          date: $scope.schedule.scheduleDate
          time: $scope.schedule.scheduleTime
          duration: $scope.schedule.scheduleDuration
          description: $scope.schedule.scheduleDescription
        travel:
          to_pro: $scope.travel.topro
          to_customer: $scope.travel.tocustomer
          remote: $scope.travel.remote
          distance: $scope.travel.distance
        location:
          subLocality: Search.subLocality()
          lngLat: Search.lngLat()

      request.$save()
        .then (res) ->
          toastr.success 'Successfully Created Request'
          Search.clearLocation()
          $state.go 'tasks'
        .catch (err) ->
          toastr.error 'Something went wrong', 'Form Error'

    if form.$valid
      # If user has no account create it, then create request
      if !$scope.hasAccount()
        Auth.createUser 'Customer',
          email: $scope.user.email
          password: $scope.user.password
        .catch (err) ->
          mongoErrorHandler err, form
          $q.reject 'Could not create User'
        .then (token) ->
          Auth.getCurrentUser().$promise
        .then (user)->
          $scope.user = user
          createRequest()
      # Otherwise just create the request
      else
        createRequest()

  # For each mongo error returned, set the field's validity to false
  # and add a message to be displayed in DOM via $scope.errors
  mongoErrorHandler = (err, form) ->
    angular.forEach err.data.errors, (error, field) ->
      if form[field]?
        form[field].$setValidity 'mongoose', false
        $scope.errors[field] = error.message
        toastr.error 'That email is already registered', 'Email Taken'
