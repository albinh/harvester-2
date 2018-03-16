import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        {{debugger}}
        var variety = this.get('store').createRecord('variety', {

        });
        return variety;
      }
});
