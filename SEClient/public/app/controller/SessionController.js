/**
 * Created by kevin on 05.06.15.
 */
var app = angular.module("Autovermietung");

app.controller("SessionController", function($scope,$http,$location,  $window){
   $scope.login = {};

    var list = {},
        rc = document.cookie;

    rc && rc.split(';').forEach(function( cookie ) {
        var parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });
    if(typeof list['Session'] != 'undefined')
    {
        $location.url("/");
    }
    $scope.createSession = function() {


        $http.post("http://localhost:3000/session", $scope.login).success(function (response) {

            console.info(response);
            document.cookie = response;
            document.cookie = "Session = " + encodeURIComponent(response.session) +
                "; max-age=" + 60 * 60 * 24 * 1;
            console.info(document.cookie);
            $window.location.reload();
        })
    }
});