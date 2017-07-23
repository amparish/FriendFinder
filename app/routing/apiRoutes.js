var friends = require("../data/friends");
var path = require("path");

module.exports = function(app){
	app.get("/api/friends", function(req, res){
		res.json(friends);
	});
	app.post("/api/friends", function(req, res){
		var friendMatch = {
			name: "",
			photo: "",
			friendDiff: 1000
		}

		var userData = req.body;
		var userScores = userData.scores;
		var totalDifference = 0;

		for (var i=0; i<friends.length; i++){
			console.log(friends[i].name);
			totalDifference = 0;

			for (var s=0; s<friends[i].scores[s]; s++){
				totalDifference += Math.abs(parseInt(userScores[s]) - parseInt(friends[i].scores[s]));

				if (totalDifference <= bestMatch.friendDiff){
					friendMatch.name = friends[i].name;
					friendMatch.photo = friends[i].photo;
					friendMatch.friendDiff = totalDifference;
				}
			}
		}

		friends.push(userData);
		res.json(friendMatch);
	});
};