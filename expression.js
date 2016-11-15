(function () {
'use scrict';

angular.module('expApp', [])
.controller('expController', EXPController);

EXPController.$inject = ['$scope'];

function EXPController($scope) {
  $scope.name = "Sandy";
  $scope.color = "red";
  $scope.press = function () {
    $scope.message = "Hello " + $scope.name + "!";
  };
}

})();
