var Benefits = require('./models/Benefits');
var Company = require('./models/Company');
var ids = [];

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

function getFullBenefits(res){
	Benefits.find(function(err, benefits) {
		// if there is an error retrieving, send the error. nothing after res.send(err) will execute
		if (err)
			res.send(err);

		var fullBenefits =[];
		var keys = {};
		for (var benefit in benefits) {
			if(benefits[benefit].id in keys) {
				// something
			} else {
				fullBenefits[benefit] = ({id: benefits[benefit].id, text: benefits[benefit].text});
				keys[benefits[benefit].id] = benefits[benefit].text;
			}
		};

		res.json(fullBenefits); // return all todos in JSON format
	});
};

function getCompanies(req, res) {
	// Get all the ids in the array first
	Company.find( { benefits: { $all: req.body } } )
		.exec(function(err, companies) {
			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err);

			console.log(companies);
			res.json(companies);
		});
}

function saveIds(idList) {
	ids.push(idList);
}
module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
	app.get('/api/benefits', function(req, res) {

		// use mongoose to get all benefits in the database
		getBenefits(res);
	});

	app.get('/api/fullbenefits', function(req, res) {

		getFullBenefits(res);
	});

	app.post('/api/save', function(req, res) {
		getCompanies(req, res);
	});



		// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};