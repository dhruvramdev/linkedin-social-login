const express = require('express');
const router = express.Router();
const passportLinkedIn = require('../auth/linkedin');

router.get('/', (req, res, next) => {

});

router.get('/login', (req, res, next) => {

});

router.get('/auth/linkedin', 
	passportLinkedIn.authenticate('linkedin', { scope: ['r_basicprofile', 'r_emailaddress']}));

router.get('/auth/linkedin/callback',
	passportLinkedIn.authenticate('linkedin', { failureRedirect: '/login' }),
  	(req, res, next) => {
  		const token = req.query.oauth_token
		res.json({
			success: true,
			token: token,
			user: req.user
		});
});

module.exports = router;