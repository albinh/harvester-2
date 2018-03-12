import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('delivery-crop-chip', 'Integration | Component | delivery crop chip', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{delivery-crop-chip}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#delivery-crop-chip}}
      template block text
    {{/delivery-crop-chip}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
