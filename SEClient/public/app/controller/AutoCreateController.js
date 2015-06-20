/**
 * Created by kevin on 09.06.15.
 */
var app = angular.module("Autovermietung");

app.controller("AutoCreateController", function($scope,$http,$location,$routeParams,$document){
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
        $scope.s = true;
        $http.get("http://localhost:3000/aa/" + list['Session']).success(function (response) {
            if(typeof  response.message != 'undefined'){
                alert(response.message);
            }

            if( response.returnCode =='10')
            {

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
            $http.post("http://localhost:3000/autos/" + list['Session'] + "/new", $scope.auto)
                .success(function (response) {
                    if(typeof  response.message != 'undefined'){
                        alert(response.message);
                    }

                    if( response.returnCode =='10')
                    {

                        document.cookie ='Session = 0;expires=Thu, 01 Jan 1970 00:00:01 GMT';
                        $location.url("/session/new");
                    }
                    $location.url("/autos");
                });


        }
    }
});