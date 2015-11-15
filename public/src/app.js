angular
	.module('contactsApp', ['ngRoute', 'ngResource'])
	.config(function ($routeProvider, $locationProvider) {
		$routeProvider
			.when('/contacts', {
				controller: 'ListController',
				templateUrl: 'views/list.html'
			})
			.when('/contacts/new', {
				controller: 'NewController',
				templateUrl: 'views/new.html'
			});
		//to avoid "#"	in the path --> localhost:3000/#/contacts
		$locationProvider.html5Mode(true);	
	})
	.run(function ($rootScope) {
	});