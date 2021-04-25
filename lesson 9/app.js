(function () {
  'use strict';

  angular.module('uppercaseApp', [])
  .controller('uppercaserController', uppercaserController);

  function uppercaserController ($scope, $filter){
    $scope.name = "";

    $scope.upperCaser = function () {
      var upperCaser = $filter('uppercase');
      $scope.name = upperCaser($scope.name);
    };

  }


})

();
