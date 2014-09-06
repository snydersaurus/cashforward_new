'use strict';

angular.module('cashforward.services', ['ngResource'])
.factory('PaymentService', ['$http','$q',
  function($http, $q){
    return {
    	getCurrentPayments: function(){
    		return $http.get('test/data/payments.json').success(function(result) {
                return result.data
            });
    	}
    }
}])


