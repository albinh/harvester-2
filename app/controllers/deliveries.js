import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        add() {
            var newPost = this.store.createRecord('delivery', {
                customer: 'EmberFire is flaming hot!',
                date: new Date(),
                
              });
              newPost.get("crops").createRecord();
              newPost.save();
              
          console.log("asdf")
        }
      }
    

});
