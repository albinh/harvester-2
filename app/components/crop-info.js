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
      


    



                
    }
});
