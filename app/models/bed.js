import DS from 'ember-data';

export default DS.Model.extend({
    name:               DS.attr('number'),
    length:             DS.attr(),
    cultures:           DS.hasMany('culture', { async: true, inverse: null }),
    field:              DS.belongsTo('field')
});

