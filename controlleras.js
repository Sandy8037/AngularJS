(function () {
'use scrict';

angular.module('controllerAsApp', [])
.controller('ParentController1', ParentController1)
.controller('ChildController1', ChildController1)
.controller('ParentController2', ParentController2)
.controller('ChildController2', ChildController2)

ParentController1.$inject = ['$scope'];
function ParentController1($scope) {
  $scope.parentValue = 1;
  $scope.pc = this;
  $scope.pc.parentValue = 2;
}

ChildController1.$inject = ['$scope'];
function ChildController1($scope) {
  // console.log("parentValue: ", $scope.parentValue);
  // console.log($scope);

  $scope.parentValue = 5;
  // console.log("parentValue: ", $scope.parentValue);
  // console.log($scope);

  $scope.pc.parentValue = 5;
  // console.log("parentValue: ", $scope.pc.parentValue);
  // console.log($scope);
  // console.log($scope.$parent.parentValue);
}

function ParentController2() {
  var parent = this;
  parent.value = 1;
}

ChildController2.$inject = ['$scope'];
function ChildController2($scope) {
  var child = this;
  child.value = 5;
  console.log($scope);
}

})();
