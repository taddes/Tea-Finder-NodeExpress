// Include two routes.

// GET route to "/survey" to display survey page.

// Default, catch-all route leading to home.html, displaying home page.

var path = require('path');

module.exports = function (app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, '/../public/home.html'));
    });

    app.post('/', function (req, res) {
        console.log(req.body)
    });

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, '/../public/survey.html'));
    });

    app.post('/survey', function (req, res) {
        console.log(req.body)
    });

}
