/* jshint node: true */
'use strict';

module.exports = {
  included: function(app) {
    this._super.included(app);

    // Bootstrap
    app.import('bower_components/bootstrap/dist/css/bootstrap.css');

    // Bootstrap Tokenfield 
    app.import('bower_components/bootstrap-tokenfield/dist/css/tokenfield-typeahead.css');
    app.import('bower_components/bootstrap-tokenfield/dist/css/bootstrap-tokenfield.css');
    app.import('bower_components/bootstrap-tokenfield/dist/bootstrap-tokenfield.js');
  },

  name: 'ember-cli-bootstrap-tokenfield'
};
