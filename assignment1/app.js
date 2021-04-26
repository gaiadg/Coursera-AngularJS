(function () {
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {

    $scope.itemAnswer = "";

    $scope.countItems = function () {
      var itemsList = $scope.itemTyped.split(' ');
      itemAnswer.classList.add("whiteBg")

      if (itemsList.length <= 3) {
        $scope.itemAnswer = "Enjoy!"
      }
      else if (itemsList.length > 3) {
        $scope.itemAnswer = "Too Much!"
      }
      else {
        $scope.itemAnswer = "Please enter data first"
      }

    };

  }

})

();
