'use strict'

angular.module 'taskyApp'
.controller 'SupportTabCtrl', ($scope, $modal) ->
  vm = this

  vm.popupHelp =  ->
    $modal.open
      templateUrl: 'components/support/general-support-form.html'
      windowClass: 'support-modal'
      controller: 'SupportModalCtrl'
      controllerAs: 'vm'

  vm

.controller 'SupportModalCtrl', ($scope, $modalInstance, toastr, ZohoSupport) ->
  vm = this
  vm.formData = {}



  $scope.submitForm = (form) ->
    ZohoSupport.createTicket form
    .success ->
      toastr.success "We're on it!", 'Message Sent'
      $modalInstance.close()
    .error ->
      toastr.error 'Please make sure your fields are valid', 'Error'