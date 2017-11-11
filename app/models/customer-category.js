import DS from 'ember-data';

export default DS.Model.extend({
    name:               DS.attr('string'),
    customers:          DS.hasMany('customer', { async: true, inverse: null })

});
