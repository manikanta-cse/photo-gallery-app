function homeController($scope, photoService, galleryModel, notifierService) {

    var page = 1, per_page = 10;

    $scope.isLoading = true;
    
    $scope.images = [];

    $scope.search = function (searchText) {
        if (!searchText) return;
        $scope.images = [];
        resetPage();
        getGallery(searchText.trim(), page, per_page, onError)
    };

    $scope.loadMore = function () {
        page++;
        if (page > 10) {
            return;   //loading only 102 images
        }
        getGallery($scope.searchText || null, page, per_page, onError);

    };

    function getGallery(searchText, page, per_page, errFn) {
        galleryModel.getGallery(searchText, page, per_page).then(function (response) {
            $scope.isLoading = false;
            $scope.images = $scope.images.concat(response);
        }, errFn);

    }


    function onError(reason) {
        notifierService.error(reason, "Oops!..Something went wrong, please try again");
    }

    function resetPage() {
        page = 1;
    }

    (function () {
        getGallery(null, page, per_page, onError)

    })(page, per_page, onError);

};

module.exports = homeController


