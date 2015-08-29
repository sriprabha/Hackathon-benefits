// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Nerd', {
	name : {type : String, default: ''}
});

// BenefitType model
var BenefitType = mongoose.model('BenefitType', {
	name: {type: String},
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

module.exports = mongoose.model('Company', {
	name: {type: String},
	size: {type: Number},
	gender_ratio: {type: Number},
	url: {type: String},
	benefits: {type: Benefits}
});

