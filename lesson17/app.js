(function () {
  'use strict';

  var shoppingList1 = [
    "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
  ];

  var shoppingList2 = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    }
  ];

  angular.module('listerApp', [])
  .controller('listerController', listerController);

  listerController.$inject = ['$scope'];
  function listerController($scope) {
    $scope.shoppingList1 = shoppingList1;
    $scope.shoppingList2 = shoppingList2;

    $scope.addToList = function () {
      var newItem = {
        name: $scope.newItemName,
        quantity: $scope.newItemQuantity
      };

      $scope.shoppingList2.push(newItem);
    };

    var searchValue = "Bismol";
    function containsFilter (value) {
      return value.indexOf(searchValue) !==-1;
    }

    var searchedShoppingList = shoppingList1.filter(containsFilter);
  }


})

();
