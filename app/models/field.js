import DS from 'ember-data';

export default DS.Model.extend({
    name:                DS.attr(),
    fields:              DS.hasMany('bed', { async: true, inverse: null }),
});
