import Ember from 'ember';

export default Ember.Controller.extend({

    customers:  Ember.computed('', function(){
        return this.store.findAll('customer')        
    }),
    actions: {
        add() {
            var newPost = this.store.createRecord('delivery', {
                customer: 'EmberFire is flaming hot!',
                date: new Date(),
                
              });
        },



        openAddDeliveryDialog() {
            this.set('showAddDeliveryDialog', true);
        },

        closeAddDeliveryDialog(result, newCustomer, newDate) {
            if (result === 'ok') {
                let delivery = this.get('store').createRecord('delivery', {
                    customer: newCustomer,
                    date:new Date(newDate)
                });
                {{debugger}}

                delivery.save()

                newCustomer.get("deliveries").addObject(delivery)
                newCustomer.save();

            }
        this.set('showAddDeliveryDialog', false);
        
            
                        
        }



      }
    

});
