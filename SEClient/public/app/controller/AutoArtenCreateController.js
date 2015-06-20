
var app = angular.module("Autovermietung");

app.controller("AutoArtenCreateController", function($scope,$http,$location,$routeParams){
    $scope.aa = {};
    var marken = [];
    var ks = [];
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
        $http.get("http://localhost:3000/marken/" + list['Session']).success(function (response) {
            if(typeof  response.message != 'undefined'){
                alert(response.message);
            }
            if( response.returnCode =='10')
            {

                document.cookie ='Session = 0;expires=Thu, 01 Jan 1970 00:00:01 GMT';
                $location.url("/session/new");
            }
            for (var i = 0; i < response.datensaetze.length; i++) {
                var marke = {id: response.datensaetze[i].item[0].$value, name: response.datensaetze[i].item[1].$value};
                marken.push(marke);
            }
            $scope.marken = marken;
            console.info(marken);

        })
        $http.get("http://localhost:3000/ks/" + list['Session']).success(function (response) {
            if(typeof  response.message != 'undefined'){
                alert(response.message);
            }
            if( response.returnCode =='10')
            {

                document.cookie ='Session = 0;expires=Thu, 01 Jan 1970 00:00:01 GMT';
                $location.url("/session/new");
            }
            for (var i = 0; i < response.datensaetze.length; i++) {
                if (i == 0) {
                    $scope.aa.marke = response.datensaetze[i].item[0].$value;
                }
                var k = {id: response.datensaetze[i].item[0].$value, name: response.datensaetze[i].item[1].$value};
                ks.push(k);
            }
            $scope.ks = ks;

        })


        $scope.createAA = function () {

            $http.post("http://localhost:3000/aa/" + list['Session'] + "/new", $scope.aa).success(function (response) {
                if(typeof  response.message != 'undefined'){
                    alert(response.message);
                }
                if( response.returnCode =='10')
                {

                    document.cookie ='Session = 0;expires=Thu, 01 Jan 1970 00:00:01 GMT';
                    $location.url("/session/new");
                }
                    $location.url("/autoarten");
                });

        }
    }
});