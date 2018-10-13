function homeController($scope, photoService, galleryModel, notifierService) {

    var page = 1, perPage = 10;

    $scope.isLoading = true;

    $scope.images = [];

    $scope.search = function (searchText) {
        if (!searchText) {
            return;
        }
        $scope.images = [];
        resetPage();
        getGallery(searchText.trim(), page, perPage, onError);
    };

    $scope.loadMore = function () {
        page++;
        if (page > 10) {
            return;   //loading only 102 images
        }
        getGallery($scope.searchText || null, page, perPage, onError);

    };

    function getGallery(searchText, page, perPage, errFn) {
        galleryModel.getGallery(searchText, page, perPage).then(function (response) {
            $scope.isLoading = false;
            $scope.images = $scope.images.concat(response);
        }, errFn);

    }


    function onError(reason) {
        notifierService.error(reason, 'Oops!..Something went wrong, please try again');
    }

    function resetPage() {
        page = 1;
    }

    (function () {
        getGallery(null, page, perPage, onError);

    })(page, perPage, onError);

}

module.exports = homeController;


