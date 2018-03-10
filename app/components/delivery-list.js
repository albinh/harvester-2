import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),    

    filteredDeliveries: Ember.computed('', function(){ 
        return this.get('store').findAll('delivery');
    })
});

