import DS from 'ember-data';

export default DS.Model.extend({
    name:               DS.attr('string'),
    forms:              DS.hasMany('crop', { async: true, inverse: null }),
    base_form:          DS.belongsTo('crop', { async: true, inverse: null }),
    countable:          DS.attr('boolean'),
    weight_of_one_unit: DS.attr('number'),

    is_base_form:       Ember.computed('base_form', function() {
        var b=this.belongsTo('base_form').id() === null;
        return b;
    })
});
