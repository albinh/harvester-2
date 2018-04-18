import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
    name:               DS.attr('string'),
    productForms:       DS.attr(),
    forms:              DS.hasMany('crop', { async: true, inverse: null }),
    varieties:          DS.hasMany('variety' , { async: true, inverse: null }),
    base_form:          DS.belongsTo('crop', { async: true, inverse: null }),
    countable:          DS.attr('boolean'),
    weight_of_one_unit: DS.attr('number'),
    imageURL:           DS.attr('string'),

    is_base_form:       Ember.computed('base_form', function() {
        var b=this.belongsTo('base_form').id() === null;
        return b;
    }),

    imageURLSub:        Ember.computed('base_form','imageURL', function() {
        if (this.get('is_base_form')) {
            return this.get('imageURL');
        } else {
            return this.get('base_form').get('imageURL');
        }      
    }),

    long_name:          Ember.computed('base_form','name', function() {
        if (this.get('is_base_form')) {
            return this.get('name');
        } else {
            return this.get('base_form').get('name')+" ("+this.get('name')+")";
        }
    })

});
