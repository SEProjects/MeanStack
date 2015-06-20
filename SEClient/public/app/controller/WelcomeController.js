/**
 * Created by kevin on 05.06.15.
 */
var app = angular.module("Autovermietung");

app.controller("WelcomeController", function($http,$location){




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
    }
    $http.get("http://localhost:3000/session/" + list['Session'], $scope.login).success(function (response) {

        console.info(response);










    }).error(function (err) {
        $scope.error = err;
        console.info(err);
    });
});