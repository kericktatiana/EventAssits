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
	newSegment.save(function(err, segment) {
		if (err) 
      return res.json(400, err);
    return res.json(segment);
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


/* get specific segment
-------------------------*/
exports.showSegment = function(req, res, next) {
  var segmentId = req.params.id;

  Segment.findById(segmentId, function (err, segment) {
    if(err) return next(err);
    if(!segment) return res.send(404);

    res.send({ shape: segment.shape });
  });
};





