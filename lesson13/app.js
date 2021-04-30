(function () {
  'use strict';

  angular.module('feedApp', [])
  .controller('feederApp', feederApp)
  .filter('loves', LovesFilter)
  .filter('truth', TruthFilter);

  feederApp.$inject = ['$scope', 'lovesFilter'];
    function feederApp($scope, lovesFilter) {
      $scope.name = "Cass";
      $scope.status = "hungry";

      $scope.sayMessage = function () {
        var msg = "Pls gimme bacon";
        return msg;
      };

      $scope.sayLovesMessage = function () {
        var msg = "Pls gimme bacon";
        msg = lovesFilter(msg);
        return msg;
      };

      $scope.givingFood = function () {
        $scope.status = "fed";
      };
    }

  function LovesFilter () {
    return function (input) {
      input = input || "";
      input = input.replace("likes", "loves")
      return input;
    }
  }

  function TruthFilter () {
    return function (input, target, replace) {
      input = input || "";
      input = input.replace(target, replace);
      return input;
    }
  }

})();
