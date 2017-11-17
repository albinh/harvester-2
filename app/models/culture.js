import DS from 'ember-data';

export default DS.Model.extend({
    crop:               DS.belongsTo('crop'),
    beds:               DS.hasMany('bed', { async: true, inverse: null }),
    in_ground:          DS.attr(), // datum i jorden
});