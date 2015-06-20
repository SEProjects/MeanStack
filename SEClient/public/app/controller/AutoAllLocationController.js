/**
 * Created by kevin on 10.06.15.
 */
var app = angular.module("Autovermietung");

app.controller("AutoAllLocationController", function($scope,$http,$location){




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
        $http.get("http://localhost:3000/autos/" + list['Session']).success(function (response) {
            if(typeof  response.message != 'undefined'){
                alert(response.message);
            }

            if( response.returnCode =='10')
            {

                document.cookie ='Session = 0;expires=Thu, 01 Jan 1970 00:00:01 GMT';
                $location.url("/session/new");
            }
            console.info(response);
            $scope.Autos = response.autos;


        }).error(function (err) {
            $scope.error = err;
            console.info(err);
        });
    }
});