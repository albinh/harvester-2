import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),    
    customerCategories: Ember.computed('', function() {
        return this.get('store').findAll('customer-category');
    }),
    




    actions: {

        addCategory (name){
            var newCategory = this.get('store').createRecord('customer-category', {
                name: name
            });
            newCategory.save();
        },

        /* Prompt dialog */
        customerName: '',
     
        openAddCustomerDialog(/* param, event */) {
           
            this.set('showAddCustomerDialog', true);
        },
     
        closeAddCustomerDialog(result, customerName, customerCategory) {
            if (result === 'ok') {
                var store = this.get('store');

                var newCustomer = store.createRecord('customer', {
                    name: customerName,
                    category: customerCategory
                });

                newCustomer.save();

                customerCategory.get('customers').pushObject(newCustomer);
                customerCategory.save();
            }
            this.set('showAddCustomerDialog', false);
        },
    }
});
