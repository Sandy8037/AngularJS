(function () {
'use scrict';

angular.module('watcherApp', [])
.controller('watcherAppController', WatcherController);

WatcherController.$inject = ['$scope'];
function WatcherController($scope) {
  $scope.onceCounter = 0;
  $scope.counter = 0;

  $scope.numberofwatchers = function () {
    console.log("# of watchers: " + $scope.$$watchersCount);
  };

  $scope.countOnce = function () {
    $scope.onceCounter = 1;
  };

  $scope.upCounter = function () {
    $scope.counter++;
  };

  $scope.$watch('onceCounter', function (newValue, oldValue) {
    console.log("onceCounter old value: " + oldValue);
    console.log("onceCounter new value: " + newValue);
  });

  $scope.$watch('counter', function (newValue, oldValue) {
    console.log("counter old value: " + oldValue);
    console.log("counter new value: " + newValue);
  });
}

})();
