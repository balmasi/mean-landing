'use strict'

angular.module 'taskyApp'
.directive 'appointmentSelector', ($timeout) ->
  templateUrl: 'components/forms/new-request/appointment-selector/appointment-selector.html'
  restrict: 'E'
  scope:
    schedule: '='
    scheduleType: '@'
  link: (scope, element, attrs) ->
    scope.dpOptions =
      open: no
      format: 'MMM dd, yyyy'
      min: new Date()

    scope.open = ($event) ->
      $event.preventDefault();
      $event.stopPropagation();
      scope.dpOptions.open = yes

    # Used to decide how to schedule in form
    scope.scheduleOptions =
      flexible: "I'm flexible"
      asap: "As soon as possible"
      date: "On a particular day"
      other: "I'd need to describe it"


    scope.schedule.scheduleFormat = 'date' if scope.scheduleType is 'event'