function configure($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(false).hashPrefix("");

    $routeProvider.when('/home', {

        templateUrl: '/app/views/home.html',
        controller: 'homeController'

    }).otherwise({
        redirectTo: '/home'
    });

}


module.exports = configure;