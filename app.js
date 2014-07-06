'use strict';

angular.module('cashforward', [
	'ngRoute',
	'ngCookies',
	'LocalStorageModule',
	'mgcrea.ngStrap.helpers.dimensions',
	'mgcrea.ngStrap.helpers.parseOptions',
	'mgcrea.ngStrap',
	'mgcrea.ngStrap.affix',
	'mgcrea.ngStrap.modal',
	'mgcrea.ngStrap.tooltip',
	'mgcrea.ngStrap.typeahead',
	'ui.bootstrap.collapse',
	'ui.bootstrap.datepicker',
	'ui.bootstrap.alert',
	'ui.bootstrap.modal',
	//'ui.bootstrap.typeahead',
	'ui.bootstrap.carousel',
	'nvd3ChartDirectives',
	'angularSpinner',
	'cashforward.controllers',
	'cashforward.services'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/overview', {templateUrl: 'templates/overview.html', controller: 'OverviewController'});
  $routeProvider.when('/bills', {templateUrl: 'templates/bills_deposits.html', controller: 'BillsDepositsController'});
  $routeProvider.otherwise({redirectTo: '/overview'});
}]);