import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
    delivery:           DS.belongsTo('delivery', { async: true, inverse: null }),
    crop:               DS.belongsTo('crop', { async: true, inverse: null }),
    amount:             DS.attr('number'),
    order_type:         DS.attr('string'),
    price:              DS.attr('number'),
    price_type:         DS.attr('string'),

    harvests:           DS.hasMany('harvest', {async:true, inverse:null}),

    harvestedWeight:    Ember.computed('harvests.@each.weight', function() {
        let harvests = this.get('harvests');
        let sum=0;
        harvests.forEach ((item, index) => {
            sum=sum+item.get('weight');
        })
        return sum;
    }),

    harvestedCount:    Ember.computed('harvests.@each.count', function() {
        let harvests = this.get('harvests');
        let sum=0;
        harvests.forEach ((item, index) => {
            sum=sum+item.get('count');
        })
        return sum;
    }),

    calculatedValue:    Ember.computed('order_type','price','price_type','price','crop.weight_of_one_unit', function() {
        if (this.get('order_type')=="kg" && this.get('price_type')=="kr/kg") {
            return this.get('amount') * this.get('price');
        } else if (this.get('order_type')=="st" && this.get('price_type')=="kr/kg") {
            return this.get('amount')*this.get('crop').get('weight_of_one_unit')*this.get('price');
        } else if (this.get('order_type')=="st" && this.get('price_type')=="kr/st") {
            return this.get('amount')*this.get('price');
        } else if (this.get('order_type')=="kg" && this.get('price_type')=="kr/st") {
            let amount=this.get('amount');
            let weight_of_one_unit= this.get('crop').get('weight_of_one_unit');
            let price = this.get('price')
            return amount/weight_of_one_unit*price;
        }
    }),
});
