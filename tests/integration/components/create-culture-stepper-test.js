import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('create-culture-stepper', 'Integration | Component | create culture stepper', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{create-culture-stepper}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#create-culture-stepper}}
      template block text
    {{/create-culture-stepper}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
