import DS from 'ember-data';

export default DS.Model.extend({
    delivery:           DS.belongsTo('delivery', { async: true, inverse: null }),
    crop:               DS.attr('string'),
    amount:             DS.attr('number'),
    order_type:         DS.attr('string'),
    price:              DS.attr('number'),
    price_type:         DS.attr('string')
});
