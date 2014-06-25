/**
 * Routes.js - Backend Routing
 * Accessed by front end to route to functions in backend controllers
**/

'use strict';

var api = require('./controllers/api'),
    index = require('./controllers'),
    users = require('./controllers/users'),
    session = require('./controllers/session'),
    events = require('./controllers/events'),
    categories = require('./controllers/categories'),
    middleware = require('./middleware');

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes
  
  //users
  app.route('/api/users')
    .post(users.create)
    .put(users.changePassword);
  app.route('/api/users/me')
    .get(users.me);
  app.route('/api/users/:id')
    .get(users.show);

  //get the events for dash
  app.route('/api/getEvents')
    .get(api.getEvents);

  //events
  app.route('/api/events')
    .post(events.createEvent);
  app.route('api/events/me')
    .get(users.me);
  app.route('/api/events/:id')
    .get(events.showEvent);

  //get the categories for category page
  app.route('/api/getCategories')
    .get(api.getCategories);

  //Sessions
  app.route('/api/session')
    .post(session.login)
    .delete(session.logout);

  // All undefined api routes should return a 404
  app.route('/api/*')
    .get(function(req, res) {
      res.send(404);
    });

  // All other routes to use Angular routing in app/scripts/app.js
  app.route('/partials/*')
    .get(index.partials);
  app.route('/*')
    .get( middleware.setUserCookie, index.index);
};