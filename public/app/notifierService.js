angular.module('photo-gallery').value('pgToastr', toastr);

angular.module('photo-gallery').factory('pgNotifier', function (pgToastr) {
    return {
        notify: function (msg) {
            pgToastr.success(msg);
            console.info(msg);
        },
        error:function(err,msg){
            pgToastr.error(msg);
            console.error(err);
        }
    }
});