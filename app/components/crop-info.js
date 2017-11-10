import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),    


    actions: {
        /* Prompt dialog */
        formName: '',
        openAddCropFormDialog(/* param, event */) {
            this.set('dialogOrigin', null);
            this.set('showAddCropFormDialog', true);
        },

        

        closeAddCropFormDialog(result, cropFormName) {
            if (result === 'ok') {
                console.log(cropFormName);
                var crop = this.get('dc');
                console.log(crop);
                var store = this.get('store')
                var newCropForm = store.createRecord('crop_form', {
                    name: cropFormName,
                    crop:crop
                });

                newCropForm.save();
                crop.get('forms').pushObject(newCropForm);
                crop.save();
            }
            
            this.set('showAddCropFormDialog', false);
        }
    }
});
