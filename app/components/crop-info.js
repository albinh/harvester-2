import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),    
    firebaseUtil: Ember.inject.service( 'firebaseUtil' ),
    showUploadImageDialog:false,
    
    showUpload:Ember.computed('showUploadImageDialog', function() {
        return this.get("showUploadImageDialog");
    }),

    actions: {


        /* Prompt dialog */
        openAddCropFormDialog(/* param, event */) {
            this.set('dialogOrigin', null);
            this.set('showAddCropFormDialog', true);
        },

        openUploadImageDialog() {
            this.set('dialogOrigin', null);
            this.set('showUploadImageDialog',true);
        },

        closeUploadImageDialog(result) {
            {{debugger}}
            this.set('showUploadImageDialog',false);
        },

        didSelectFiles(data) {
            console.log(data);

            function onStateChange(snapshot) {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              
                console.log('Upload is ' + progress + '% done');
              }
              
              this.get('firebaseUtil').uploadFile(this.get('dc').get('name')+".jpeg", data[0]).then(downloadURL => {
                // Do something with `downloadURL`
                console.log("UPLOADED!");
                console.log(downloadURL);
                this.get('dc').set('imageURL',downloadURL);
                this.get('dc').save();
              }).catch(error => {
                  console.log(error)
                // Do something with `error`
              });
              this.set('showUploadImageDialog',false);            

        },
      


        closeAddCropFormDialog(result, cropName,countable, weight_of_one_unit) {
            if (result === 'ok') {
                var crop = this.get('dc');
                {{debugger}}
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
