app.controller("appController", function appController($scope, AppService, $location, $http) {
    let response = AppService.getUsers()

    console.log(typeof (response.pacientes))
    $scope.users = response.pacientes.concat(response.profesionales);

});

app.controller("infoPaciController", function infoPaciController($scope, $routeParams) {
    $scope.user = $scope.users[$routeParams.id];
});


app.controller("infoProfController", function infoProfController($scope, $routeParams) {
    $scope.user = $scope.users[$routeParams.id];
});


app.controller("crearPaciController", function crearPaciController($scope, $location) {
    $scope.textButton = "Añadir nuevo paciente";
    $scope.user = 'Paciente';



    $scope.newPaci = function () {

        console.log($scope.user);
        let myJson = JSON.parse(window.localStorage.getItem('users'));
        myJson.pacientes.push($scope.usuario)
        window.localStorage.setItem('users', JSON.stringify(myJson));
        

        $location.url("/");
    }
});



app.controller("crearProfController", function crearProfController($scope, $location) {
    $scope.textButton = "Añadir nuevo Profesional";
    $scope.user = {};

    $scope.newProf = function () {

       
        let myJson = JSON.parse(window.localStorage.getItem('users'));
        myJson.profesionales.push($scope.user)
        window.localStorage.setItem('users', JSON.stringify(myJson));
        

        $location.url("/");
    }
});


app.controller("editPaciController", function editPaciController($scope, $routeParams, $location) {
    $scope.textButton = "Editar usuario";
    $scope.user = $scope.users[$routeParams.id];
    $scope.editPaci = function () {


        let myJson = JSON.parse(window.localStorage.getItem('users'));
        myJson.pacientes[$routeParams.id] = $scope.user;

        window.localStorage.setItem('users', JSON.stringify(myJson));


        $location.url('/');
    }
});

app.controller("editProfController", function editProfController($scope, $routeParams, $location) {
    $scope.textButton = "Editar Profesional";
    $scope.user = $scope.users[$routeParams.id];
    $scope.editProf = function () {


        let myJson = JSON.parse(window.localStorage.getItem('users'));
        myJson.profesionales[$routeParams.id] = $scope.user;

        window.localStorage.setItem('users', JSON.stringify(myJson));


        $location.url('/');
    }
});

app.controller("removeOneController", function removeOneController($scope, $routeParams, $location) {
    $scope.user = $scope.users[$routeParams.id];
    $scope.removeUser = function () {

        let myJson = JSON.parse(window.localStorage.getItem('users'));
        myJson.usuarios.splice($routeParams.id, 1);

        window.localStorage.setItem('users', JSON.stringify(myJson));

        $location.url('/');
    }
});

app.controller("removeMediController", function removeMediController($scope, $routeParams, $location) {
    $scope.user = $scope.users[$routeParams.id];
    $scope.removeMedi = function () {

        let myJson = JSON.parse(window.localStorage.getItem('users'));
        myJson.Tipo = [medico];

        window.localStorage.setItem('users', JSON.stringify(myJson));

        $location.url('/');
    }
});
