var Benefits = require('./models/Company');

function getBenefits(res){
	Benefits.find(function(err, benefits) {
		// if there is an error retrieving, send the error. nothing after res.send(err) will execute
		if (err)
			res.send(err);

		var texts =[];
		var keys = {};
		for (var benefit in benefits) {
			if(benefits[benefit].id in keys) {
				// something
			} else {
				texts[benefit] = ({text: benefits[benefit].text});
				keys[benefits[benefit].id] = benefits[benefit].text;
			}
		};

		res.json(texts); // return all todos in JSON format
	});
};


module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
	app.get('/api/benefits', function(req, res) {

		// use mongoose to get all benefits in the database
		getBenefits(res);
	});


	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};