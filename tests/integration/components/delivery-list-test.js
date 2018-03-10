import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('delivery-list', 'Integration | Component | delivery list', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{delivery-list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#delivery-list}}
      template block text
    {{/delivery-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
