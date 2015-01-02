angular.module "taskyApp"

.directive "numbersOnly", ->
  require: "ngModel"
  link: (scope, element, attrs, modelCtrl) ->
    modelCtrl.$parsers.push (inputValue) ->
      inputValue = inputValue.toString()
      # this next if is necessary for when using ng-required on your input.
      # In such cases, when a letter is typed first, this parser will be called
      # again, and the 2nd time, the value will be undefined
      return ""  unless inputValue?
      transformedInput = inputValue.replace(/[^0-9+.]/g, "")
      unless transformedInput is inputValue
        modelCtrl.$setViewValue transformedInput
        modelCtrl.$render()
      transformedInput

    modelCtrl.$validators.number = (mv) ->
      /^\d+(.\d{2})?$/.test mv

    return
