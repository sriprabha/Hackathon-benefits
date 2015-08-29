// grab the mongoose module
var mongoose = require('mongoose');
var db = require('../../config/db');
var dbmongo = mongoose.createConnection(db.url);

var company = dbmongo.model('Company', {
  id: {type: Number},
  name: {type: String},
  size: {type: Number},
  gender_ratio: {type: Number},
  url: {type: String},
  benefits: [Number]
});


/*
company.create(
  {id: 1, name: 'Google book', size: 20000, gender_ratio: 25, url: 'https://www.linkedin.com/company/google', benefits: [1,2,4,5]},
  {id: 2, name: 'LinkedOut', size: 2000, gender_ratio: 2, url: 'http://www.linkedin.com', benefits: [1,8,5]},
  {id: 3, name: 'Facepen', size: 2000, gender_ratio: 2, url: 'https://www.linkedin.com/company/facebook', benefits: [1,8,5]}, function (err, small) {
    if (err) return handleError(err);
    // saved!
  });
*/
module.exports = company;
