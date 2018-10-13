function notifierService(pgToastr) {
    return {
        notify: function (msg) {
            pgToastr.success(msg);
            console.info(msg);
        },
        error: function (err, msg) {
            pgToastr.error(msg);
            console.error(err);
        }
    };
}

module.exports = notifierService;
