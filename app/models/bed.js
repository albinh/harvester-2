import DS from 'ember-data';

export default DS.Model.extend({
    name:               DS.attr('string'),
    cultures:           DS.hasMany('culture', { async: true, inverse: null }),
    length:             DS.attr(),
});
