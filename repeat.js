(function () {
'use script';

var numbers = [];
for (var i = 0; i < 10; i++) {
  numbers[i] = i;
}

angular.module('repeatApp', [])
.controller('repeatAppController', RepeatController);

RepeatController.$inject = ['$scope'];
function RepeatController($scope) {
  $scope.numbers = numbers;

  $scope.addToList = function () {
    $scope.numbers.push($scope.new);
  };
}

})();
