import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),    
    cTab:'all',

    customers: Ember.computed('cTab', function(){
        var cTab=this.get('cTab');
        if (cTab=='new') return [];
        if (cTab=='all') return this.get('store').findAll('customer');

        return cTab.get('customers');
      }),

    customerCategories: Ember.computed('', function() {
        return this.get('store').findAll('customer-category')
    }),
    
    showNew: Ember.computed.equal('cTab', 'new'),

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
