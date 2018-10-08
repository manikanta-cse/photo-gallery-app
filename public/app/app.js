
(function () {
    
        angular.module('photo-gallery', ['ngRoute'])
        .config(configure);
    
        function configure($routeProvider, $locationProvider) {
    
            $locationProvider.html5Mode(false).hashPrefix("");
    
            $routeProvider.when('/home', {
    
                templateUrl: '/app/views/home.html',
                controller: 'homeCtrl'            
    
            }).otherwise({
                redirectTo: '/home'
            });
    
        }
    
    
    })();