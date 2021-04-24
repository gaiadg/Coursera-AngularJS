(function() {
  'use strict';

  angular.module('calculateNameValue', [])
  .controller('calculatorNameValue', function($scope) {

    $scope.name = '';
    $scope.nameValue = 0;

    $scope.calculator = function () {
      var calculatedTotal = calculator($scope.name);
      $scope.nameValue = calculatedTotal;
    };

    function calculator(string) {
      var finalResult = 0;
      for (var i=0; i<string.length; i++) {
        finalResult =+ string.charCodeAt(i);
      }
      return finalResult;
    }

  });

})

();








// (function () {
//  'use strict';
// 	angular.module('myNameCalculatormodule', [])
// 	.controller ('MyNameCalculatorController', function($scope) {
// 		$scope.name = "";
// 		$scope.calculatedValue = 0;
//
// 		$scope.displayResult = function () {
// 			var finalResult = nameCalculator($scope.name);
// 			$scope.calculatedValue = finalResult;
// 		};
//
// 		function nameCalculator(string) {
// 			var typedLetters = 0;
// 			for (var i=0; i<string.length; i++) {
// 				typedLetters =+ string.charCodeAt(i);
// 			}
// 			return typedLetters;
// 		}


	// closes controller
	// });

// ends ifee
// })

// runs ifee
// ();















//
// (function() {
// 	'use strict';
// 	angular.module('NameCalculator', [])
//   .controller('NameCalculatorController', function($scope) {
// 		$scope.name = "";
// 		$scope.totalValue = 0;
// 		$scope.displayNumeric = function() {
// 			var totalToDisplay = calculatorFunction($scope.name);
// 			$scope.totalValue = totalToDisplay;
// 		};
//
// 		function calculatorFunction(string) {
// 			var typedLetters = 0;
// 			for (var i = 0; i < string.length; i++) {
// 				typedLetters += string.charCodeAt(i);
// 			}
// 			return typedLetters;
// 		}
// 	});

// })();
