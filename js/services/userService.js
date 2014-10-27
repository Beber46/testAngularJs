myApp.service("userService", ["utilsService", "$timeout",
    function(utilsService, $timeout) {
        //Variable privée
        var userData = {
            firstName: "natasha",
            userName: "nat31",
            age: 25
        };

        //Getter pour la variable userData
        this.getUserData = function() {
            //Cette méthode fait appel à un autre service
            userData.firstName = utilsService.capitalize(userData.firstName);
            return userData;
        };

        //5 secondes après le chargement de la page, la valeur d'une propriété change dans le service.
        //La view est mise à jour automatiquement
        $timeout(function() {
            userData.userName = "NATNAT";
        }, 5000);
    }
]);

myApp.service("utilsService", [
    function() {
        this.capitalize = function(str) {
            //Credit: http://stackoverflow.com/a/1026087/962893
            return str.charAt(0).toUpperCase() + str.slice(1);
        };
    }
]);