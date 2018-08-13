var app = angular.module('luisapp', ['ngRoute']);
var myApp = angular.module('myApp', []);


//rutas
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/inicio.html",
            controller: 'appController'
        })
        .when("/infopaci/:id", {
            templateUrl: 'views/infopaci.html',
            controller: 'infoPaciController'
        })


        .when("/infoprof/:id", {
            templateUrl: 'views/infoprof.html',
            controller: 'infoProfController'
        })

        .when("/crearpaci", {
            title: 'Añadir paciente',
            templateUrl: 'views/crearpaci.html',
            controller: 'crearPaciController'
        })

        .when("/crearprof", {
            title: 'Añadir nuevo profesional',
            templateUrl: 'views/crearprof.html',
            controller: 'crearProfController'
        })

        .when("/editpaci/:id", {
            title: 'Editar paciente',
            templateUrl: 'views/editpaci.html',
            controller: 'editPaciController'
        })

        .when("/editprof/:id", {
            title: 'Editar profesional',
            templateUrl: 'views/editprof.html',
            controller: 'editProfController'
        })
        
        .when("/removeone/:id", {
            title: 'Eliminar usuario',
            templateUrl: 'views/removeone.html',
            controller: 'removeOneController'
        })
        .when("/removemedi", {
            templateUrl: "views/removemedi.html",
            controller: 'removeMediController'
        })

        .otherwise({
            redirectTo: "/"
        })
});