import Ember from 'ember';
export default Ember.Route.extend(
    {
        model(params) {
            return  this.get('store').findRecord('delivery', params.delivery_id); // => GET /blog-posts/1
        } 
    }
);
