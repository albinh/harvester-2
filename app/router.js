import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('deliveries');
  this.route('delivery', {path:'/delivery/:delivery_id'})
  this.route('crops');
  this.route('customers');
  this.route('beds');
});

export default Router;
