(function () {
'use scrict';

angular.module('bindingApp', [])
.controller('bindingAppController', BindingController);

BindingController.$inject = ['$scope'];
function BindingController($scope) {
  $scope.firstName = "Sandy";

  $scope.numberofwatchers = function () {
    console.log("# of watchers " + $scope.$$watchersCount);
  };

  $scope.setFullName = function () {
    $scope.fullName = $scope.firstName + " Devarapalli";
  };

  $scope.logFirst = function () {
    console.log($scope.firstName);
  };

  $scope.logFull = function () {
    console.log($scope.fullName);
  };
}

})();
