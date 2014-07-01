/**
 * thing.js - Mongoose Model, Database
 * Schema for things - reformated to send/recieve information about the app
**/

'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Thing Schema
 */
var ThingSchema = new Schema({
  item: String
});


mongoose.model('Thing', ThingSchema);
