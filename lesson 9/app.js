(function () {
  'use strict';

  angular.module('upperingCase', [])
  .controller('makingUpperCase', makingUpperCase);

    function makingUpperCase ($scope, $filter) {
      $scope.name="Gaia";

      $scope.upperCaser = function () {
      var uppercase=$filter('uppercase');
      $scope.name = uppercase($scope.name);

      };
    }

})

();
