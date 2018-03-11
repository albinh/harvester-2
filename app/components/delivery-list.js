import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),    

    filteredDeliveries: Ember.computed('', function(){ 
        return this.get('store').findAll('delivery');
    }),

backgroundImage: Ember.computed('',function() {
    return "background-image:url('https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/images/carrots.jpg?itok=_nIMWR5y')"
})
});

