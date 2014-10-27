myApp.service("userService", ["utilsService", "$timeout",
    function(utilsService, $timeout) {
        //Variable priv�e
        var userData = {
            firstName: "natasha",
            userName: "nat31",
            age: 25
        };

        //Getter pour la variable userData
        this.getUserData = function() {
            //Cette m�thode fait appel � un autre service
            userData.firstName = utilsService.capitalize(userData.firstName);
            return userData;
        };

        //5 secondes apr�s le chargement de la page, la valeur d'une propri�t� change dans le service.
        //La view est mise � jour automatiquement
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