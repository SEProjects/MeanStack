var app = angular.module("Autovermietung",['ngRoute', 'ngMap','ngFileUpload']);
app.run(function($rootScope,$location) {
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
        $rootScope.s = true;
    };

});
app.config(function($routeProvider) {

    $routeProvider
        .when("/",  {
            templateUrl:"/app/template/index.html"

        })
        .when("/session/new",{
            templateUrl:"/app/template/login.html",
            controller: "SessionController"

        })
        .when("/session",{
                templateUrl:"/app/template/Kunden.html",
                controller: "WelcomeController"

            })
        .when("/kunden",{
                templateUrl:"/app/template/Kunden.html",
                controller: "UserController"

            })
        .when("/kunden/:id",{
            templateUrl:"/app/template/kundeedit.html",
            controller: "UserEditController"

        })
        .when("/autos",{
            templateUrl:"/app/template/Autos.html",
            controller: "AutoController"

        })
        .when("/marken",{
            templateUrl:"/app/template/Marken.html",
            controller: "MarkenController"

        })
        .when("/marken/new",{
            templateUrl:"/app/template/Markeneu.html",
            controller: "MarkenCreateController"

        })
        .when("/marken/:id",{
            templateUrl:"/app/template/MarkeEdit.html",
            controller: "MarkenEditController"

        })

    .when("/kraftstoff",{
        templateUrl:"/app/template/KS.html",
        controller: "KSController"

    })
    .when("/kraftstoff/new",{
        templateUrl:"/app/template/KSCreate.html",
        controller: "KSCreateController"

    })
    .when("/kraftstoff/:id",{
        templateUrl:"/app/template/KSEdit.html",
        controller: "KSEditController"

    })
        .when("/autoarten",{
            templateUrl:"/app/template/Autoarten.html",
            controller: "AutoArtenController"

        })
        .when("/autoarten/new",{
            templateUrl:"/app/template/AutoartenCreate.html",
            controller: "AutoArtenCreateController"

        })
        .when("/autos/new",{
            templateUrl:"/app/template/Autoscreate.html",
            controller: "AutoCreateController"

        })
        .when("/autoarten/:id",{
            templateUrl:"/app/template/AutoartenEdit.html",
            controller: "AutoArtenEditController"

        })
        .when("/autos/:id",{
            templateUrl:"/app/template/AutosEdit.html",
            controller: "AutoEditController"

        })
        .when("/map",{
            templateUrl:"/app/template/map.html"


        })
        .when("/autolocation/:id",{
            templateUrl:"/app/template/Autolocation.html",
            controller: "AutoLocationController"


        })
        .when("/autolocation/",{
            templateUrl:"/app/template/AutoAllLocation.html",
            controller: "AutoAllLocationController"


        })
        .when("/autoarten/bild/:id",{
            templateUrl:"/app/template/Fileupload.html",
            controller: "AutoArtImageUploadCreateController"


        })
        .when("/rechnung/createAll/",{
            templateUrl:"/app/template/index.html",
            controller: "RechnungenCreateAllController"


        })
        .when("/rechnungen/",{
            templateUrl:"/app/template/Rechungen.html",
            controller: "RechnungsController"


        })
        .when("/rechnungen/rabatt/:id",{
            templateUrl:"/app/template/RechnungenRabatt.html",
            controller: "RechnungsRabattController"


        })
        .when("/rechnungen/:id",{
            templateUrl:"/app/template/Rechnung.html",
            controller: "RechnungshowController"


        })

        .when("/kunde/hash/:hash",{
            templateUrl:"/app/template/Rechnung.html",
            controller: "KundenHashController"


        })






});
