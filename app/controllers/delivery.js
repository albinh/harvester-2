import Ember from 'ember';
import ColumnDefinition from 'ember-table/models/column-definition';


  

export default Ember.Controller.extend({

    crops: Ember.computed('', function(){
        return this.store.findAll('crop')        
    }),

    newCropOrderTypes: Ember.computed('newCropCrop.countable', function(){
        var a=this.get('newCropCrop');
        if (!a) {return []};

        var c=a.get('countable');

        
        if (c) {
            return ["kg","st"]
        } else {
            return ["kg"]
        };

      }),

      newCropPriceTypes: Ember.computed('newCropCrop.countable', function(){
        var a=this.get('newCropCrop');
        if (!a) {return []};

        var c=a.get('countable');
        
        if (c) {
        return ["kr/kg","kr/st"]
        } else {
            return ["kr/kg"]
        }

      }),
    

    actions: {
        show_add_crop_dialog() {
            this.set('dialogOrigin', null);
            this.set('showAddDeliveryCropFormDialog', true);
        },
        
        
        closeAddDeliveryCropFormDialog(result, crop) {
            if (result === 'ok') {
        

            let delivery = this.get('model');
            let delivery_crop = this.get('store').createRecord('delivery_crop', {
              crop: crop,
              delivery:delivery,
              amount:this.get('newCropAmount'),
              order_type:this.get('newCropOrderType'),
              price:this.get('newCropPrice'),
              price_type:this.get('newCropPriceType')
            });
  
            let delivery_crops = delivery.get('crops')   
            
            delivery_crop.save().then(function() {
                delivery_crops.addObject(delivery_crop);
                return delivery.save();
            })
        }
        this.set('showAddDeliveryCropFormDialog', false);
        
            
                        
        }
    }
});
