(function () {
'use scrict';

var list = ['a', 'b', 'c', 'aa', 'ab', 'ac', 'bb', 'bc', 'cc', 'aaa', 'bbb', 'ccc'];

angular.module('listApp', [])
.controller('listAppController', ListController);

ListController.$inject = ['$scope'];
function ListController($scope) {
  $scope.list = list;
}

})();
