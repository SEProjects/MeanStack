/**
 * Created by kevin on 12.06.15.
 */
/**
 * Created by kevin on 10.06.15.
 */
var app = angular.module("Autovermietung");

app.controller("RechnungsRabattController", function($scope,$http,$location, $routeParams,global){
    //prüft ob User eingelogt ist:

    var id = $routeParams.id;
    $scope.Rechnung={}

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
        $http.get(global.url + "/rechnung/rabatt/" + list['Session'] + "/" + id).success(function (response) {
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
            $scope.Rechnung = response;


        }).error(function (err) {
            $scope.error = err;
            console.info(err);
        });

        $scope.SaveRabatt = function () {
            $http.put(global.url + "/rechnung/rabatt/" + list['Session'] + "/" + id, $scope.Rechnung).success(function (response) {
                console.info(response);
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
                $location.url("/rechnungen");


            }).error(function (err) {
                $scope.error = err;
                console.info(err);
            });
        }
    }
});
