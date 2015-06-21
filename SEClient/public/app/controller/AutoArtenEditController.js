/**
 * Created by kevin on 08.06.15.
 */
var app = angular.module("Autovermietung");

app.controller("AutoArtenEditController", function($scope,$http,$location,$routeParams){
    //prüft ob User eingelogt ist:
    $scope.aa = {};
    var marken = [];
    var ks = [];
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
        $http.get("http://10.60.70.15:3000/marken/" + list['Session']).success(function (response) {
            //beim Fehler wird eine Message ausgeben
            if(typeof  response.message != 'undefined'){
                alert(response.message);
            }
            //wenn Session angelaufen oder nicht vorhanden zurück zum Login
            if( response.returnCode =='10')
            {

                document.cookie ='Session = 0;expires=Thu, 01 Jan 1970 00:00:01 GMT';
                $location.url("/session/new");
            }

            //erstellt dropdownlisten
            for (var i = 0; i < response.datensaetze.length; i++) {
                var marke = {id: response.datensaetze[i].item[0].$value, name: response.datensaetze[i].item[1].$value};
                marken.push(marke);
            }
            $scope.marken = marken;
            console.info(marken);

        })
        $http.get("http://10.60.70.15:3000/ks/" + list['Session']).success(function (response) {
            //beim Fehler wird eine Message ausgeben
            if(typeof  response.message != 'undefined'){
                alert(response.message);
            }
            //wenn Session angelaufen oder nicht vorhanden zurück zum Login
            if( response.returnCode =='10')
            {

                document.cookie ='Session = 0;expires=Thu, 01 Jan 1970 00:00:01 GMT';
                $location.url("/session/new");
            }
            // erstellt Dropdownlisten
            for (var i = 0; i < response.datensaetze.length; i++) {

                var k = {id: response.datensaetze[i].item[0].$value, name: response.datensaetze[i].item[1].$value};
                ks.push(k);
            }
            $scope.ks = ks;

        })

        $http.get("http://10.60.70.15:3000/aa/" + list['Session'] + "/" + id).success(function (response) {
            //beim Fehler wird eine Message ausgeben
            if(typeof  response.message != 'undefined'){
                alert(response.message);
            }
            //wenn Session angelaufen oder nicht vorhanden zurück zum Login
            if( response.returnCode =='10')
            {

                document.cookie ='Session = 0;expires=Thu, 01 Jan 1970 00:00:01 GMT';
                $location.url("/session/new");
            }
            //übergibt daten an die View
            $scope.aa = response;
        });

        $scope.saveAA = function () {
            $http.put("http://10.60.70.15:3000/aa/" + list['Session'] + "/" + id, $scope.aa)
                .success(function (response) {
                    //beim Fehler wird eine Message ausgeben
                    if(typeof  response.message != 'undefined'){
                        alert(response.message);
                    }
                    //wenn Session angelaufen oder nicht vorhanden zurück zum Login
                    if( response.returnCode =='10')
                    {
                            //lösche den Cookie
                        document.cookie ='Session = 0;expires=Thu, 01 Jan 1970 00:00:01 GMT';
                        $location.url("/session/new");
                    }
                    $location.url("/autoarten");
                });

        }
    }
});