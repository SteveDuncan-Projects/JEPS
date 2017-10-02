var mongoose = require('mongoose');
var HostFam = mongoose.model('HostFamily');


module.exports.addHostFam = function(req, res) {

	
	var newfam = new HostFam ({

		// TODO: use loop to get values from hidden fields instead of sending all fields?
		// the idea is to prevent unnecessary data being copied into database
		hostFamily: {
			address: {
				street: req.body.street,
				street2: req.body.street2,
				city: req.body.city,
				state: req.body.state,
				zip: req.body.zip
			},
			// familyMbr: {
			// 	name: {
			// 		first: req.body.firstName,
			// 		last: req.body.lastName,
			// 		pref: req.body.prefName
			// 	},
			// 	email: req.body.email,
			// 	relationship: req.body.relationship,
			// 	phone: {
			// 		mobile: req.body.mobile,
			// 		home: req.body.home,
			// 		work: req.body.work
			// 	},
			// 	age: req.body.age,
			// 	gender: req.body.gender,
			// 	occupation: req.body.occupation,
			// 	hobbies: req.body.hobbies,
			// 	notes: req.body.notes
			// },
			famMbrs: req.body.famMbrs,
			accomodations: {
				bedroom: req.body.bedroom,
				bathroom: req.body.bathroom,
				genderPref: req.body.genderPref,
				religiousOK: req.body.religion,
				dietOK: req.body.diet,
				multiGuestsOK: req.body.guests,
				otherProgsOK: req.body.otherProgs,
				returnTime: req.body.curfew,
				// commuteType: req.body.,
				line: req.body.busLine,
				tickets: req.body.tickets,
				commuteTime: req.body.commuteTime,
				notes: req.body.commuteNotes
			},	
			pets: req.body.pets

		}	
	});

	console.log(newfam);
	// save form input to database
	newfam.save(function(err) {
		if (err) return handleError(err);
	});

	// send output to browser; 
	res.send(newfam);
};

// this is where we add to database, or do we need a server side controller and only connect
//  through an API?


