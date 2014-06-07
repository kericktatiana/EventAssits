var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'eventassits'
    },
    port: 3000,
    db: 'mongodb://localhost/eventassits-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'eventassits'
    },
    port: 3000,
    db: 'mongodb://localhost/eventassits-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'eventassits'
    },
    port: 3000,
    db: 'mongodb://localhost/eventassits-production'
  }
};

module.exports = config[env];
