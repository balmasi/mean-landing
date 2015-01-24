'use strict'

rerouteIfNeeded = (scope, $state) ->


app = angular.module 'taskyApp'

app.controller 'ProSignUp.Ctrl', ($scope, $state) ->
  $scope.pageVariables.pageClass = 'page-signup-pro'

  $scope.$on "$stateNotFound", ->
    console.error 'State Not Found'

  $scope.isActive = (state) ->
    $state.includes('pro-signup' + state)

# -----------------------------------------------

app.controller 'ProSignUp.Category.Ctrl', ($scope, categories, $state, ProSignupData) ->
  $scope.categories = categories
  $scope.category = ProSignupData.getSelectedCategory()

  $scope.next = (categoryId) ->
    if this.form.$valid
      ProSignupData.setSelectedCategory(categoryId)
      $state.go('pro-signup.services')

# -----------------------------------------------

app.controller 'ProSignUp.Services.Ctrl', ($scope, services, $state, ProSignupData) ->
  $scope.services = services

  $scope.someServicesSelected = ->
    _.some $scope.services , (service) ->
      service.selected

  $scope.prev = ->
    ProSignupData.setServices $scope.services
    $state.go 'pro-signup.category'

  $scope.next = () ->
    if this.form.$valid
      ProSignupData.setServices $scope.services
      $state.go 'pro-signup.location'


# -----------------------------------------------

app.controller 'ProSignUp.Location.Ctrl', ($scope, $state, ProSignupData, $q, locationData, $rootScope) ->
  $scope.travelOptions = [5, 10, 25, 50]
  $scope.location = locationData
  #  street: undefined
  #  apt: undefined
  #  city: undefined
  #  province: undefined
  #  postal: undefined
  #  incoming: undefined
  #  outgoing: undefined
  #  online: undefined
  #  distance: $scope.travelOptions[0] #Distance willing to travel
  #  latLng: undefined

  $scope.someLocationPrefSelected = () ->
    l = $scope.location
    l.incoming || l.outgoing || l.online

  $scope.isValidAddress = () ->
    l = $scope.location
    l.street? and l.city? and l.province? and l.postal?

  $scope.fullAddress = () ->
    l = $scope.location
    [l.street, l.city, l.province, l.postal].join ', '
  # --------- Map Related Stuff ---------
  # TODO: Update map on address change
  $scope.map =
    _map: undefined
    _circle: undefined
    geocode: (address) ->
      deferred = $q.defer()
      _geocoder = new google.maps.Geocoder() if not _geocoder?
      _geocoder.geocode { 'address': address}, (results, status) ->
        if status == google.maps.GeocoderStatus.OK
          # We got a longitude and latitude from service
          $scope.location.latLng = results[0].geometry.location
          deferred.resolve $scope.location.latLng
        else
          console.warn "Got no results for provided address"
          deferred.reject
      return deferred.promise

    makeMap:  ->
      _mapOptions =
        zoom: 10
        center: $scope.location.latLng
        mapTypeId: google.maps.MapTypeId.ROADMAP
      @_map = new google.maps.Map(document.getElementById("google-map"),_mapOptions) if not @_map?
      return

    makeCircle: (radius) ->
      circleOptions =
        strokeColor: '#0000FF',
        strokeOpacity: 0.4,
        strokeWeight: 1,
        fillColor: '#58aaea',
        fillOpacity: 0.45,
        map: @_map,
        center: $scope.location.latLng,
        radius: radius * 1000

      if @_circle?
        @_circle.setRadius radius * 1000
      else
        @_circle = new google.maps.Circle(circleOptions)

      new google.maps.Marker
        map: @_map
        position: $scope.location.latLng

    init: () ->
      self = this
      @geocode($scope.fullAddress())
      .then ->
        self.makeMap()
        self.makeCircle($scope.location.distance)

  # Update map when distance willing to travel changes
  $scope.$watch 'location.distance', (newVal, oldVal) ->
    if newVal != oldVal
      if $scope.map._map?
        $scope.map.makeCircle newVal if newVal?
      else
        $scope.map.init()

  $scope.$on '$stateChangeSuccess', ->
    if $scope.location.outgoing
      $scope.map.init()

  $scope.prev = ->
    ProSignupData.setLocationData $scope.location
    $state.go 'pro-signup.services'

  $scope.next = () ->
    if this.form.$valid
      ProSignupData.setLocationData $scope.location
      $state.go 'pro-signup.description'


# ------------------ Step 4 --------------------

app.controller 'ProSignUp.Description.Ctrl', ($scope, descriptionData, $state, ProSignupData) ->
  $scope.description = descriptionData
  #   name
  #   website
  #   description

  $scope.prev = ->
    ProSignupData.setDescriptionData $scope.description
    $state.go 'pro-signup.location'

  $scope.next = () ->
    if this.form.$valid
      ProSignupData.setDescriptionData $scope.description
    $state.go 'pro-signup.account'



# ------------------ Step 5 -----------------------

app.controller 'ProSignUp.Account.Ctrl', ($scope, accountData, $state, ProSignupData, Auth, $cookieStore) ->
  $scope.account = accountData
  # firstName
  # lastName
  # email
  # password

  $scope.errors = {}


  $scope.prev = ->
    ProSignupData.setAccountData $scope.account
    $state.go 'pro-signup.description'

  $scope.register = (form) ->
    if this.form.$valid
      ProSignupData.setAccountData $scope.account
      data = ProSignupData.getAll()
      # --------- Registration Logic ---------
      Auth.createUser 'Pro'
      ,
        name: data.description.name
        firstName: data.account.firstName
        lastName: data.account.lastName
        category: data.category
        services: ProSignupData.getServicesAsArray()
        otherService: ProSignupData.getOtherService()
        address:
          street: data.location.street
          city: data.location.city
          province: data.location.province
          postal: data.location.postal
          apt: data.location.apt
        travel:
          incoming: data.location.incoming
          outgoing: data.location.outgoing
          online: data.location.online
          distance: data.location.distance
        website: data.description.website
        description: data.description.description
        email: data.account.email
        password: data.account.password
        phone: data.account.phone
      .then (data) ->
        $cookieStore.put 'token', data.token
        $state.go 'home'
      .catch (err) ->
        angular.forEach err.data.errors, (error, field) ->
          form[field].$setValidity 'mongoose', false
          form[field].$error.mongoose = error.message