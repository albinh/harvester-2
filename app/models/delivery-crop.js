import DS from 'ember-data';

export default DS.Model.extend({
    delivery:           DS.belongsTo('delivery', { async: true, inverse: null }),
    crop:               DS.belongsTo('crop', { async: true, inverse: null }),
    amount:             DS.attr('number'),
    order_type:         DS.attr('string'),
    price:              DS.attr('number'),
    price_type:         DS.attr('string')
});
