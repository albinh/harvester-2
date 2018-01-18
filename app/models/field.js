import DS from 'ember-data';

export default DS.Model.extend({
    name:                DS.attr(),
    beds:              DS.hasMany('bed', { async: true, inverse: null }),
    bedCount:            DS.attr('number')
});
