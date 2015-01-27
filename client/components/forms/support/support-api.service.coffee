'use strict'

angular.module 'taskyApp'
.factory 'ZohoSupport', ($http) ->
  buildRequestXML = (form) ->
    XMLHEAD = '<requests><row no="1">'
    XMLFOOT = '</row></requests>'
    XMLBODY = ''

    formData =
      'First Name' : form.firstName.$viewValue
      'Contact Name' : form.lastName.$viewValue
      'Email' : form.email.$viewValue
      'Type of Account' : form.accountType.$viewValue
      'What can we help you with?' : form.helpType.$viewValue
      'Subject' : form.subject.$viewValue
      'Description' : form.description.$viewValue

    for key, val of formData
      XMLBODY += "<fl val=\"#{key}\">#{val}</fl>"

    return XMLHEAD + XMLBODY + XMLFOOT


  createTicket: (form) ->
    XMLDATA = buildRequestXML(form)
    $http.post '/api/mail/support',
      xmldata: XMLDATA