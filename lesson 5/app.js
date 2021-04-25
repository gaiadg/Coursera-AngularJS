// IFE
(function() {
	'use strict';

	angular.module('myFirstApp', [])
  .controller('MyFirstController', function($scope) {
    $scope.name = '';
    $scope.sayBuongiornissimo = function () {
      return 'Buongiornissimo Kaffééééé';
    };

  });

// IFEE expression end
})

// execute IFEE
();
