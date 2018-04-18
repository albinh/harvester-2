import DS from 'ember-data';

export default DS.Model.extend({
    index:               DS.attr('number'),
    length:             DS.attr(),
    cultures:           DS.hasMany('culture', { async: true, inverse: null }),
    field:              DS.belongsTo('field'),
    
    isEmpty:            Ember.computed('cultures',function () {
       let l= this.get('cultures.length');
       return l==0;
    }),

    name:               Ember.computed('index','field',function() {
        {{debugger}}
        return field + index;
    })
});

