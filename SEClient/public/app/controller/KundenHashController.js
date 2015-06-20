/**
 * Created by kevin on 20.06.15.
 */
var app = angular.module("Autovermietung");

app.controller("KundenHashController", function($scope,$http,$location,$routeParams){
    var hash = $routeParams.hash;
    $http.post("http://localhost:3000/users/hash/" + hash)
        .success(function (response) {

        });



});