/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {

    firebase: {
      apiKey: "AIzaSyBDV0V8Il__xLVXgsn-ksJzWUb484RzeO8",
      authDomain: "harvest-d7cf5.firebaseapp.com",
      databaseURL: "https://harvest-d7cf5.firebaseio.com",
      projectId: "harvest-d7cf5",
      storageBucket: "harvest-d7cf5.appspot.com",
      messagingSenderId: "187554469991"  
    },
  



    modulePrefix: 'harvest-ember',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
     ENV.APP.LOG_RESOLVER = true;
     ENV.APP.LOG_ACTIVE_GENERATION = true;
     ENV.APP.LOG_TRANSITIONS = true;
     ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
     ENV.APP.LOG_VIEW_LOOKUPS = true;
  }



  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
