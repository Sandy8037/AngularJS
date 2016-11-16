(function () {
'use scrict';

var list = ['a', 'b', 'c', 'aa', 'ab', 'ac', 'bb', 'bc', 'cc', 'aaa', 'bbb', 'ccc'];

angular.module('searchApp', [])
.controller('searchAppController', SearchController);

SearchController.$inject = ['$scope'];
function SearchController($scope) {
  $scope.list = list;
}

})();
