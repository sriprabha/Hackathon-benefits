angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/nerds', {
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

		.when('/technology', {
			templateUrl: 'views/technology.html',
			controller: 'TechnologyController'
		})

	$locationProvider.html5Mode(true);

}]);