var myApp = angular.module('myApp',[]);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html'
        })
        .when('/account', {
            templateUrl: 'partials/account.html'
        })
        .otherwise({redirectTo:'/'});
}]);