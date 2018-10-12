function photoService($http, $q) {


    var getConfig = function () {

        var defered = $q.defer();

        $http.get("/api/config").then(function (response) {

            defered.resolve(response.data);

        }, function (error) {
            defered.reject(error.data);
        });

        return defered.promise;


    }

    var buildUrl = function (text, page, per_page, key) {
        var baseUrl = "https://api.flickr.com/services/rest/";
        return baseUrl + "?method=flickr.photos.search&api_key=" + key + "&text= " + text + "&page=" + page + "&per_page=" + per_page + "&extras=url_s,description,owner_name,date_taken&content_type=1&format=json&nojsoncallback=1"
    }

    var getPhotos = function (text, page, per_page) {

        var promise = getConfig();

        var defered = $q.defer();

        promise.then(function (response) {
            var key = response["API_KEY"];
            $http.get(buildUrl(text, page, per_page, key)).then(function (response) {

                defered.resolve(response.data);

            }, function (reason) {
                defered.reject(reason.data);
            });


        }, function (reason) {
            defered.reject(reason.error);
        });

        return defered.promise;
    };

    return {
        getPhotos: getPhotos

    }
}

module.exports = photoService;

