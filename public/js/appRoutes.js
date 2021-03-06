angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/trends', {
			templateUrl: 'views/nerd.html',
			controller: 'NerdController'
		})

		.when('/geeks', {
			templateUrl: 'views/geek.html',
			controller: 'GeekController'	
		})

		.when('/companyLogin', {
			templateUrl: 'views/company.html',
			controller: 'CompanyController'
		})

		.when('/loggedin', {
			templateUrl: 'views/company.html',
			controller: 'CompanyController'
		})

		.when('/applicantLogin', {
			templateUrl: 'views/technology.html',
			controller: 'TechnologyController'
		})

		.when('/about', {
			templateUrl: 'views/about.html'
		})

	$locationProvider.html5Mode(true);

}]);