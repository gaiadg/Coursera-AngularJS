(function () {
  'use script';

  angular.module('feedApp', [])
  .controller('feederApp', feederApp);

  feederApp.$inject = ['$scope', '$filter'];
  function feederApp($scope, $filter) {
    $scope.name = "Toby";
    $scope.status = "hungry";
    $scope.fishCost = ".56";

    $scope.sayMessage = function () {
      var msg = "Pls gimme fish";
      var outcome = $filter('uppercase')(msg);
      return outcome;
    };

    $scope.givingFood = function () {
      $scope.status = "fed";
    };

}

})();
