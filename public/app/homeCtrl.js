(function () {

    angular.module('photo-gallery').controller('homeCtrl', homeCtrl);

    function homeCtrl($scope, photoService, galleryModel, pgNotifier) {

        var page = 1, per_page = 10;

        $scope.isLoading = true;

        $scope.loadMore = function () {
            page++;
            if (page > 10) {
                return;   //loading only 102 images
            }
            getGallery(page, per_page, errorHandler);

        };

        function getGallery(page, per_page, errFn) {
            galleryModel.getGallery(page, per_page).then(function (resp) {
                $scope.isLoading = false;
                $scope.images = resp;
                console.log(resp);
            }, errFn);

        }


        function errorHandler(err) {
            pgNotifier.error(err, "Oops!..Something went wrong, please try again");
        }

        (function () {
            getGallery(page, per_page)

        })(page, per_page, errorHandler);

    }

})();
