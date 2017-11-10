import DS from 'ember-data';

export default DS.Model.extend({
    name:               DS.attr('string'),
    countable:          DS.attr('boolean'),
    bunchable:          DS.attr('boolean'),
    read_only:          DS.attr('boolean'),
    crop:               DS.belongsTo('crop', { async: true, inverse: null }),   
    weight_of_one_unit: DS.attr()
});
