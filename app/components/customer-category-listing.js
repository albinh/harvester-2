import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),    
    
    actions: {
        /* Prompt dialog */
        customerName: '',
        openAddCustomerDialog(/* param, event */) {
            this.set('showAddCustomerDialog', true);
        },
        closeAddCustomerDialog(result, customerName, customerCategory) {
            if (result === 'ok') {
                var store = this.get('store');

                {{debugger}}
                var newCustomer = store.createRecord('customer', {
                    name: customerName,
                    category: customerCategory
                });
                newCustomer.save();


                customerCategory.get('customers').pushObject(newCustomer);
                customerCategory.save();




            }
            this.set('showAddCustomerDialog', false);
        }
    }

});
