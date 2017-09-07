var express = require('express');
var router = express.Router();


router.get('/apply', function(req, res, next) {
	res.render('../views/pages/hostFamilyForm', { title: 'Application'});
});
router.get('/test', function(req, res, next) {
	res.render('../views/pages/test', { title: 'Test'});
});


router.post('/addHostFam', function(req, res) {
	console.log("Route: addHostFam");
	console.log(req.body);
	// TODO: call a controller from here?
	res.send('Form submitted! Request method: ' + req.method);
	// res.send('Request received!');
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'JEPS' });
});

module.exports = router;
