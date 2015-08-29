// grab the mongoose module
var mongoose = require('mongoose');
var db = require('../../config/db');
var dbmongo = mongoose.createConnection(db.url);

// Static data for Benefits
var benefits = dbmongo.model('benefits', {
	id: {type: Number, default: 0},
	text: {type: String, default: 'Blah'}
});

/*benefits.create(
  {id: 1, text: '401k match'},
  {id: 2, text: 'Paternity leave'},
  {id: 3, text: "Maternity/Bonding leave"},
  {id: 4, text: "LASIK"},
  {id: 5, text: "Egg Freezing"},
  {id: 6, text: "Onsite Daycare"},
  {id: 7, text: "Sick leave"},
  {id: 8, text: "Medical insurance"},
  {id: 9, text: "Dental insurance"},
  {id: 10, text: "Vision"},
  {id: 11, text: "Mother’s room"},
  {id: 12, text: "Telecommuting"},
  {id: 13, text: "Shuttles"},
  {id: 14, text: "Diversity data/ration"},
  {id: 15, text: "Family benefits"}, function (err, small) {
   if (err) return handleError(err);
   // saved!
  });*/

module.exports = benefits;




/*

 benefits.find(function (err, benefits1) {
 if (err) return console.error(err);
 var texts =[];
 for (var benefit in benefits1) {
 texts[benefit] = ({text: benefits1[benefit].text});
 }
 return texts;
 });

/*


var company = mongoose.model('Company', {
	text: {type: String},
	size: {type: Number},
	gender_ratio: {type: Number},
	url: {type: String},
	benefits: [Number]
});

*/

// Old models
/*

 // BenefitType model
 var BenefitType = mongoose.model('BenefitType', {
 text: {type: String},
 provided: {type: Boolean, default: false},
 details: {type: String, default: null}
 });

 // Benefits model
 var Benefits = mongoose.model('Benefits', {
 benefit_401k_match: {type : BenefitType},
 paternity_leave: {type: BenefitType},
 maternity_leave: {type: BenefitType},
 lasik: {type: BenefitType},
 egg_freezing: {type: BenefitType},
 onsite_daycare: {type: BenefitType},
 sick_leave: {type: BenefitType},
 medical_insurance: {type: BenefitType},
 dental: {type: BenefitType},
 vision: {type: BenefitType},
 mothers_room: {type: BenefitType},
 telecommuting: {type: BenefitType},
 parttime_after_maternity: {type: BenefitType},
 shuttles: {type: BenefitType},
 diversity_data: {type: BenefitType},
 family_benefit_leave: {type: BenefitType}
 });
 */


/*
 benefits.create(
 {id: 1, text: '401k match'},
 {id: 2, text: 'Paternity leave'},
 {id: 3, text: "Maternity/Bonding leave"},
 {id: 4, text: "LASIK"},
 {id: 5, text: "Egg Freezing"},
 {id: 6, text: "Onsite Daycare"},
 {id: 7, text: "Sick leave"},
 {id: 8, text: "Medical insurance"},
 {id: 9, text: "Dental insurance"},
 {id: 10, text: "Vision"},
 {id: 11, text: "Mother’s room"},
 {id: 12, text: "Telecommuting"},
 {id: 13, text: "Shuttles"},
 {id: 14, text: "Diversity data/ration"},
 {id: 15, text: "Family benefits"}, function (err, small) {
 if (err) return handleError(err);
 // saved!
 });
 */



