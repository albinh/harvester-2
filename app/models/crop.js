import DS from 'ember-data';

export default DS.Model.extend({
    name:               DS.attr('string'),
    forms:              DS.hasMany('crop-form', { async: true, inverse: null }),
    default_form:       DS.belongsTo('crop-form', { async: true, inverse: null })
});
