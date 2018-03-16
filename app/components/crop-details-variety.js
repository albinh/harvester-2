import Ember from 'ember';

export default Ember.Component.extend({
    types: ['seeded','planted'],

    actions:{
        startEdit() {
            this.set('editing',true);
        },
        saveVariety() {
            let v=this.get('variety');
            if (v.isNew) {
                let c=this.get('crop');
                v.set('crop',c);
                v.save().then(function() {
                    c.get('varieties').pushObject(v);
                    c.save();
                })

            } else {
                v.save();
            }
            
            this.set('editing',false)

        }
    }
});
