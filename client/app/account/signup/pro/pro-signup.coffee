angular.module 'taskyApp'
.config ($stateProvider, $urlRouterProvider) ->
  $urlRouterProvider
  .when /\/signup\/pro.*/, ($state, $match, ProSignupData) ->
    if !ProSignupData.hasRedirected() && !/.*\/category/.test $match && $state.current.url != '^'
      ProSignupData.toggleRedirected()
      # Redirect to step 1 unless on step 1
      $state.go 'pro-signup.category'

  $stateProvider
  .state 'pro-signup',
    url: '/signup/pro'
    abstract: true
    templateUrl: 'app/account/signup/pro/signup.html'
    controller: 'ProSignUp.Ctrl'

  .state 'pro-signup.category',
    url: '/category'
    templateUrl: 'app/account/signup/pro/_category.html'
    controller: 'ProSignUp.Category.Ctrl'
    resolve:
      categories: (Category) ->
        Category.getRootCategories()


  .state 'pro-signup.services',
    url: '/services'
    templateUrl: 'app/account/signup/pro/_services.html'
    controller: 'ProSignUp.Services.Ctrl'
    resolve:
      services: (ProSignupData) ->
        ProSignupData.getServices()


  .state 'pro-signup.location',
    url: '/location'
    controller: 'ProSignUp.Location.Ctrl'
    templateUrl: 'app/account/signup/pro/_location.html'
    resolve:
      locationData: (ProSignupData) ->
        ProSignupData.getLocationData()

  .state 'pro-signup.description', #BName, Website, Description
    url: '/description'
    templateUrl: 'app/account/signup/pro/_description.html'
    controller: 'ProSignUp.Description.Ctrl'
    resolve:
      descriptionData: (ProSignupData) ->
        ProSignupData.getDescriptionData()

  .state 'pro-signup.account', #Name, Email, Number(txt) ,PAss?
    url: '/contact'
    templateUrl: 'app/account/signup/pro/_account.html'
    controller: 'ProSignUp.Account.Ctrl'
    resolve:
      accountData: (ProSignupData) ->
        ProSignupData.getAccountData()