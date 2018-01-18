import Ember from 'ember';

export default Ember.Component.extend({

    store: Ember.inject.service(),    
    
    
        actions: {
            /* Prompt dialog */
            formName: '',
            openAddBedsDialog(/* param, event */) {
                this.set('numBeds',1);
                this.set('bedLength',1);
                this.set('showAddBedsDialog', true);
            },
    
            
    
            closeAddBedsDialog(result, numBeds,bedLength) {
                if (result === 'ok') {
                    {{debugger}}
                    var field = this.get('field');
                    var store = this.get('store');
                        
                    for (let i = 0;i<numBeds;i++) {
                        var bedIndex=field.get('bedCount')+1
                        var newBed=store.createRecord('bed', {
                            length:bedLength,
                            field:field,
                            index:bedIndex
                        })
                        newBed.save();
                        field.set('bedCount', bedIndex)
                        field.get('beds').pushObject(newBed)
                        field.save();
                    }
                }
                
                this.set('showAddBedsDialog', false);
            }
        }
    
    
});
