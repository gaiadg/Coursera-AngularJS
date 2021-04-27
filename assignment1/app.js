(function () {
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {

    $scope.itemTyped = "";
    $scope.itemAnswer = "";

    $scope.countItems = function () {

      var itemsList = $scope.itemTyped.split(' ');
      itemAnswer.classList.add("whiteBg");

      if ($scope.itemTyped === "") {
<<<<<<< HEAD
        $scope.itemAnswer = "Please enter data first";
=======
        $scope.itemAnswer = "Please enter data first"
      }
      else if (itemsList.length <= 3) {
        $scope.itemAnswer = "Enjoy!"
>>>>>>> 7e39469937ac00975d910887b729224906c4874a
      }
      else if (itemsList.length <= 3) {
        $scope.itemAnswer = "Enjoy!";
      }
      else if (itemsList.length > 3) {
        $scope.itemAnswer = "Too Much!";
      }

    };

  }

})

();
