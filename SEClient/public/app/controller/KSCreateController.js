/**
 * Created by kevin on 07.06.15.
 */
var app = angular.module("Autovermietung");

app.controller("KSCreateController",function($scope, $http, $location){
    $scope.KS = {};

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
        $scope.createKS = function () {
            $http.post("http://localhost:3000/ks/" + list['Session'] + "/new", $scope.KS)
                .success(function (response) {
                    if(typeof  response.message != 'undefined'){
                        alert(response.message);
                    }

                    if( response.returnCode =='10')
                    {

                        document.cookie ='Session = 0;expires=Thu, 01 Jan 1970 00:00:01 GMT';
                        $location.url("/session/new");
                    }
                    $location.url("/kraftstoff");
                });

        }

    }

});