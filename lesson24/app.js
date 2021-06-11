(function () {
'use strict';

angular.module('WeightLossApp', [])
.controller('PrinterController', PrinterController)
.service('orderListService', orderListService)
.service('obesityCheck', obesityCheck);

PrinterController.$inject = ['orderListService'];
function PrinterController(orderListService) {
	var foodList = this;

	foodList.items = orderListService.getItems();

	foodList.itemName = "";
	foodList.itemQuantity = "";

	foodList.addItem = function() {
		orderListService.addItem(foodList.itemName, foodList.itemQuantity);
	};

	foodList.removeItem = function (itemIndex) {
		orderListService.removeItem(itemIndex);
	};
}

orderListService.$inject = ['$q', 'obesityCheck'];
function orderListService($q, obesityCheck) {
	var service = this;

  var items = [];

	service.addItem = function (name, quantity) {
		var namePromise = obesityCheck.nameCheck(name);
		var quantityPromise = obesityCheck.quantityCheck(quantity);

		$q.all([namePromise, quantityPromise]).
		then(function (response) {
			var item = {
				name: name,
				quantity: quantity
			};
				items.push(item);
			})
			.catch(function (errorResponse) {
			alert(errorResponse.message);
			});
	}; //end service.addItem = function(name, quantity)

	service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };

	service.getItems = function () {
    return items;
  };
} //end orderListService.$inject['$q', 'obesityCheck'];


obesityCheck.$inject = ['$q', '$timeout'];
function obesityCheck($q, $timeout) {
	var service = this;

	service.nameCheck = function (name) {
		var deferred = $q.defer();

		var result = {
			message: ""
		};

		$timeout(function() {

			if (name.toLowerCase().indexOf('cookie') === -1) {
				deferred.resolve(result)
			}
			else {
				result.message = "You can't always eat cookies";
				deferred.reject(result);
			}
		}, 2000);

		return deferred.promise;
	}; //end nameCheck function


	service.quantityCheck = function(quantity) {
		var deferred = $q.defer();
		var result = {
			message: ""
		};

		$timeout(function() {

			if (quantity < 6) {
				deferred.resolve(result);
			}
			else {
				result.message = "That's too many cookies";
				deferred.reject(result);
			}
		}, 1000);

		return deferred.promise;
	}; //end quantityCheck function
} //end obesityCheck

}) ();
