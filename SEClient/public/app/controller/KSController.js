/**
 * Created by kevin on 07.06.15.
 */
/**
 * Created by kevin on 07.06.15.
 */
var app = angular.module("Autovermietung");

app.controller("KSController", function($scope,$http,$location,global){
//prüft ob User eingelogt ist:



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
        //Logout button setzen
        $scope.s = true;
        $http.get(global.url + "/ks/" + list['Session']).success(function (response) {
            //beim Fehler wird eine Message ausgeben
            if(typeof  response.message != 'undefined'){
                alert(response.message);
            }
            //wenn Session angelaufen oder nicht vorhanden zurück zum Login
            if( response.returnCode =='10')
            {
                //lösche Cookie
                document.cookie ='Session = 0;expires=Thu, 01 Jan 1970 00:00:01 GMT';
                $location.url("/session/new");
            }
            $scope.datensaetze = response.datensaetze;


        }).error(function (err) {
            $scope.error = err;
            console.info(err);
        });
    }
});