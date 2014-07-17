/**
 * crews.js - backend controller 
 * functionality for crews
**/

'use strict';

var mongoose = require('mongoose'),
	Crew = mongoose.model('Crew');


/* Add Crew Member
---------------------------*/
exports.addCrew = function (req, res, next) {
	var newCrew = new Crew(req.body);
	newCrew.provider = 'local';
	newCrew.save(function(err) {
		if (err) return res.json(400, err);
	});
};