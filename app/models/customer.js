import DS from 'ember-data';

export default DS.Model.extend({
    name:               DS.attr('string'),
    category:           DS.belongsTo('customer-category'),
    deliveries:         DS.hasMany('delivery', { async: true, inverse: null })
});
