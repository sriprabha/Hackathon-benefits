var Benefits = require('./models/Benefits');
var Company = require('./models/Company');
var ids = [];

/**
 * Benefit APIS
 */
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
				texts[benefit] = ({text: benefits[benefit].text, id: benefits[benefit].id});
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
				fullBenefits[benefit] = ({id: benefits[benefit].id, text: benefits[benefit].text, impression: benefits[benefit].impression});
				keys[benefits[benefit].id] = benefits[benefit].text;
			}
		};

		res.json(fullBenefits); // return all todos in JSON format
	});
};

/**
 * Company APIS
 */
function getCompanies(req, res) {
	// Get all the ids in the array first
	Company.find( { benefits: { $all: req.body } } )
		.exec(function(err, companies) {
			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err);

			var keys = {};
			var finalCompanies = {};
			for (var company in companies) {
				if(companies[company].name in keys) {
					// something
					console.log('skipping');
				} else {
					finalCompanies[company] = companies[company];
					keys[companies[company].name] = companies[company].name;
				}
			};
			res.json(finalCompanies);
		});
}

function getCompanyCountPerBenefit(res) {
	// Get all the ids in the array first

	Company.find()
		.exec(function(err, companies) {
			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err);

			var keys = {};
			for (var company in companies) {
				console.log('Benefits :' + companies[company].benefits);

				for (var i = 0; i < companies[company].benefits.length; i++) {

					var benefitId = companies[company].benefits[i];
					if (benefitId in keys) {
						var currentCount = keys[benefitId];
						keys[benefitId]	= parseInt(currentCount+1,10);
					} else {
						keys[benefitId] = 1;
					}
				}
			};
		});
}

function logArrayElements(element, index, array) {
	console.log('a[' + index + '] = ' + element);
}

function createCompany(req, res) {

	var ids =[];
	for (var benefit in req.body.benefits) {
		ids[benefit] = req.body.benefits[benefit].id;
	};

	var currentCount = 0;
	Company.count().exec(function(err, c)
	{
		currentCount = parseInt(c+1,10);

		Company.create({
			"id" : currentCount,
			"name" : req.body.name,
			"benefits" : ids,
			"url": req.body.url
		}, function(err, company) {
			if (err)
				res.send(err);

			res.send(company);
		});
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

	app.get('/api/companycountperbenefit', function(req, res) {

		getCompanyCountPerBenefit(res);
	});

	app.post('/api/save', function(req, res) {
		getCompanies(req, res);
	});


// create todo and send back all todos after creation
	app.post('/api/company', function(req, res) {

		createCompany(req, res);
	});


	app.post('/api/benefit/recordimp/:benefit_id', function(req, res) {
		Benefits.find({id: req.params.benefit_id})
			.exec(function(err, benefit) {
			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err);

			benefit[0].impression	= parseInt(benefit[0].impression+1,10);
			benefit[0].save(function (err) {
					if (err) return handleError(err);
					res.send(benefit[0]);
				});
		});
	});

		// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};