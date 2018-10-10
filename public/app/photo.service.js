(function () {

    angular.module('photo-gallery').factory('photoService', photoService);

    function photoService($http, $q) {

        var baseUrl = "https://api.flickr.com/services/rest/";
        var api_key = "ca40e616229de82be37196790ccb4603";   

        var getPhotos = function (text, page, per_page) {

            var defered = $q.defer();

            $http.get(baseUrl + "?method=flickr.photos.search&api_key=" + api_key + "&text= " + text + "&page=" + page + "&per_page=" + per_page + "&extras=url_s,description,owner_name,date_taken&format=json&nojsoncallback=1").then(function (response) {

                defered.resolve(response.data);

            }, function (error) {
                defered.reject(error.data);
            });

            return defered.promise;
        };

        return {
            getPhotos: getPhotos

        }
    }

})();

