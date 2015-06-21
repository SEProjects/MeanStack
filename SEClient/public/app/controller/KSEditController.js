/**
 * Created by kevin on 07.06.15.
 */
var app = angular.module("Autovermietung");

app.controller("KSEditController",function($scope, $http, $location,$routeParams){
    //prüft ob User eingelogt ist:
    $scope.KS = {};
    var id = $routeParams.id;
    var list = {},
        rc = document.cookie;

    rc && rc.split(';').forEach(function( cookie ) {
        var parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });
    $http.get("http://10.60.70.15:3000/ks/" + list['Session'] + "/" + id).success(function(response){
        if(typeof  response.message != 'undefined'){
            alert(response.message);
        }

        if( response.returnCode =='10')
        {

            document.cookie ='Session = 0;expires=Thu, 01 Jan 1970 00:00:01 GMT';
            $location.url("/session/new");
        }
        $scope.KS = response;
    });
    if(typeof list['Session'] == 'undefined')
    {
        alert("Bitte loggen Sie sich erneut ein.");
        $location.url("/session/new");

    }
    else {
        //Logout button setzen
        $scope.s = true;
        $scope.saveKS = function () {
            $http.put("http://10.60.70.15:3000/ks/" + list['Session'] + "/" + id, $scope.KS)
                .success(function (response) {
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
                    $location.url("/kraftstoff");
                });

        }
    }


});