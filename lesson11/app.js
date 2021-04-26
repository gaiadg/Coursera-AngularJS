(function () {
  'use script';

  angular.module('feedApp', [])
  .controller('feederApp', feederApp);

  feederApp.$inject = ['$scope'];
  function feederApp($scope) {
    $scope.name = "Toby";
    $scope.status = "hungry";

    $scope.sayMessage = function () {
      return "Pls gimme fish";
    };

    $scope.givingFood = function () {
      $scope.status = "fed";
    };

}

})();
