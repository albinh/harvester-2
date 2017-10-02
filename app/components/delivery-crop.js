import Ember from 'ember';

export default Ember.Component.extend({
    
    order_types: Ember.computed('', function(){
        return ["kg","st"]
      }),

      price_types: Ember.computed('', function(){
        return ["kr/kg","kr/st"]
      })

});
