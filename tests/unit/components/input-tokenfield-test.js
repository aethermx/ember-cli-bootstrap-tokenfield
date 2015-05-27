import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('input-tokenfield', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
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

test('getTokens', function(assert) {
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
