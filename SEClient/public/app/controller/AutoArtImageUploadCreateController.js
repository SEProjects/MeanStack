/**
 * Created by kevin on 11.06.15.
 */
var app = angular.module("Autovermietung");
app.controller('AutoArtImageUploadCreateController', ['$scope', 'Upload','$routeParams', '$window', '$http', function ($scope, Upload, $routeParams, $window, $http) {
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
        $http.get("http://localhost:3000/aa/pic/" + list['Session'] + "/" + id).success(function (response) {
            if(typeof  response.message != 'undefined'){
                alert(response.message);
            }

            if( response.returnCode =='10')
            {

                document.cookie ='Session = 0;expires=Thu, 01 Jan 1970 00:00:01 GMT';
                $location.url("/session/new");
            }
            $scope.image = response.bild;
        });

        $scope.$watch('files', function () {
            $scope.upload($scope.files);
        });


        $scope.upload = function (files) {
            if (files && files.length) {
                for (var i = 0; i < files.length; i++) {
                    var file = files[i];
                    Upload.upload({
                        url: 'http://localhost:3000/aa/pic/' + list['Session'] + "/" + id,

                        file: file
                    }).success(function () {
                        if(typeof  response.message != 'undefined'){
                            alert(response.message);
                        }

                        if( response.returnCode =='10')
                        {

                            document.cookie ='Session = 0;expires=Thu, 01 Jan 1970 00:00:01 GMT';
                            $location.url("/session/new");
                        }
                        $window.location.reload();
                    });
                }
            }
        };
    }
}]);