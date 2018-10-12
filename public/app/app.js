require("../lib/node_modules/jquery/dist/jquery.min");
var angular = require("../lib/node_modules/angular");
require("../lib/node_modules/angular-route");
var toastr = require("../lib/node_modules/toastr");
require("../lib/ng-infinite-scroll.min");

var homeController = require('./home.controller');
var photoService = require('./photo.service');
var notifierService = require('./notifier.service');
var galleryModel = require('./gallery.model');


angular.module('photo-gallery', ['ngRoute', 'infinite-scroll'])
    .config(configure)
    .factory('photoService', photoService)
    .factory('notifierService', notifierService)
    .factory('galleryModel', galleryModel)
    .controller('homeController', homeController)

angular.module('photo-gallery').value('pgToastr', toastr);

function configure($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(false).hashPrefix("");

    $routeProvider.when('/home', {

        templateUrl: '/app/views/home.html',
        controller: 'homeController'

    }).otherwise({
        redirectTo: '/home'
    });

}
