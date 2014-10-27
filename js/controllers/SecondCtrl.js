
myApp.controller('SecondCtrl', ['$scope', function($scope) {
  $scope.title = "Appel d'une fonction"
    $scope.ohHey = function () {
        alert("Oh hey");
    };
}]);