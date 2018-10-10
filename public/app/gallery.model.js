function galleryModel(photoService, $q) {

    function mapToVeiwModel(model) {
        if (!model) return;
        return {
            photo_id: model["id"],
            author: model["ownername"],
            description: model["description"]["_content"],
            date_taken: model["datetaken"],
            photo_url: model["url_s"],
            title: model["title"]
        }
    }

    function getGallery(searchText, page, per_page) {

        var galleryVm = [];
        var defered = $q.defer();
        searchText = searchText || "dogs";

        photoService.getPhotos(searchText, page, per_page).then(function (response) {

            var photos = response["photos"] != null ? response["photos"]["photo"] : null;
            if (!photos)
                return defered.reject(response);

            for (var index = 0; index < photos.length; index++) {

                var vm = mapToVeiwModel(photos[index]);
                galleryVm.push(vm);

            }

            defered.resolve(galleryVm);

        }, function (err) {
            defered.reject(err);
        });

        return defered.promise;
    }

    return {
        getGallery: getGallery
    }
};

module.exports = galleryModel;

