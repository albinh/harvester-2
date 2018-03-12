import DS from 'ember-data';

export default DS.Model.extend({
    deliveryCrop:           DS.belongsTo('delivery-crop', { async: true, inverse: null }),
    weight:                 DS.attr(),
    count:                  DS.attr(),
    date:                   DS.attr()
});
