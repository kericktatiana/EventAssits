/**
 * api.js - backend controller
 * finds things from the database
**/

'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    Event = mongoose.model('Event'),
    Segment = mongoose.model('Segment'),
    Category = mongoose.model('Category');


//get awesomeThings now replaced with my content
exports.awesomeThings = function(req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};

//get the events unique to user
exports.getEvents = function(req, res, $routeParams) {
	
  var userId = req.user.id;

  return Event.find( {userId:userId}, function (err, events) {
    if (!err) {
      return res.json(events);
    } else {
      return res.send(err);
    }
  });
}; //getEvents

//get the default categories
exports.getCategorys = function(req, res) {

  return Category.find(function (err, categorys) {
    if (!err) {
      return res.json(categorys);
    } else {
      return res.send(err);
    }
  });
}; //getCategorys

//get the user's categories
exports.getEventCategorys = function(req, res) {

  return Category.findById( function (err, categorys) {
    if (!err) {
      return res.json(categorys);
    } else {
      return res.send(err);
    }
  });

};



