
myApp.controller('MainCtrl', ['$scope', function($scope) {
  $scope.title = "Boucle sur un objet javascript"
    $scope.users = [
        {name:'Bertrand',age:21},
        {name:'Marion',age:24},
        {name:'Laura',age:25},
        {name:'Morgan',age:23}
    ];
}]);

