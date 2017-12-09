import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),


    actions: {
        fieldName:'',
        openAddFieldDialog(/* param, event */) {
            this.set('showAddFieldDialog', true);
        },

        closeAddFieldDialog(result, fieldName) {
            if (result === 'ok') {
                var store = this.get('store');

                { { debugger } }
                var newField = store.createRecord('field', {
                    name: fieldName,
                });
                newField.save();
            }
            this.set('showAddFieldDialog', false);
        },
    }
})

