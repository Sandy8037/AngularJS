(function () {
'use scrict';

angular.module('myFilter', [])
.controller('myFilterController', FilterController);

FilterController.$inject = ['$scope', '$filter'];
function FilterController($scope, $filter) {
  $scope.name = "Sandy";
  var output;
  $scope.press = function () {
    output = $filter('uppercase')($scope.name);
    $scope.name = output;
  };
}

})();
