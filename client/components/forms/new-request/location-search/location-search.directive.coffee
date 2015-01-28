'use strict'

angular.module 'taskyApp'
.directive 'locationSearch', ->
  scope:
    loading: '=?'
  restrict: 'EA'
  controllerAs: 'vm'
  replace: true
  templateUrl: 'components/forms/new-request/location-search/location-search.html'
  controller: ($scope, $q, Location) ->
    $scope.loading = false

    location =
      latLng:
        lat: undefined
        lng: undefined
      subLocality: undefined #e.g. North York

    vm = this
    vm.getAddresses = (viewValue) ->
      geocoder = new google.maps.Geocoder();
      deferred = $q.defer()
      geocoder.geocode
        address: viewValue
        componentRestrictions:
          country: 'CA'
          postalCode: viewValue
      ,
      (results, status) ->
        if status is google.maps.GeocoderStatus.OK
          # limit to 5
          results = results[0..5]
          deferred.resolve results
        else
          deferred.reject results

      deferred.promise

    vm.setLatLng = (i,m,l) ->
      location.latLng =
        lat: i.geometry.location.lat(),
        lng: i.geometry.location.lng()
      Location.lngLat location.latLng

      subLoc = _.find i.address_components, (item) ->
        !!~item.types.indexOf 'sublocality_level_1'

      location.subLocality = (subLoc || i.address_components[0]).short_name
      Location.subLocality location.subLocality