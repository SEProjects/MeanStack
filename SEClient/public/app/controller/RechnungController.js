/**
 * Created by kevin on 10.06.15.
 */
var app = angular.module("Autovermietung");

app.controller("RechnungsController", function($scope,$http,$location,$window){




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
        $scope.s = true;
        $http.get("http://localhost:3000/rechnung/" + list['Session']).success(function (response) {
            console.info(response);
            if(typeof  response.message != 'undefined'){
                alert(response.message);
            }

            if( response.returnCode =='10')
            {

                document.cookie ='Session = 0;expires=Thu, 01 Jan 1970 00:00:01 GMT';
                $location.url("/session/new");
            }
            $scope.datensaetze = response.datensaetze;


        }).error(function (err) {
            $scope.error = err;
            console.info(err);
        });
        $scope.createAllRechnungen = function () {
            $http.post("http://localhost:3000/rechnung/" + list['Session']).success(function (response) {
                console.info(response);
                if(typeof  response.message != 'undefined'){
                    alert(response.message);
                }

                if( response.returnCode =='10')
                {

                    document.cookie ='Session = 0;expires=Thu, 01 Jan 1970 00:00:01 GMT';
                    $location.url("/session/new");
                }
                $window.location.reload();


            }).error(function (err) {
                $scope.error = err;
                console.info(err);
            });
        }
        $scope.Rechnungenbestaetigen = function (id) {
            $http.put("http://localhost:3000/rechnung/zahlung/" + list['Session'] + "/" + id).success(function (response) {
                console.info(response);
                if(typeof  response.message != 'undefined'){
                    alert(response.message);
                }

                if( response.returnCode =='10')
                {

                    document.cookie ='Session = 0;expires=Thu, 01 Jan 1970 00:00:01 GMT';
                    $location.url("/session/new");
                }


            }).error(function (err) {
                $scope.error = err;
                console.info(err);
            });
        }
    }
});
