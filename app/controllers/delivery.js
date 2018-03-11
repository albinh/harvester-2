import Ember from 'ember';
import ColumnDefinition from 'ember-table/models/column-definition';


  

export default Ember.Controller.extend({

    crops: Ember.computed('', function(){
        return this.store.findAll('crop')        
    }),


    

    actions: {
        show_add_crop_dialog() {
            this.set('dialogOrigin', null);
            this.set('showAddDeliveryCropFormDialog', true);
        },
        
        
        closeAddDeliveryCropFormDialog(result, crop) {
            if (result === 'ok') {
        

            
            let delivery_crop = this.get('store').createRecord('delivery_crop', {
              crop: crop,
              amount:0
            });
  
            let delivery = this.get('model');
            let delivery_crops = delivery.get('crops')   
            delivery_crops.addObject(delivery_crop);
            
            delivery_crop.save().then(function() {
                return delivery.save();

            })
        }
        this.set('showAddDeliveryCropFormDialog', false);
        
            
                        
        }
    }
});
