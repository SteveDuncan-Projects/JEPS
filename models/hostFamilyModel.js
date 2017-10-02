var mongoose = require('mongoose');

// define schema
// var Schema = mongoose.Schema;

var HostFamilySchema = new mongoose.Schema( {
	 hostFamily: {  //change to array?
	 	address: {
			street: String,
			street2: String,
			city: String,
			state: String,
			zip: String
		},
		// familyMbr: [{
		// 	name: {
		// 		first: String,
		// 		last: String,
		// 		pref: String
		// 	},
		// // },
		// 	email: String,
		// 	relationship: String,
		// phone: {
		// 	mobile: String,
		// 	home: String,
		// 	work: String
		// },
		// 	age: Number,
		// 	gender: String,
		// 	occupation: String,
		// 	hobbies: [String],
		// 	notes: String

		// }]
		famMbrs: {},
		accomodations: {
			bedroom: String,
			bathroom: String,
			genderPref: String,
			religiousOK: Boolean,
			dietOK: Boolean,
			multiGuestsOK: Boolean,
			otherProgsOK: Boolean,
			returnTime: String,
			// commuteType: String,
			line: String,
			tickets: Number,
			commuteTime: String,
			notes: String
		},
		pets: {}

	}
});

//compile and name model from schema
mongoose.model('HostFamily', HostFamilySchema);