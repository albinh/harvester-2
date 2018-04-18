import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Component.extend({
    store: Ember.inject.service(),    

    currentStep:1,

    crops: Ember.computed(function() {return this.get('store').findAll('crop')}),
    cropSummary : Ember.computed('culture.crop', 'culture.variety', function() {return `${this.get('culture.crop.name')} (${this.get('culture.variety.name')})` }),

    howSummary: Ember.computed('culture.{type,rowsPerBed,plantSpacing,plantContainer}', function() {
        return `${this.get('culture.typeText')} (${this.get('culture.plantContainer')}) ${this.get('culture.rowsPerBed')} rader x ${this.get('culture.plantSpacing')} cm`
    }),



    

    cultureTypes: [{"id":"directseeded", "description": "direktsådd"},
    {"id":"planted", "description": "planterad"}],
  
    r2: "asdf",

    allBeds: Ember.computed( function () {
        return this.get('store').findAll('bed');

    }),

    remainingBeds: Ember.computed('culture.beds', function () {
        {{debugger}}
        
        let a=this.get('allBeds').filterBy('isEmpty',true);
        return a;
        
        
    }),

    actions: {
        addBed: function(b) {
            this.get('culture.beds').pushObject(b);
        },

        removeBed: function(b) {
            this.get('culture.beds').removeObject(b);
        },


        updateType: function (n) {
            this.set('culture.type', n.id)
            this.set('newType',n)
        },

        addVariety: function() {
            let crop =this.get('culture.crop');

            var newVariety = this.get('store').createRecord('variety', {
                crop: this.get('culture.crop'),
                name: this.get('varietySearchText')
            });
            let nv=newVariety.save();
            Promise.all([crop,nv]).then(([c,n]) => {
                c.get('varieties').pushObject(newVariety);
                c.save();
                
            })

            this.set('culture.variety',newVariety);
        }


    }

}

);
