import Ember from 'ember';
import layout from '../templates/components/input-tokenfield';

export default Ember.TextField.extend({

  layout: layout,

  classNames: ['form-control'],

  /*
    Appends only truthy values that are not promises.
  */
  _appendOption: function(options, attributeName) {
    let attrValue = this.get(attributeName);
    if (attrValue && typeof attrValue.then !== 'function') {
      options[attributeName] = attrValue;
    }
    return options;
  },

  _buildTokenfieldOptions: function() {
    var options = {};
    options = this._appendOption(options, 'limit');
    options = this._appendOption(options, 'minLength');
    options = this._appendOption(options, 'minWidth');
    options = this._appendOption(options, 'showAutocompleteOnFocus');
    options = this._appendOption(options, 'delimiter');
    options = this._appendOption(options, 'beautify');
    options = this._appendOption(options, 'inputType');
    options = this._appendOption(options, 'createTokenOnBlur');
    options = this._appendOption(options, 'typeahead');
    options = this._appendOption(options, 'tokens');
    options = this._appendOption(options, 'autocomplete');
    return options;
  },

  didInsertElement: function() {
    let element$ = Ember.$('#' + this.get('elementId'));
    this.set('element$', element$);

    var options = this._buildTokenfieldOptions();

    element$.tokenfield(options);

    this._consumeAutocompletePromise();
    this._consumeTokensPromise();
  },

  _consumeAutocompletePromise: function() {
    var autocomplete = this.get('autocomplete');

    if (!autocomplete || typeof autocomplete.then !== 'function') {
      return; // nothing to do, value already passed in with the options object
    }

    autocomplete.then(autocompleteValues => {
      let element$ = this.get('element$');
      if (element$) {
        element$
          .data('bs.tokenfield')
          .$input.autocomplete(autocompleteValues);
      }

      this.set('autocomplete', autocompleteValues);
    });
  },

  _observeAutocomplete: Ember.observer('autocomplete', function() {
    this._consumeAutocompletePromise();
  }),

  _consumeTokensPromise: function() {
    var tokens = this.get('tokens');

    if (!tokens || typeof tokens.then !== 'function') {
      return; // nothing to do, value already passed in with the options object
    }

    // test for Ember.ArrayProxy
    /*
    if ( tokens.get && typeof tokens.get('hasArrayObservers') === 'boolean') {
      let tokensList = tokens.toArray();
      element$.tokenfield('setTokens', tokensList);
    }
    */

    tokens.then(tokensList => {
      let element$ = this.get('element$');
      if (element$) {
        element$.tokenfield('setTokens', tokensList);
      }
      this.set('tokens', tokensList);
    });
  },

  _observeTokens: Ember.observer('tokens', function() {
    this._consumeTokensPromise();
  })

});
