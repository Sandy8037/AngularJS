(function () {
'use scrict';

angular.module('cusFilter', [])
.controller('cusFilterController', CUSFilter)
.filter('name', NameFilter)
.filter('change', ChangeNameFilter);

CUSFilter.$inject = ['$scope', 'nameFilter'];
function CUSFilter($scope, nameFilter) {
  $scope.hello = "Hello Sandy";
  $scope.hi = NameFilter();
}

function NameFilter() {
  return function (input) {
    input = input || "";
    input = "Hi Devarapalli";
    return input;
  };
}

function ChangeNameFilter() {
  return function functionName(input, target) {
    input = input || "";
    input = "Hello " +target;
    return input;
  };
}

})();
