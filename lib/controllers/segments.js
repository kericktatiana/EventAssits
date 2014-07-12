/** 
 * segments.js  - backend controller
 * functionality for segments
**/

'use strict';

var mongoose = require('mongoose'),
	Segment = mongoose.model('Segment');

/* Add Segment
---------------------*/
exports.addSegment = function (req, res, next) {
	var newSegment = new Segment(req.body);
	newSegment.provider = 'local';
	newSegment.save(function(err) {
		if (err) return res.json(400, err);
	});
};

exports.getSegments = function(req, res, $routeParams) {

  console.log('vat is dis ' + req.params.id);

  // return Segment.find( function (err, segments) {
  //   if (!err) {
  //     return res.json(segments);
  //   } else {
  //     return res.send(err);
  //   }
  // });
};