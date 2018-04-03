// Two Routes.
var friends = require("../data/friends");
var path = require("path");

// GET route with URL /api/friends to display all JSON data.


// POST routes /api/friends to handle incoming survey results. Also used to handle compatability logic.

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  
app.post("/api/friends", function(req, res) {

console.log(friends);

var results = {};
var differenceCalc = 100;

var scores = [parseInt(req.body.q1), parseInt(req.body.q2), parseInt(req.body.q3), parseInt(req.body.q4), parseInt(req.body.q5), parseInt(req.body.q6), parseInt(req.body.q7)];

for (var i = 0; i < friends.length; i++) {

    var subtractArray = [];

    var difference = 0;

    // Looping through the score and making sure there's no negative numbers
    for (var j = 0; j < friends[i].scores.length; j++) {
        subtractArray.push(Math.abs(scores[j] - friends[i].scores[j]))
    }

    console.log(subtractArray);

    for (var k = 0; k < subtractArray.length; k++) {
        difference += subtractArray[k];
    }

    console.log(difference);

    if (results == {}) {
        results = friends[i];
        differenceCalc = difference;
    } else if (difference < differenceCalc) {
        results = friends[i];
        differenceCalc = difference;
    }

    console.log(difference);

}

  // Pushing results
  console.log("results " + results.name);

  var data = {name: req.body.name, image: req.body.image, scores: scores}

  friends.push(data);
  res.json(results)


});

}