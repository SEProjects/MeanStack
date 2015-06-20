/**
 * Created by kevin on 06.06.15.
 */
/**
 * Created by kevin on 05.06.15.
 */
var app = angular.module("Autovermietung");

app.controller("UserController", function($scope,$http,$location){


            console.info("start");

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
    else
    {
        $scope.s = true;


        $http.get("http://localhost:3000/users/" + list['Session']).success(function (response) {
            console.info(response.returnCode);
            if(typeof  response.message != 'undefined'){
                alert(response.message);
            }

            if( response.returnCode =='10')
            {

                document.cookie ='Session = 0;expires=Thu, 01 Jan 1970 00:00:01 GMT';
                $location.url("/session/new");
            }
            $scope.Kunden = response.datensaetze;




        }).error(function (err) {
            $scope.error = err;
            console.info(err);
        });
    }
});