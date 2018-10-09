
(function () {
    
        angular.module('photo-gallery', ['ngRoute','infinite-scroll'])
        .config(configure);
    
        function configure($routeProvider, $locationProvider) {
    
            $locationProvider.html5Mode(false).hashPrefix("");
    
            $routeProvider.when('/home', {
    
                templateUrl: '/app/home.html',
                controller: 'homeCtrl'            
    
            }).otherwise({
                redirectTo: '/home'
            });
    
        }
    
    
    })();