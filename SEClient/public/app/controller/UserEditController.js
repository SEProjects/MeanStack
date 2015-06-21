/**
 * Created by kevin on 07.06.15.
 */
var app = angular.module("Autovermietung");

app.controller("UserEditController",function($scope,$http,$location,$routeParams){
    //prüft ob User eingelogt ist:
    $scope.Kunde = {};
    var id = $routeParams.id;

    var list = {},
        rc = document.cookie;

    rc && rc.split(';').forEach(function( cookie ) {
        var parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });
    if(typeof list['Session'] == 'undefined')
    {
        alert("Bitte loggen Sie sich erneut ein.");
        $location.url("/session/new");

    }
    else {
        console.info("!");
        //Logout button setzen
        $scope.s = true;
        $http.get("http://localhost:3000/users/" + list['Session'] + "/" + id).success(function (response) {
            if(typeof  response.message != 'undefined'){
                alert(response.message);
            }
            //wenn Session angelaufen oder nicht vorhanden zurück zum Login
            if (response.returnCode == '10') {
                document.cookie = 'Session = 0;expires=Thu, 01 Jan 1970 00:00:01 GMT';
                $location.url("/session/new");
            }
            $scope.Kunde = response;
        })




    }
    $scope.save = function () {

        $http.put("http://localhost:3000/users/" + list['Session'] + "/" + $scope.Kunde.email, $scope.Kunde).success(function (response) {
            //beim Fehler wird eine Message ausgeben
            if(typeof  response.message != 'undefined'){
                alert(response.message);
            }
            //wenn Session angelaufen oder nicht vorhanden zurück zum Login
            if (response.returnCode == '10') {
                document.cookie = 'Session = 0;expires=Thu, 01 Jan 1970 00:00:01 GMT';
                $location.url("/session/new");
            }
            $location.url("/kunden");


        });


    };

});


