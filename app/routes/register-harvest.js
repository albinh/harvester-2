import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return  this.get('store').findRecord('delivery-crop', params.delivery_crop_id); // => GET /blog-posts/1
    } 

});
