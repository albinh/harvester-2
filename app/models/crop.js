import DS from 'ember-data';

export default DS.Model.extend({
    name:               DS.attr('string'),
    forms:              DS.hasMany('crop', { async: true, inverse: null }),
    base_form:          DS.belongsTo('crop', { async: true, inverse: null }),
    countable:          DS.attr('boolean'),
    weight_of_one_unit: DS.attr('number')
});
