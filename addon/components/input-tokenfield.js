import Ember from 'ember';
import layout from '../templates/components/input-tokenfield';

export default Ember.TextField.extend({
  layout: layout,

  classNames: ['form-control'],

  didInsertElement: function() {

    var id = this.get('elementId');

    var options = {};
    if ( this.tokens ) { options.tokens = this.tokens; }
    if ( this.limit ) { options.limit = this.limit; }
    if ( this.minLength ) { options.minLength = this.minLength; }
    if ( this.minWidth ) { options.minWidth = this.minWidth; }
    if ( this.autocomplete ) { options.autocomplete = this.autocomplete; }
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
    Ember.$('#' + id).tokenfield(options);
  }

});
