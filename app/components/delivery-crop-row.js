import Ember from 'ember';

export default Ember.Component.extend({

    order_types: Ember.computed('', function(){
        var c=this.get('dc').get('crop').get('countable');

        
        if (c) {
            return ["kg","st"]
        } else {
            return ["kg"]
        };

      }),

      price_types: Ember.computed('', function(){
        var c=this.get('dc').get('crop').get('countable');

        
        if (c) {
        return ["kr/kg","kr/st"]
        } else {
            return ["kr/kg"]
        }

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
