/**
 * Created by kevin on 05.06.15.
 */
var app = angular.module("Autovermietung");

app.controller("WelcomeController", function($http,$location,$scope){




    var list = {},
        rc = document.cookie;

    rc && rc.split(';').forEach(function( cookie ) {
        var parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });
    if(typeof list['Session'] == 'undefined')
    {
        $location.url("/session/new");
    } else
    {
        $scope.s = true;
        $http.get("http://localhost:3000/schaden/" + list['Session']).success(function (response) {
            console.info(response);
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
            $scope.schaden = response.datensaetze;
            $http.get("http://localhost:3000/dreck/" + list['Session']).success(function (response) {
                console.info(response);
                if (typeof  response.message != 'undefined') {
                    alert(response.message);
                }
                //wenn Session angelaufen oder nicht vorhanden zurück zum Login
                if (response.returnCode == '10') {
                    //lösche Cookie
                    document.cookie = 'Session = 0;expires=Thu, 01 Jan 1970 00:00:01 GMT';
                    $location.url("/session/new");
                }
                $scope.dreck = response.datensaetze;
            })


        }).error(function (err) {
            $scope.error = err;
            console.info(err);
        });

    }
    $scope.deleteDreck= function (id) {
        $http.delete("http://localhost:3000/dreck/" + list['Session']+ "/"  +id).success(function (response) {
            console.info(response);
            if (typeof  response.message != 'undefined') {
                alert(response.message);
            }
            //wenn Session angelaufen oder nicht vorhanden zurück zum Login
            if (response.returnCode == '10') {
                //lösche Cookie
                document.cookie = 'Session = 0;expires=Thu, 01 Jan 1970 00:00:01 GMT';
                $location.url("/session/new");
            }
            $location.url("#/");
        })
    }
    $scope.deleteSchaden= function (id) {
        $http.delete("http://localhost:3000/schaden/" + list['Session'] + "/"  +id).success(function (response) {
            console.info(response);
            if (typeof  response.message != 'undefined') {
                alert(response.message);
            }
            //wenn Session angelaufen oder nicht vorhanden zurück zum Login
            if (response.returnCode == '10') {
                //lösche Cookie
                document.cookie = 'Session = 0;expires=Thu, 01 Jan 1970 00:00:01 GMT';
                $location.url("/session/new");
            }
            $location.url("#/");
        })
    }












});