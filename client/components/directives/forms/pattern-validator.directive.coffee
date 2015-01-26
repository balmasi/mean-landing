angular.module 'taskyApp'

.directive "patternValidator", ->
  restrict: "A"
  require: "ngModel"
  link: (scope, el, attrs, ngModel) ->
    PATTERNS =
      phone: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
      postal: /^\s*[a-ceghj-npr-tvxy]\d[a-ceghj-npr-tv-z](\s)?\d[a-ceghj-npr-tv-z]\d\s*$/i
      email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/
      website: /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi

    validate = (regexp, value) ->
      value is "" or not required or regexp.test(value)

    validator = undefined
    patternValidator = undefined
    pattern = attrs.patternValidator
    required = true

    if pattern
      if PATTERNS[pattern]
        patternValidator = (val) ->
          validate PATTERNS[pattern], val
      else if pattern.match(/^\/(.*)\/$/)
        pattern = new RegExp(pattern.substr(1, pattern.length - 2))
        patternValidator = (value) ->
          validate pattern, value
      else
        patternValidator = (value) ->
          patternObj = scope.$eval(pattern)
          throw new Error("Expected " + pattern + " to be a RegExp but was " + patternObj)  if not patternObj or not patternObj.test
          validate patternObj, value

      ngModel.$validators.pattern = patternValidator
      attrs.$observe "required", (newval) ->
        required = newval
        patternValidator ngModel.$viewValue
        return

    return
