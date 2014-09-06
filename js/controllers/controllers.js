'use strict';

/* Controllers */

angular.module('cashforward.controllers', [])
  .controller('OverviewController', ['$scope','$routeParams',function($scope, $routeParams) {
	
 }])
  .controller('BillsDepositsController', ['$scope','$routeParams','PaymentService',
                                          function($scope, $routeParams, PaymentService) {
	  PaymentService.getCurrentPayments().then(function(result){
		  $scope.transactions = result.data
	  })
 }]);
  
