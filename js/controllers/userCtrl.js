myApp.controller("UserCtrl", ["$scope", "userService",
    function($scope, userService) {
        $scope.userData = userService.getUserData();
    }
]);
