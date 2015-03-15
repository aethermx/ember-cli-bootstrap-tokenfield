import Ember from 'ember';
import layout from '../templates/components/input-tokenfield';

export default Ember.TextField.extend({
  layout: layout,

  classNames: ['form-control'],

  _setElement$: function() {
    var element$ = Ember.$('#' + this.get('elementId'));
    this.set('element$', element$);
  },

  autocomplete: null, // handled by _processAutocompleteObject()

  didInsertElement: function() {
    this._setElement$();

    var autocomplete = this._processAutocompleteObject();

    var options = {};
    if ( this.tokens ) { options.tokens = this.tokens; }
    if ( this.limit ) { options.limit = this.limit; }
    if ( this.minLength ) { options.minLength = this.minLength; }
    if ( this.minWidth ) { options.minWidth = this.minWidth; }
    if ( autocomplete ) { options.autocomplete = autocomplete; }
    if ( this.showAutocompleteOnFocus ) {
      options.showAutocompleteOnFocus = true;
    }
    if ( this.typeahead ) { options.typeahead = this.typeahead; }
    if ( this.createTokensOnBlur ) { 
      options.createTokensOnBlur = this.createTokensOnBlur;
    }
    if ( this.delimiter ) { options.delimiter = this.delimiter; }
    if ( this.beautify ) { options.beautify = this.beautify; }
    if ( this.inputType ) { options.inputType = this.inputType; }

    this.get('element$').tokenfield(options);
  },

  _processAutocompleteObject: function() {
    var autocomplete = this.get('autocomplete');

    if ( ! autocomplete || typeof autocomplete.then !== 'function') {
      return autocomplete;
    }

    var _this = this;
    autocomplete.then(function(resolvedAutocomplete) {
      _this.get('element$')
           .data('bs.tokenfield')
           .$input.autocomplete(resolvedAutocomplete);
    });

    return null;
  }.observes('autocomplete')

});

