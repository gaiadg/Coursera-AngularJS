(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var itemAdder = this;

  itemAdder.toBuyServiceArray = ShoppingListCheckOffService.getToBuyItems();

  itemAdder.shiftItem = function (itemIndex) {
    ShoppingListCheckOffService.shiftItem(itemIndex);
  };

}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var itemAdded = this;

  itemAdded.boughtServiceArray = ShoppingListCheckOffService.nowBoughtItems();

// The reference to the "bought" items array should be placed/exposed
// onto the AlreadyBoughtController instance as some property.


}

function ShoppingListCheckOffService() {
  var service = this;

  var toBuyServiceArray = [
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
      ]

  service.getToBuyItems = function () {
    return toBuyServiceArray;
  };

  var boughtServiceArray = []

  service.nowBoughtItems = function () {
    return boughtServiceArray;
  };

  service.shiftItem = function (itemIndex) {
    var boughtItem = toBuyServiceArray[itemIndex];
    console.log(itemIndex);
    console.log(boughtItem);
    console.log(boughtServiceArray.length);

    toBuyServiceArray.splice(itemIndex, 1);

    var item = {
      name: boughtItem.name,
      quantity: boughtItem.quantity
    };
    boughtServiceArray.push(item);
  };



// When the user clicks on the "Bought" button,
// simply pass the call from your (ng-click) controller-bound method
// to call the right method (service.method) inside of your
// ShoppingListCheckOffService service, which removes that item
// from the "to buy" array and pushes it to the "bought" array.

}


})();
