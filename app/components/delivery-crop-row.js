import Ember from 'ember';

export default Ember.Component.extend({

    order_types: Ember.computed('', function(){
        return ["kg","st"]
      }),

      price_types: Ember.computed('', function(){
        return ["kr/kg","kr/st"]
      }),

    actions: {
    openEditDeliveryCropDialog(/* param, event */) {
        this.set('showEditDeliveryCropDialog', true);
    },

    

    closeEditDeliveryCropDialog(result) {
        var self=this
        var close = function (model) {
            self.set('showEditDeliveryCropDialog', false);
        }

        if (result === 'ok') {
            var deliverycrop = this.get('dc');
            deliverycrop.save().then(close)
        } else {
            this.set('showEditDeliveryCropDialog', false);
        }
    }
    }
});
