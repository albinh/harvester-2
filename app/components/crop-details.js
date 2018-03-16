import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),    
    actions: {
        openAddCropFormDialog(/* param, event */) {
            this.set('dialogOrigin', null);
            this.set('showAddCropFormDialog', true);
        },

        addVariety() {
            this.set('newVariety',this.get('store').createRecord('variety'));
            this.set('showNewVariety',true);
        },

        closeAddCropFormDialog(result, cropName,countable, weight_of_one_unit) {
            if (result === 'ok') {
                var crop = this.get('crop');
                    var newCrop = this.get('store').createRecord('crop', {
                        name:       cropName,
                        countable:  countable,
                        weight_of_one_unit:weight_of_one_unit,
                        base_form:crop

                    });
                    newCrop.save().then (function () {

                    crop.get('forms').pushObject(newCrop);
                    crop.save();
                })
                }
                this.set('showAddCropFormDialog', false);
            },


    }
});
