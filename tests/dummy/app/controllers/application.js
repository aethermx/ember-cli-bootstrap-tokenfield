import Ember from 'ember';

export default Ember.Controller.extend({

  autocomplete: {
    source: ['red','blue','green','yellow','violet','brown','purple','black','white'],
    delay: 100
  },

  typeahead: (function() {
    var engine = new Bloodhound({
      local: [{value: 'red'}, {value: 'blue'}, {value: 'green'} , 
              {value: 'yellow'}, {value: 'violet'}, {value: 'brown'}, 
              {value: 'purple'}, {value: 'black'}, {value: 'white'}],
      datumTokenizer: function(d) {
        return Bloodhound.tokenizers.whitespace(d.value);
      },
      queryTokenizer: Bloodhound.tokenizers.whitespace
    });
    engine.initialize();

    return [null, { source: engine.ttAdapter() }];
  })()

});
