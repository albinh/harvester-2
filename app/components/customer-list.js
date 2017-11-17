import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),    
    customerCategories: Ember.computed('', function(){
        return this.get('store').findAll('customer-category');
      }),
    
    
    fab_open: false,
    actions: {
        /* Prompt dialog */
        customerName: '',
        fab_open:false,
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
        },

        customerCategoryName: '',
        openAddCustomerCategoryDialog(/* param, event */) {
            this.set('showAddCustomerCategoryDialog', true);
        },

        

        closeAddCustomerCategoryDialog(result, customerCategoryName) {
            if (result === 'ok') {
                var store = this.get('store');
                var newCustomerCategory = store.createRecord('customer-category', {
                    name: customerCategoryName,
                    
                });
                newCustomerCategory.save();
            }
            this.set('showAddCustomerCategoryDialog', false);
        }


    }

});
