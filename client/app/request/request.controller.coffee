'use strict'

angular.module 'taskyApp'
.controller 'RequestCtrl', ($scope, user, category, Request, Auth, toastr, Search, $state) ->
  $scope.pageVariables.pageClass = 'page-request'

  _categoryId = category._id
  $scope.category = category
  $scope.questions = category.questions
  $scope.user = user

  $scope.schedule = {}
  # Who travels to whom
  $scope.travel = {}
  $scope.hasTravelType = (type) ->
    !!~category.travel_types.indexOf type

  # Used to decide how to schedule in form
  $scope.scheduleOptions =
    flexible: "I'm flexible"
    asap: "As soon as possible"
    date: "On a particular day"
    other: "I'd need to describe it"

  # km's willing to travel (customer)
  $scope.travelOptions = [5, 10, 25, 50]




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
          toastr.success 'successfully created request'
          Search.clearLocation()
          $state.go 'tasks'
        .catch errorHandler

    if form.$valid
      # If user has no account create it, then create request
      if !$scope.hasAccount()
        Auth.createUser 'Customer',
          email: $scope.user.email
          password: $scope.user.password
        .then (token) ->
          Auth.getCurrentUser()
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