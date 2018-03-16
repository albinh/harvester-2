import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),    
    actions: {
        openAddCropFormDialog(/* param, event */) {
            this.set('dialogOrigin', null);
            this.set('showAddCropFormDialog', true);
        },

        openAddVarietyDialog() {
            this.set('showAddVarityDialog', true)
        },

        closeAddVarietyDialog() {
            this.set('showAddVarityDialog', false)
            if (result === 'ok') {
                var crop = this.get('crop');
                var newVariety = this.get('store').createRecord('varity', {
                    name: this.get('newVarityName'),
                    type: this.get('newVarityType'),
                    
                    rows_per_bed: this.get('newVarietyRows'),
                    spacing_in_row: this.get('newVarietySpacing'),
                    seeds_per_row: DS.attr('number'),
                    crop: DS.belongsTo('crop', { async: true, inverse: null })
                

                })
            }
            this.set('showAddVarityDialog',false)
        },

        closeAddCropFormDialog(result, cropName,countable, weight_of_one_unit) {
            if (result === 'ok') {
                var crop = this.get('crop');
                    var newCrop = this.get('store').createRecord('crop', {
                        name:       cropName,
                        countable:  countable,
                        weight_of_one_unit:weight_of_one_unit,
                        base_form:crop

                    });
                    newCrop.save().then (function () {

                    crop.get('forms').pushObject(newCrop);
                    crop.save();
                })
                }
                this.set('showAddCropFormDialog', false);
            },


    }
});
