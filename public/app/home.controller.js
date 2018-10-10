(function () {

    angular.module('photo-gallery').controller('homeController', homeCtrl);

    function homeCtrl($scope, photoService, galleryModel, notifieService) {

        var page = 1, per_page = 10;

        $scope.isLoading = true;

        $scope.loadMore = function () {
            page++;
            if (page > 10) {
                return;   //loading only 102 images
            }
            getGallery(page, per_page, onError);

        };

        function getGallery(page, per_page, errFn) {
            galleryModel.getGallery(page, per_page).then(function (response) {
                $scope.isLoading = false;
                $scope.images = response;
                console.log(response);
            }, errFn);

        }


        function onError(reason) {
            pgNotifier.error(reason, "Oops!..Something went wrong, please try again");
        }

        (function () {
            getGallery(page, per_page)

        })(page, per_page, onError);

    }

})();
