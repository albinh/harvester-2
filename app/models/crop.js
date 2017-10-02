import DS from 'ember-data';

export default DS.Model.extend({
    name:               DS.attr('string'),

    countable:          DS.attr('boolean'),
    bunchable:          DS.attr('boolean'),
    weight_of_bunch:    DS.attr('number'),
    weight_of_single:   DS.attr('number')
});
