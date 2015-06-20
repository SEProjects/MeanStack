/**
 * Created by kevin on 12.06.15.
 */
/**
 * Created by kevin on 10.06.15.
 */
var app = angular.module("Autovermietung");

app.controller("RechnungshowController", function($scope,$http,$location,$routeParams){

    var id = $routeParams.id;
    $scope.Rechnung={};

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
        $http.get("http://localhost:3000/rechnung/" + list['Session'] + "/" + id).success(function (response) {
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
            $scope.Rechnung = response;


        }).error(function (err) {
            $scope.error = err;
            console.info(err);
        });
    }
});
