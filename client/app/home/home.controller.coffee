'use strict'

angular.module 'taskyApp'
.controller 'HomeCtrl', ($scope) ->
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


  # Parallax
    parallax: ->
      $(".home-section").parallax "50%", 0.7
      $("#subscribe").parallax "50%", -0.3
      $("#facts").parallax "50%", -0.6
      $(".shape").parallax "50%", -0.6
      return


  # Show elements, when they are in viewport
    appear: ->
      $("#features").find(".row").appear ->
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

      $("#facts").find(".row").appear ->
        $fact = $(this).find(".fact-item")
        $fact.css "opacity", 1  if ie isnt false and ie <= 9
        $fact.each (i) ->
          $this = $(this)
          $counter = $this.find(".counter")
          setTimeout (->
            $this.addClass "animated fadeInDown"
            $counter.countTo
              refreshInterval: 50
              speed: 2000

            return
          ), i * 400
          return

        return

      $("#subscribe").find(".form-group").appear ->
        $this = $(this)
        $formControl = $this.find(".form-control")
        $btn = $this.find(".btn")
        if ie isnt false and ie <= 9
          $formControl.css "opacity", 1
          $btn.css "opacity", 1
        $formControl.addClass "animated fadeInLeft"
        $btn.addClass "animated fadeInRight"
        return

      $("#prices").find(".row").appear ->
        $this = $(this)
        $price = $this.find(".price-block")
        $price.css "opacity", 1  if ie isnt false and ie <= 9
        $price.eq(1).addClass "animated fadeInDown"
        setTimeout (->
          $price.eq(0).addClass "animated fadeInLeft"
          $price.eq(2).addClass "animated fadeInRight"
          return
        ), 400
        return

      $("#video").find(".video-container").appear ->
        $this = $(this)
        $this.css "opacity", 1  if ie isnt false and ie <= 9
        $this.addClass "animated fadeInDown"
        return

      $("#c-form").appear ->
        $this = $(this)
        $this.css "opacity", 1  if ie isnt false and ie <= 9
        $this.addClass "animated fadeInDown"
        return

      $("#map").find(".contact-block").appear ->
        $this = $(this)
        $this.css "opacity", 1  if ie isnt false and ie <= 9
        $this.addClass "animated flipInY"
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


  # One Page Navigation
    onePageNav: ->
      $("#header").find(".nav").onePageNav
        currentClass: "active"
        scrollSpeed: p.scrollSpeed
        scrollOffset: p.scrollOffset

      return


  # Add background to top navigation on scroll
    navbarSelect: ->
      $navbar = $("#header")
      if $(window).scrollTop() > p.navbarScrollTop
        $navbar.addClass "selected"
      else
        $navbar.removeClass "selected"
      return


  # Equate heights of similar blocks
    iheightInit:
      features: ->
        $feature = $("#features").find(".feature-item")
        $feature.height "auto"
        $feature.iheight()  if viewportWidth() > p.screen.sm
        return

      prices: ->
        $inf = $("#prices").find(".inf")
        $inf.height "auto"
        $inf.iheight()  if viewportWidth() > p.screen.md
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

        $("#subscribe-form").on "submit", (e) ->
          e.preventDefault()
          $this = $(this)
          $submit = $this.find("input[type=\"submit\"]")
          $business = $('#type-business')
          $email = $this.find(".email")
          action = $this.attr("action")
          emailVal = $email.val()
          $submit.attr "disabled", "disabled"
          $.post(action,
            email: emailVal
            business: $business.is(":checked")
            businessDetails: $('#business-field').val()
          ).done((response) ->
            $messageBox = $("#message-box")
            if $messageBox.hasClass("visible")
              $messageBox.removeClass "visible"
              $messageBox.on transitionEnd, ->
                $messageBox.unbind transitionEnd
                all.ajaxForms.subscribeShow response.text, response.type, $messageBox
                return

            else
              all.ajaxForms.subscribeShow response.text, response.type, $messageBox
            $email.val ""  if response.type is "success"
            return
          ).always ->
            $submit.removeAttr "disabled"
            loader.hide()
            return

          return

        return

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


  # Slider
    slider: ->
      $("#slides").superslides
        animation: "fade"

      #            animation_speed: 1000,
        play: 5000

      return


  # Carousel
    carousel: ->
      $(".owl-carousel").owlCarousel
        items: 1
        dots: true
        margin: 20
        responsive:
          480:
            items: 2

          768:
            items: 3

          1200:
            items: 4

      return

  maps = init: ->
    myLatlng = new google.maps.LatLng(43.818372, -79.417238)
    mapOptions =
      zoom: 16
      center: myLatlng
      mapTypeId: google.maps.MapTypeId.ROADMAP
      disableDefaultUI: true
      scrollwheel: false

    map = new google.maps.Map(document.getElementById("google-map"), mapOptions)
    marker = new google.maps.Marker(
      position: myLatlng
      map: map
      title: "tasky"
    )
    return


  # Initializations
  init =
    ready: ->
      all.preloader.init()
      all.scrollToGlobal()
      all.onePageNav()
      all.appear()
      all.iheightInit.features()
      all.iheightInit.prices()
      all.ajaxForms.subscribe()
      all.ajaxForms.contact()
      all.slider()
      all.carousel()
      all.parallax()
      maps.init()
      return

    scroll: ->
      all.navbarSelect()
      return

    resize: ->
      all.iheightInit.features()
      all.iheightInit.prices()
      return

  $(document).ready init.ready
  $(window).scroll init.scroll
  $(window).resize init.resize