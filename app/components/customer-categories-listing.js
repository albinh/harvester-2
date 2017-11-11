import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),    
    
    actions: {
        /* Prompt dialog */
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
