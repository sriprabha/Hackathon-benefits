var Benefits = require('./models/Company');

function getBenefits(res){
	console.log('done');
	Benefits.find(function(err, benefits) {
		console.log(benefits);

		// if there is an error retrieving, send the error. nothing after res.send(err) will execute
		if (err)
			res.send(err);

		res.json(benefits); // return all todos in JSON format
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