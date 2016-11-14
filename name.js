(function () {
  'use scrict';

  angular.module('myFirstApp', [])
  .controller('MyFirstController', function ($scope) {
    $scope.name = "Sandy";
    $scope.sayHello = function functionName() {
      return "Hello " + $scope.name + "!";
    };
  });
})();
