'use strict'

angular.module 'taskyApp'
.controller 'BusinessSignupCtrl', ($scope, Auth, $location, $window, $q, $state) ->
  # Class for ui-view for this controller
  $scope.pageVariables.pageClass = 'page-signup'

  # --------- Loaded Options ---------
  $scope.categories = [
    { id: 1, label: 'Cleaning' },
    { id: 2, label: 'Moving'   }
  ]

  $scope.services =
    1: [
      'House Cleaning',
      'Carpet Cleaning',
      'Gutter Cleaning',
      'Office Cleaning'
    ]
    2: [
      'Moving Within The City',
      'Moving Between Cities'
    ]

  $scope.travelOptions = [5, 10, 25, 50]
  # --------- Business Data Structure ---------
  $scope.business =
    # Step 1
    category: undefined
    # Step 2
    services: undefined
    # Step 3.1
    address:
      street: undefined
      apt: undefined
      city: undefined
      province: undefined
      postal: undefined
      full: ->
        [@street, @city, @province, @postal].join ', '
      isValid: ->
        @street and @city? and @province? and @postal?
    # Step 3.2
    travel:
      incoming: undefined
      outgoing: undefined
      online: undefined
      distance: $scope.travelOptions[0] #Distance willing to travel
    # Step 4
    details:
      website: undefined
      description: undefined
    # Step 5
    account:
      first: undefined
      last: undefined
      phone: undefined
      password: ''

  # --------- Map Related Stuff ---------
  $scope.map =
    _map: undefined
    _latLng: undefined
    _circle: undefined
    geocode: ->
      self = this
      deferred = $q.defer()
      _geocoder = new google.maps.Geocoder() if not _geocoder?
      _geocoder.geocode { 'address': $scope.business.address.full() }, (results, status) ->
        if status == google.maps.GeocoderStatus.OK
          # We got a longitude and latitude from service
          self._latLng = results[0].geometry.location
          deferred.resolve self.latLng
        else
          console.warn "Got no results for provided address"
          deferred.reject
      return deferred.promise

    makeMap:  ->
      _mapOptions =
        zoom: 10
        center: @_latLng
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
        center: @_latLng,
        radius: radius * 1000

      if @_circle?
        @_circle.setRadius radius * 1000
      else
        @_circle = new google.maps.Circle(circleOptions)

      new google.maps.Marker
        map: @_map
        position: @_latLng

    init: () ->
      self = this
      @geocode($scope.business.address.full())
      .then ->
        self.makeMap()
        self.makeCircle($scope.business.travel.distance)

  # Update map when distance willing to travel changes
  $scope.$watch 'business.travel.distance', (newVal, oldVal) ->
    if newVal != oldVal
      $scope.map.makeCircle newVal if newVal? and $scope.map._map?

  # --------- Validation and Errors  ---------
  $scope.errors = {}

  # --------- Pagination Logic ---------
  $scope.isActive = (state) ->
    $state.includes('business-signup' + state)

  pageStates = ['category', 'services', 'location', 'description', 'account']
  $scope.next = ->
    currentState = $state.current.name.split('.')[1]
    currentIndex = pageStates.indexOf(currentState)

    # Build the selected services model for services page
    if not $scope.business.services? and currentState == 'category'
      $scope.business.services = {}
      for service in $scope.services[$scope.business.category]
        $scope.business.services[service] = false
      $scope.business.services['other'] = false

    $state.go('business-signup.'+ pageStates[currentIndex + 1])

  $scope.prev = ->
    currentState = $state.current.name.split('.')[1]
    currentIndex = pageStates.indexOf(currentState)
    $state.go('business-signup.'+ pageStates[currentIndex - 1])

  # --------- Registration Logic ---------
  $scope.register = (form) ->
    $scope.submitted = true
#    if form.$valid
#      # Account created, redirect to home
#      Auth.createUser
#        name: $scope.business.account.first + ' ' + $scope.business.account.last
#        email: $scope.business.account.email
#        password: $scope.business.account.password
#
#      .then ->
#        $location.path '/'
#
#      .catch (err) ->
#        err = err.data
#        $scope.errors = {}
#
#        # Update validity of form fields that match the mongoose errors
#        angular.forEach err.errors, (error, field) ->
#          form[field].$setValidity 'mongoose', false
#          $scope.errors[field] = error.message

  $scope.loginOauth = (provider) ->
    $window.location.href = '/auth/' + provider
