import Ember from 'ember';

import DS from 'ember-data';

export default DS.Model.extend({
    date:     DS.attr('date'),
    customer: DS.belongsTo('customer', { async: true, inverse: null }),
 
    crops:    DS.hasMany('delivery-crop', { async: true, inverse: null }),
    
    shortDate: Ember.computed('date', function() {
        var options = { month: 'long', day: 'numeric' };

        return this.get('date').toLocaleDateString('sv-SE', options);
    }),


});
