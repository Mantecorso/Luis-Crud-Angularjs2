app.controller("appController", function appController($scope, AppService, $location, $http) {
    
    let response = AppService.getUsers()
    $scope.users = response.users;
});

app.controller("infoPaciController", function infoPaciController($scope, $routeParams) {
    $scope.user = $scope.users[$routeParams.id];
});


app.controller("infoProfController", function infoProfController($scope, $routeParams) {
    $scope.user = $scope.users[$routeParams.id];
});


app.controller("crearPaciController", function crearPaciController($scope, $location) {
    $scope.textButton = "Añadir nuevo paciente";
    $scope.user = {usuario:'paciente'};

    $scope.newPaci = function () {

        let datosJson = JSON.parse(window.localStorage.getItem('users'));
        datosJson.user.paciente.push($scope.user)
        window.localStorage.setItem('users', JSON.stringify(datosJson));
        $location.url("/data/user.json");
    }
});

app.controller("crearProfController", function crearProfController($scope, $location) {
    $scope.textButton = "Añadir nuevo Profesional";
    $scope.user = {usuario:'profesional'};

    $scope.newProf = function () {
       
        let datosJson = JSON.parse(window.localStorage.getItem('users'));
        datosJson.user.profesional.push($scope.user)
        window.localStorage.setItem('users', JSON.stringify(datosJson));
        $location.url("/data/user.json");
    }
});

app.controller("editPaciController", function editPaciController($scope, $routeParams, $location) {
    $scope.textButton = "Editar usuario";
    $scope.user = $scope.users[$routeParams.id];
    $scope.editPaci = function () {

        let datosJson = JSON.parse(window.localStorage.getItem('users'));
        datosJson.user.paciente[$routeParams.id] = $scope.user;
        window.localStorage.setItem('users', JSON.stringify(datosJson));
        $location.url('/data/user.json');
    }
});

app.controller("editProfController", function editProfController($scope, $routeParams, $location) {
    $scope.textButton = "Editar Profesional";
    $scope.user = $scope.users[$routeParams.id];
    $scope.editProf = function () {

        let datosJson = JSON.parse(window.localStorage.getItem('users'));
        datosJson.user.profesional[$routeParams.id] = $scope.user;
        window.localStorage.setItem('users', JSON.stringify(datosJson));
        $location.url('/data/user.json');
    }
});

app.controller("removeOneController", function removeOneController($scope, $routeParams, $location) {
    $scope.user = $scope.users[$routeParams.id];
    $scope.removeOneUser = function () {

        let datosJson = JSON.parse(window.localStorage.getItem('users'));
        datosJson.splice($routeParams.id, 1);
        window.localStorage.setItem('users', JSON.stringify(datosJson));
        $location.url('/data/user.json');
    }
});

app.controller("removeMediController", function removeMediController($scope, $routeParams, $location) {
    $scope.user = $scope.users[$routeParams.id];
    $scope.removeAllMedi = function () {

        let datosJson = JSON.parse(window.localStorage.getItem('users'));
        datosJson.Tipo = [medico];
        window.localStorage.setItem('users', JSON.stringify(datosJson));
        $location.url('/data/user.json');
    }
});
