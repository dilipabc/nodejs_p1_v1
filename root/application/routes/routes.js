'use strict';
// ============================================================================
var express = require('express');
var router = express.Router();
// =======Include Controllers=============================//
var home = require('../controllers/homeController');
// =======End Include Controllers=========================//
router.get('/', home.homePage);
//router.post('/file/pdf', htmlToPdf.htmlToPDF);
// =========================================================================
// ===404 error define
router.use(function(req, res) {
	res.status(404);
	res.render('404');
});
// ============================================================================
// ===500 error define
router.use(function(error, req, res, next) {
	console.log("Hi");
	res.status(500);
	res.render('500');
});
// ============================================================================

module.exports = router;
// ============================================================================