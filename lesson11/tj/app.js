(function () {
  'use script';

  angular.module('feedApp', [])
  .controller('feederApp', feederApp);

  feederApp.$inject = ['$scope'];
  function feederApp($scope) {
    $scope.name = "TJ";
    $scope.status = "hungry";

    $scope.sayMessage = function () {
      return "Pls gimme food";
    };

    $scope.givingFood = function () {
      $scope.status = "fed";
    };

}

})();
