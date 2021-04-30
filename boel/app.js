(function () {
  'use strict';
  angular.module('BoelApp', [])
  .controller('BoelController', BoelController);

  BoelController.$inject = ['$scope'];

  function BoelController($scope) {

    $scope.playHigh = function() {
       var audio = new Audio('audio/high.wav');
       audio.play();
     };

    $scope.playLow = function() {
      console.log("low");
       var audio = new Audio('audio/low.wav');
       audio.play();
     };

  }

})

();
