function homeController($scope, photoService, galleryModel, notifierService) {

    var page = 1, per_page = 10;

    $scope.isLoading = true;

    $scope.search = function (searchText) {
        getGallery(searchText.trim(), page, per_page, onError)
    };

    $scope.loadMore = function () {
        page++;
        if (page > 10) {
            return;   //loading only 102 images
        }
        getGallery(page, per_page, onError);

    };

    function getGallery(searchText, page, per_page, errFn) {
        galleryModel.getGallery(searchText, page, per_page).then(function (response) {
            $scope.isLoading = false;
            $scope.images = response;
            console.log(response);
        }, errFn);

    }


    function onError(reason) {
        pgNotifier.error(reason, "Oops!..Something went wrong, please try again");
    }

    (function () {
        getGallery(null, page, per_page, onError)

    })(page, per_page, onError);

};

module.exports = homeController


