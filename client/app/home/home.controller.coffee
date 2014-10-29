'use strict'

angular.module 'taskyApp'
.controller 'HomeCtrl', ($scope, $http) ->
  $scope.pageVariables.pageClass = 'page-home'
  $scope.subscriber =
    accountType: 'customer'
#    fname: null
#    lname: null
#    email: null
#    service: null
  $scope.subscibeMessage = ""

  $scope.subscribe = ->
    endpoint = "/api/newsletter"
    $messageBox = $("#message-box")
    loader.show()
    $http.post(endpoint, $scope.subscriber)
    .success( (response) ->
      loader.hide()
      $scope.analytics.subscribe()
      if $messageBox.hasClass("visible")
        $messageBox.removeClass "visible"
        $messageBox.on transitionEnd, ->
          $messageBox.unbind transitionEnd
          all.ajaxForms.subscribeShow response.text, response.type, $messageBox
          return

      else
        all.ajaxForms.subscribeShow response.text, response.type, $messageBox
      $scope.subscriber.email = ""  if response.type is "success"
      return
    )
    .error (error) ->
      all.ajaxForms.subscribeShow error.text, error.type, $messageBox
      loader.hide()
      return

    return


  $scope.analytics =
    subscribe: ->
      ga 'send', 'event', 'subscribe', 'submit', $scope.subscriber.accountType


  # This function return viewport width
  viewportWidth = ->
    $body = $("body")
    viewPortWidth = undefined
    if $body.css("overflow") isnt "hidden"
      $body.css "overflow", "hidden"
      viewPortWidth = $body.width()
      $body.css "overflow", ""
    else
      viewPortWidth = $body.width()
    viewPortWidth

  # Detecting IE
  ieVersion = ->
    ua = window.navigator.userAgent
    msie = ua.indexOf("MSIE ")
    return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)))  if msie > 0 or !!navigator.userAgent.match(/Trident.*rv\:11\./)
    false
  "use strict"
  ie = ieVersion()

  # Parameters
  p =
    navbarScrollTop: $(window).height() / 4 # When add background to navbar
    scrollSpeed: 1000 # Smooth scrolling speed
    scrollOffset: 80 # For one page nav. Recomended to be as navbar height
    preloaderTimeout: 4000 # If loading is to long, hide overlay after N ms
    screen: # Breakpoints. Like in bootstrap
      xs: 480
      sm: 768
      md: 992
      lg: 1200

  transitionEnd = "transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"
  animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend"

  # Loader
  loader =
    show: ->
      $("#loader").addClass "left opacity"
      return

    hide: ->
      $loader = $("#loader")
      $loader.removeClass "opacity"
      $loader.on transitionEnd, ->
        $loader.removeClass "left"
        $loader.unbind transitionEnd
        return

      return

  all =

  # Preloader
    preloader:
      init: ->
        $preloader = $("#preloader")
        $("body").css "overflow", "hidden"
        setTimeout (->
          all.preloader.hide $preloader
          return
        ), p.preloaderTimeout
        $(window).load ->
          all.preloader.hide $preloader
          return

        return

      hide: ($preloader) ->
        $homeContainer = $(".home-section").find(".container")
        $("body").css "overflow", ""
        $preloader.addClass "animated fadeOut"
        $preloader.one animationEnd, ->
          $preloader.remove()
          $homeContainer.addClass "animated fadeInDown"
          return

        if ie isnt false and ie <= 9
          $preloader.fadeOut 300, ->
            $preloader.remove()
            $homeContainer.animate
              opacity: 1
            , 300
            return

        return

  # Scroll to anchor
    scrollTo: (anchor) ->
      $.scrollTo anchor, p.scrollSpeed
      return


  # Scroll to anchor, when link using .scrollTo class
    scrollToGlobal: ->
      $(".scrollTo").on 'click', ->
        all.scrollTo $(this).attr("href")
        false

      return

  # Parallax
    parallax: ->
      s = skrollr.init
        forceHeight: false
        smoothScrolling: false
        keyframe: (element) ->
          $(element).trigger('appear')

      if $('html').hasClass('skrollr-desktop')
        $('[data-emit-events]').each ->
          if  $(this).data('bottom-top') is undefined
            $(this).attr 'data-bottom-top', ''
            return
      else
        s.destroy()

      return


  # Show elements, when they are in viewport
    appear: ->
      $("#features").find(".row").appear().on 'appear', ->
        $feature = $(this).find(".feature-item")
        $feature.css "opacity", 1  if ie isnt false and ie <= 9
        $feature.each (i) ->
          $this = $(this)
          setTimeout (->
            $this.addClass "animated fadeIn"
            return
          ), i * 200
          return

        return


      $("#subscribe").find(".form-group").appear().on 'appear', ->
        $this = $(this)
        $formControl = $this.find(".form-control")
        $typeButtons = $(".type-choice-btn")
        $customerRadio = $typeButtons.eq(0)
        $businessRadio = $typeButtons.eq(1)
        $submit = $this.find("[type='submit']")
        if ie isnt false and ie <= 9
          $formControl.css "opacity", 1
          $submit.css "opacity", 1
          $customerRadio.css "opacity", 1
          $businessRadio.css "opacity", 1
        $customerRadio.addClass "animated fadeInLeft"
        $businessRadio.addClass "animated fadeInRight"
        $formControl.addClass "animated fadeInUp"
        $submit.addClass "animated fadeInUp"
        return


      $("#contact-form").appear().on 'appear', ->
        $this = $(this)
        $this.css "opacity", 1  if ie isnt false and ie <= 9
        $this.addClass "animated fadeInDown"
        return

      return

  # Add background to top navigation on scroll
    navbarSelect: ->
      $navbar = $(".page-home #header")
      $navbar.removeClass "selected"
      if $(window).scrollTop() > p.navbarScrollTop
        $navbar.addClass "selected"
      else
        $navbar.removeClass "selected"
      return


  # AJAX requests
    ajaxForms:

    # Subscribe
      subscribe: ->
        $businessField = $('.business-field').hide()
        $('.business-field').addClass('animated')
        $('.show-business-field').on 'click', ->
          $businessField.show().removeClass('fadeOutLeft').addClass("fadeInLeft")

        $('.hide-business-field').on 'click', ->
          $businessField.removeClass('fadeInLeft').addClass("fadeOutLeft")
          $businessField.one animationEnd, ->
            $businessField.hide('slow')
            $businessField.unbind animationEnd


      subscribeShow: (text, type, $box) ->
        $box.text text
        $box.removeClass "text-primary"
        $box.addClass "text-primary"  if type is "error"
        $box.addClass "visible"
        return


    # Contacts
      contact: ->
        $alertBox = $("#c-alert-box")
        $("#c-form").on "submit", (e) ->
          e.preventDefault()
          $this = $(this)
          $.ajax
            data: $this.serialize()
            dataType: "JSON"
            type: "POST"
            url: $this.attr("action")
            beforeSend: ->
              $alertBox.html ""
              loader.show()
              return

            success: (response) ->
              if response.errors
                $.each response.errors, (index, value) ->
                  setTimeout (->
                    $alertBox.append "<div class=\"alert alert-danger animated fadeIn\">" + value + "</div>"
                    return
                  ), index * 500
                  return

              else $alertBox.append "<div class=\"alert alert-success animated fadeIn\">" + response.success + "</div>"  if response.success
              return

            complete: ->
              loader.hide()
              return

          return

        return

  maps = init: ->
    myLatlng = new google.maps.LatLng(43.653226,-79.38318438)
    mapOptions =
      zoom: 12
      center: myLatlng
      mapTypeId: google.maps.MapTypeId.ROADMAP
      disableDefaultUI: true
      scrollwheel: false

    map = new google.maps.Map(document.getElementById("google-map"), mapOptions)
    return


  # Initializations
  init =
    ready: ->
      all.preloader.init()
      all.appear()
      all.ajaxForms.subscribe()
      all.ajaxForms.contact()
      all.parallax()
      all.scrollToGlobal()
      maps.init()
      return

    scroll: ->
      all.navbarSelect()
      return

  $(document).ready init.ready
  $(window).scroll init.scroll