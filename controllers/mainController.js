

/* GET home page. */
module.exports.index = function(req, res) {
	console.log("mainController works!");
  res.render('index', { title: 'JEPS' });

};

module.exports.hostFamForm = function(req, res) {
	console.log('Main form rendered from controller');
	res.render('../views/pages/hostFamilyForm', { title: 'Application'});
};

module.exports.test = function(req, res) {
	console.log("mainController TEST!");
  res.render('test', { title: 'TEST' });

};



