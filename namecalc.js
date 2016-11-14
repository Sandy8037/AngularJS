(function () {
'use scrict';

angular.module('nameCalculator', [])
.controller('nameCalculatorController', function ($scope) {
  $scope.name = "";
  $scope.totalValue = 0;

  $scope.displayNumeric = function () {
    var totalNameValue = calculateNumeric($scope.name);
    $scope.totalValue = totalNameValue;
  };

  function calculateNumeric(string) {
    var total = 0;
    for (var i = 0; i < string.length; i++) {
      total += string.charCodeAt(i);
    }
    return total;
  }

});
})();
