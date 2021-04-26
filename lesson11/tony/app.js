(function () {
  'use script';

  angular.module('feedApp', [])
  .controller('feederApp', feederApp);

  feederApp.$inject = ['$scope'];
  function feederApp($scope) {
    $scope.name = "Tony";
    $scope.status = "hungry";

    $scope.sayMessage = function () {
      return "Pls gimme bacon";
    };

    $scope.givingFood = function () {
      $scope.status = "fed";
    };

}

})();
