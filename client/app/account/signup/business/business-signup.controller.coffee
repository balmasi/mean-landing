'use strict'

angular.module 'taskyApp'
.controller 'BusinessSignupCtrl', ($scope, Auth, $location, $window) ->
  $scope.pageVariables.pageClass = 'page-signup'
  $scope.business =
    address: {
      street: undefined,
      apt: undefined,
      city: undefined,
      province: undefined,
      postal: undefined,
      full: () ->
        [@street, @city, @province, @postal].join ', '
    }
  $scope.errors = {}

  $scope.initMap = ->
    geocoder = new google.maps.Geocoder();
    geocoder.geocode
      'address': $scope.business.address.full(),
      (results, status) ->
        if status is google.maps.GeocoderStatus.OK
          # We got a longitude and latitude from service
          latLng = results[0].geometry.location

          # Make the map
          mapOptions =
            zoom: 10
            center: latLng
            mapTypeId: google.maps.MapTypeId.ROADMAP

          map = new google.maps.Map(document.getElementById("google-map"), mapOptions)


          # Make the Circle
          circleOptions =
            strokeColor: '#0000FF',
            strokeOpacity: 0.4,
            strokeWeight: 1,
            fillColor: '#58aaea',
            fillOpacity: 0.45,
            map: map,
            center: latLng,
            radius: 25000

          circle = new google.maps.Circle(circleOptions);

          # Place Marker

          marker = new google.maps.Marker
            map: map
            position: latLng

        else
          console.error "Geocode was not successful for the following reason: " + status

    return

  $scope.register = (form) ->
    $scope.submitted = true

    if form.$valid
      # Account created, redirect to home
      Auth.createUser
        name: $scope.user.name
        email: $scope.user.email
        password: $scope.user.password

      .then ->
        $location.path '/'

      .catch (err) ->
        err = err.data
        $scope.errors = {}

        # Update validity of form fields that match the mongoose errors
        angular.forEach err.errors, (error, field) ->
          form[field].$setValidity 'mongoose', false
          $scope.errors[field] = error.message

  $scope.loginOauth = (provider) ->
    $window.location.href = '/auth/' + provider
