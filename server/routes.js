var config = require('./configController');
var health = require('./healthController');

module.exports = function (app) {

    app.get('/api/config', config.get);
    app.get('/health', health.get);

    app.all('/api/*', function (req, resp) {
        resp.sendStatus(404);
    });


}