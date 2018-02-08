const path = require('path');

module.exports = function(app) {
    // Routing for various paths on site
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
    // Routing in case of error
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });
};
