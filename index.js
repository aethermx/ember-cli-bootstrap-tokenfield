/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-bootstrap-tokenfield',

  included: function(app) {
    this._super.included(app);

    // Bootstrap
    app.import('bower_components/bootstrap/dist/css/bootstrap.css');

    // JQuery UI
    app.import('bower_components/jquery-ui/jquery-ui.js');
    app.import('bower_components/jquery-ui/themes/base/jquery-ui.css');

    // Bootstrap Tokenfield 
    app.import('bower_components/bootstrap-tokenfield/dist/css/tokenfield-typeahead.css');
    app.import('bower_components/bootstrap-tokenfield/dist/css/bootstrap-tokenfield.css');
    app.import('bower_components/bootstrap-tokenfield/dist/bootstrap-tokenfield.js');
    app.import('bower_components/bootstrap-tokenfield/docs-assets/js/typeahead.bundle.js');
  }

};
