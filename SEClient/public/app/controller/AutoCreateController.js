/**
 * Created by kevin on 09.06.15.
 */
var app = angular.module("Autovermietung");

app.controller("AutoCreateController", function($scope,$http,$location,$routeParams,$document,global){
    //prüft ob User eingelogt ist:
    $scope.auto = {};
    var aa = [];

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
        //Logout button setzen
        $scope.s = true;
        $http.get(global.url + "/aa/" + list['Session']).success(function (response) {
            //beim Fehler wird eine Message ausgeben
            if(typeof  response.message != 'undefined'){
                alert(response.message);
            }
            //wenn Session angelaufen oder nicht vorhanden zurück zum Login
            if( response.returnCode =='10')
            {
                //löscht den Cookie
                document.cookie ='Session = 0;expires=Thu, 01 Jan 1970 00:00:01 GMT';
                $location.url("/session/new");
            }
            for (var i = 0; i < response.datensaetze.length; i++) {


                var a = {id: response.datensaetze[i].item[0].$value, name: response.datensaetze[i].item[1].$value};
                aa.push(a);
            }
            $scope.aa = aa;

        })

        $scope.createAuto = function () {
            $http.post(global.url + "/autos/" + list['Session'] + "/new", $scope.auto)
                .success(function (response) {
                    //beim Fehler wird eine Message ausgeben
                    if(typeof  response.message != 'undefined'){
                        alert(response.message);
                    }
                    //wenn Session angelaufen oder nicht vorhanden zurück zum Login
                    if( response.returnCode =='10')
                    {
                        //löscht den Cookie
                        document.cookie ='Session = 0;expires=Thu, 01 Jan 1970 00:00:01 GMT';
                        $location.url("/session/new");
                    }
                    $location.url("/autos");
                });


        }
    }
});