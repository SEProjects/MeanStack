/**
 * Created by kevin on 21.06.15.
 */
describe('Controllers', function() {
    beforeEach(module('Autovermietung'));

    var $controller;
    var Session;
    var $http;
    beforeEach(inject(function(_$controller_,_$http_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
        $http =  _$http_;

    }));


    describe('Login', function() {
        it('LoginTest', function () {
            var $scope = {};
            var controller = $controller('SessionController', {$scope: $scope});
            $scope.login.password = '1234';
            $scope.login.email = 'Kevin@web.de';
            $http.post("http://localhost:3000/session", $scope.login).success(function (response) {

                console.info(response);
                if (response.returnCode == '0') {
                    expect(response.returnCode).toEqual('0');
                    Session = response.session;

                }


            });
        })
        it('LoginTestfail', function () {
            var $scope = {};
            var controller = $controller('SessionController', {$scope: $scope});
            $scope.login.password = '1234';
            $scope.login.email = 'Kevin@web.de2';
            $http.post("http://localhost:3000/session", $scope.login).success(function (response) {


                expect(response.returnCode).toEqual('10');
            });
        })


    });
    describe('AutoArten', function() {
        it('GetAutoArten', function () {

            $http.get("http://localhost:3000/aa/" + Session).success(function (response){



                    expect(response.returnCode).toEqual('0');





            });
        })
        it('GetAutoArtenFail', function () {


            $http.get("http://localhost:3000/aa/" + 10).success(function (response){



                expect(response.returnCode).toEqual('10');





            });
        })


    });
    describe('Auto', function() {
        it('GetAutos', function () {

            $http.get("http://localhost:3000/autos/" + Session).success(function (response){



                expect(response.returnCode).toEqual('0');





            });
        })


    });
    describe('Auto', function() {
        it('GetAutolocation', function () {


            $http.get("http://localhost:3000/autos/" + Session).success(function (response) {




                expect(response.returnCode).toEqual('0');





            });
        })


    });
    describe('Kraftstoff', function() {
        it('GetKraftstoff', function () {


            $http.get("http://localhost:3000/ks/" + Session).success(function (response) {




                expect(response.returnCode).toEqual('0');





            });
        })


    });
    describe('Marken', function() {
        it('GetMarken', function () {


            $http.get("http://localhost:3000/marken/" + Session).success(function (response) {




                expect(response.returnCode).toEqual('0');





            });
        })


    });
    describe('Marken', function() {
        it('GetMarken', function () {


            $http.get("http://localhost:3000/rechnung/" + Session ).success(function (response){




                expect(response.returnCode).toEqual('0');





            });
        })


    });
    describe('Marken', function() {
        it('GetMarken', function () {


            $http.get(" http://localhost:3000/users/" + Session ).success(function (response){




                expect(response.returnCode).toEqual('0');





            });
        })


    });



});
