import Ember from 'ember';
import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('input-tokenfield', 'Unit | Component | input-tokenfield', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
  unit: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('tokenfield.getTokens', function(assert) {
  assert.expect(2);

  var component = this.subject({
    value: 'red'
  });
  this.render();

  var active = false;
  var element$ = component.get('element$');
  var tokens = element$.tokenfield('getTokens', active);
  var expected = [{'label': 'red', 'value': 'red'}];
  assert.deepEqual(tokens, expected);

  active = true;
  tokens = element$.tokenfield('getTokens', active);
  expected = [];
  assert.deepEqual(tokens, expected);
});

test('_appendOption', function(assert) {
  assert.expect(3);

  let component = this.subject({
    autocomplete: {source: ['1', '2']} 
  });

  let options = {};
  options = component._appendOption(options, 'not-a-real-option');
  assert.deepEqual(options, {}, 'only truthy values are added');

  options = {};
  options = component._appendOption(options, 'autocomplete');
  assert.deepEqual(options, {autocomplete: {source: ['1', '2']}});

  Ember.run(() => {
    this.render();
    component.set('autocomplete', Ember.RSVP.resolve({source: ['a', 'b']}));
    options = {};
    options = component._appendOption(options, 'autocomplete');
    assert.deepEqual(options, {}, 'promises are ignored');
  });
});

test('autocomplete is a promise', function(assert) {
  assert.expect(1);

  let autocompletePromise = new Ember.RSVP.Promise(function(resolve) {
    Ember.run.later(function() {
      let autocomplete = {source: ['a', 'b']};
      resolve(autocomplete);
    }, 7); // 7 ms must be enough to not let the test pass synchronously
  });
  let component = this.subject({
    autocomplete: autocompletePromise
  });
  this.render();

  Ember.run(() => {
    component._consumeAutocompletePromise();
    component.get('autocomplete').then(() => {
      assert.deepEqual(component.get('autocomplete'), {source: ['a', 'b']});
    });
  });
});

test('tokens is a promise', function(assert) {
  assert.expect(1);

  let tokensPromise = new Ember.RSVP.Promise(function(resolve) {
    Ember.run.later(function() {
      let tokens = [{value: '1', label: 'uno'}, {value: '2', label: 'dos'}];
      resolve(tokens);
    }, 7); // 7 ms must be enough to not let the test pass synchronously
  });
  let component = this.subject({
    tokens: tokensPromise
  });
  this.render();

  Ember.run(() => {
    component._consumeTokensPromise();
    component.get('tokens').then(() => {
      let expected = [{value: '1', label: 'uno'}, {value: '2', label: 'dos'}];
      assert.deepEqual(component.get('tokens'), expected);
    });
  });
});
