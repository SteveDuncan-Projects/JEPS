var express = require('express');
var router = express.Router();


router.get('/apply', function(req, res, next) {
	res.render('../views/pages/hostFamilyForm', { title: 'Application'})
});
router.get('/test', function(req, res, next) {
	res.render('../views/pages/test', { title: 'Test'})
});
// router.get('/familyInfo', function(req, res, next) {
// 	res.render('../views/pages/familyInfo', { title: 'Application'})
// })

// router.get('/accomodations', function(req, res, next) {
// 	res.render('../views/pages/accomodations', { title: 'Application'})
// })
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'JEPS' });
});

module.exports = router;
