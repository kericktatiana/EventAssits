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

/* get Segments
---------------------*/
exports.getSegments = function(req, res, next) {

  var eventId = req.params.id;

  console.log('eventId: ' + eventId);

  return Segment.find( {eventId:eventId}, function (err, segments) {
    if (!err) {
      return res.json(segments);
    } else {
      return res.send(err);
    }
  });

};