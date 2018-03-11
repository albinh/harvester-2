import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        /* Prompt dialog */
        cropName: '',
        countable:false,
        openCropDialog(/* param, event */) {
            this.set('dialogOrigin', null);
            this.set('showAddCropDialog', true);
        },

        closeAddCropDialog(result, cropName,countable, weight_of_one_unit) {
            if (result === 'ok') {
                console.log(cropName);
                {{debugger}}
                var newCrop = this.store.createRecord('crop', {
                    name:       cropName,
                    countable:  countable,
                    weight_of_one_unit:weight_of_one_unit

                });
                
                var store = this.get('store')
                newCrop.save();
            }
            this.set('showAddCropDialog', false);
        },

    }

});
