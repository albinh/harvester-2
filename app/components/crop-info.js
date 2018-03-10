import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),    


    actions: {
        /* Prompt dialog */
        openAddCropFormDialog(/* param, event */) {
            this.set('dialogOrigin', null);
            this.set('showAddCropFormDialog', true);
        },

        

        closeAddCropFormDialog(result, cropName,countable, weight_of_one_unit) {
            if (result === 'ok') {
                var crop = this.get('dc');
                    var newCrop = this.get('store').createRecord('crop', {
                        name:       cropName,
                        countable:  countable,
                        weight_of_one_unit:weight_of_one_unit,
                        base_form:crop

                    });
                    newCrop.save();

                    crop.get('forms').pushObject(newCrop);
                    crop.save();

                }
                this.set('showAddCropFormDialog', false);
            },
    



                
    }
});
