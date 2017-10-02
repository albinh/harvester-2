import Ember from 'ember';
import ColumnDefinition from 'ember-table/models/column-definition';


  

export default Ember.Controller.extend({
    actions: {
        add_crop() {

            
            let delivery_crop = this.get('store').createRecord('delivery_crop', {
              crop: "asdf",
              amount:3
            });
            {{debugger}}
            let delivery = this.get('model');
            let delivery_crops = delivery.get('crops')   
            delivery_crops.addObject(delivery_crop);
            
            delivery_crop.save().then(function() {
                return delivery.save();

            })

            
            
                        
        }
    }
});
