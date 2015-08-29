var mongoose = require('mongoose');
var db = require('../../config/db');
var dbmongo = mongoose.createConnection(db.url);

var company = dbmongo.model('Company', {
  text: {type: String},
  size: {type: Number},
  gender_ratio: {type: Number},
  url: {type: String},
  benefits: [Number]
});

module.exports = company;
