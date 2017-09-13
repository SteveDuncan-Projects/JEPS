var mongoose = require('mongoose');
var HostFam = mongoose.model('HostFamily');


module.exports.addHostFam = function(req, res) {

	// get input from submitted form
	var newfam = new HostFam ({
		
		hostFamily: {
			address: {
			street: req.body.address,
			city: req.body.city,
			state: req.body.state,
			zip: req.body.zip
			},
			familyMbr: {
				name: {
					first: req.body.firstName,
					last: req.body.lastName,
					pref: req.body.prefName
				},
				email: req.body.email,
				relationship: req.body.relationship,
				age: req.body.age,
				gender: req.body.gender,
				occupation: req.body.occupation,
				hobbies: req.body.hobbies,
				notes: req.body.notes
			},
			pets: req.body.pets
			
			// {N
			// 	kind: req.body.pets,
			// 	lives: req.body.pets,
			// 	name: req.body.pets,
			// 	notes: req.body.pets
			// }

		}	
	});
	console.log(newfam);
	newfam.save();

	// console.log("New record added");
	// res.send('Form submitted from hostFam controller! Request method: ' + req.method);
	res.send(newfam);
};

// this is where we add to database, or do we need a server side controller and only connect
//  through an API?


