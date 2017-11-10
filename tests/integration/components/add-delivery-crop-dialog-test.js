import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('add-delivery-crop-dialog', 'Integration | Component | add delivery crop dialog', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{add-delivery-crop-dialog}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#add-delivery-crop-dialog}}
      template block text
    {{/add-delivery-crop-dialog}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
