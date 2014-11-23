'use strict'

angular.module 'taskyApp'
.controller 'RequestCtrl', ($scope, $location, Request, Auth, $stateParams) ->
  $scope.pageVariables.pageClass = 'page-request'
  $scope.questions = undefined

  _categoryId = undefined

  Request.getForm
    category_route: 'intercity-moving'
  .$promise.then (result) ->
    $scope.questions = result.questions
    debugger
    _categoryId = result._id


  $scope.sendRequest = ->
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


    currentUser = Auth.getCurrentUser()
    request = new Request
      requested_by: currentUser._id
      category: _categoryId,
      questions: results

    request.$save()
    .then (res) ->
      console.log res
    .catch (req) ->
      console.warn req



  $scope.errors = {}