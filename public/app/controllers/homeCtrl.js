(function() {

angular.module('photo-gallery').controller('homeCtrl', homeCtrl);

function homeCtrl($scope) {


    $scope.name = "Me!!!"


    //genric error handler to a promise rejection callback
    function erroHandler(err) {
           console.log(err);
    }
 }

})();
