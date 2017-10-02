import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        add() {
            var newPost = this.store.createRecord('crop', {
                customer: 'EmberFire is flaming hot!',
                date: new Date(),

            });
            newPost.get("crops").createRecord();
            newPost.save();

            console.log("asdf")
        },

        /* Prompt dialog */
        cropName: '',
        openCropDialog(/* param, event */) {
            this.set('dialogOrigin', null);
            this.set('showAddCropDialog', true);
        },

        closeAddCropDialog(result, cropName) {
            if (result === 'ok') {
                console.log(cropName);
                var newCrop = this.store.createRecord('crop', {
                    name: cropName
                    

                });
                newCrop.save();
            }
            this.set('showAddCropDialog', false);
        },

    }

});
