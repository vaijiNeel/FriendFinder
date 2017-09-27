// Data
// =============================================================

var friendsList = require("../data/friends");

// api Routes
// =============================================================

module.exports = function(app) {

	//get all friends
	app.get("/api/friends", function(req, res) {
		res.json(friendsList);
	});

	//find best match
	app.post("/api/friends", function(req, res) {
		//initialize variables
		var newPerson;
		var allDifferences = [];
		//get new person's scores
		newPerson = req.body.scores;
	    console.log("\n-----------------------------\nnew person scores:", newPerson);
	    console.log("friends full array:", friendsList);
	    //find compatibility
	    for (var i = 0; i < friendsList.length; i++) {
	    	//get scores for each person in the list
	    	var existingFrnds = friendsList[i].scores;
	    	var difference = 0;
	    	console.log("just scores", existingFrnds,"\n----------------\n");
	    	//compare scores for question and add the differences
	    	for (var j = 0; j < existingFrnds.length; j++) {
	    		console.log("arr items: - existing:", existingFrnds[j], ", new person:", newPerson[j]);
	    		difference += Math.abs(parseInt(existingFrnds[j]) - parseInt(newPerson[j]) );
	    	}
	    	console.log("difference with ", i, ":",difference);
	    	//store the differences in an array object with its index
	    	allDifferences.push({"difference": difference, "index": i});
	    }
	    console.log("\nallDifferences:", allDifferences);
	    //sort the difference array
	    allDifferences.sort(function(a,b){
	    	return ( parseInt(a.difference) - parseInt(b.difference) );
	    });
	    console.log("\nallDifferences after sorting:", allDifferences);

	    //get the first match with low differences
	    var matchFound = friendsList[allDifferences[0].index];
	    console.log("\nMatch found:", matchFound);
	    friendsList.push(req.body);
	    console.log("\nfriendsList:", friendsList);
	    res.json(matchFound);
  });
}