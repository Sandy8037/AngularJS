(function () {
'use scrict';

angular.module('applyApp', [])
.controller('applyAppController', ApplyController)

ApplyController.$inject = ['$scope', '$timeout'];
function ApplyController($scope, $timeout) {
  $scope.counter = 0;

  $scope.upCounter = function () {
    $timeout(function () {
      $scope.counter++;
      console.log("updated");
    }, 1000);
  };

  // $scope.upCounter = function functionName() {
  //   setTimeout(function () {
  //     $scope.$apply(function () {
  //       $scope.counter++;
  //       console.log("updated");
  //     });
  //   }, 1000);
  // };

  // $scope.upCounter = function functionName() {
  //   setTimeout(function () {
  //     $scope.counter++;
  //     console.log("updated");
  //     $scope.$digest();
  //   }, 1000);
  // };
}


})();
