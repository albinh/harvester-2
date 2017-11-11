import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('customer-category-listing', 'Integration | Component | customer category listing', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{customer-category-listing}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#customer-category-listing}}
      template block text
    {{/customer-category-listing}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
