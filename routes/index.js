var express = require('express');
var router = express.Router();

// import controllers
var ctrlMain = require('../controllers/mainController');
var ctrlHostFam = require('../controllers/hostFamController');

// routes
router.get('/test', ctrlMain.test);
router.get('/apply', ctrlMain.hostFamForm);
router.get('/', ctrlMain.index);

router.post('/addHostFam', ctrlHostFam.addHostFam);
// router.post('/addHostFam', function(req, res) {
// 	console.log("Route: addHostFam");
// 	console.log(req.body);
// 	// TODO: call a controller from here?
// 	res.send('Form submitted! Request method: ' + req.method);
// 	// res.send('Request received!');
// });




module.exports = router;
