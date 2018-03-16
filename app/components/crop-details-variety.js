import Ember from 'ember';

export default Ember.Component.extend({
    types: ['seeded','planted'],

    actions:{
        startEdit() {
            this.set('editing',true);
        }
    }
});
