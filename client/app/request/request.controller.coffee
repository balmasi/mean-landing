'use strict'

angular.module 'taskyApp'
.controller 'RequestCtrl', ($scope, $location) ->
  $scope.pageVariables.pageClass = 'page-request'
  $scope.questions =[
    {
      type: 'text'
      question: "Who is your daddy?"
      name: 'daddy'
    },
    {
      type: 'select'
      question: 'What does he do?'
      choices: [
        {
          label: 'Nothing'
          value: 'nothingVal',
        },
        {
          label: 'Everything'
          value: 'EverythingVal',
        }
      ]
    },
    {
      type: 'checklist'
      question: 'Where is he from?'
      choices: [
        {
          label: 'Here'
          value: 'HereVal',
        },
        {
          label: 'There'
          value: 'ThereVal',
        }
      ],
      other: true
    },
    {
      type: 'date'
    }
  ]
  $scope.errors = {}

