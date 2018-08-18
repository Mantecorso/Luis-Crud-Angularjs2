var app = angular.module('luisApp', ['ngRoute']);
var myApp = angular.module('myApp', []);


//rutas
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "Views/inicio.html",
            controller: 'appController'
        })
        .when("/infopaci/:id", {
            templateUrl: 'Views/infopaci.html',
            controller: 'infoPaciController'
        })


        .when("/infoprof/:id", {
            templateUrl: 'Views/infoprof.html',
            controller: 'infoProfController'
        })

        .when("/crearpaci", {
            title: 'Añadir paciente',
            templateUrl: './Views/crearpaci.html',
            controller: 'crearPaciController'
        })

        .when("/crearprof", {
            title: 'Añadir nuevo profesional',
            templateUrl: './Views/crearprof.html',
            controller: 'crearProfController'
        })

        .when("/editpaci/:id", {
            title: 'Editar paciente',
            templateUrl: 'Views/editpaci.html',
            controller: 'editPaciController'
        })

        .when("/editprof/:id", {
            title: 'Editar profesional',
            templateUrl: 'Views/editprof.html',
            controller: 'editProfController'
        })
        
        .when("/removeone/:id", {
            title: 'Eliminar usuario',
            templateUrl: 'Views/removeone.html',
            controller: 'removeOneController'
        })
        .when("/removemedi", {
            templateUrl: "Views/removemedi.html",
            controller: 'removeMediController'
        })

        .otherwise({
            redirectTo: "/"
        })
});