import Ember from 'ember';

export default Ember.Controller.extend({
    harvestDate: new Date().toISOString().split('T')[0],

    countRequired: Ember.computed('model.price_type', function() {
        return this.get('model').get('price_type')=="kr/st";
    }),

    actions: {
        deleteHarvest: function(harvest) {
            
            let delivery_crop = this.get('model');

            delivery_crop.get('harvests').removeObject(harvest);
            delivery_crop.save().then(function() {
                harvest.destroyRecord();
            })
        },

        registerHarvest: function() {
            let delivery_crop = this.get('model');
            let harvest = this.get('store').createRecord('harvest', {
              delivery_crop: delivery_crop,
              weight: this.get('weight'),
              count:  this.get('count'),
              date:   this.get('harvestDate')
            });
            harvest.save().then( function() {
                delivery_crop.get('harvests').addObject(harvest);
                delivery_crop.save();
            });
            this.transitionToRoute('delivery', delivery_crop.get('delivery'));
        }
    }
});
