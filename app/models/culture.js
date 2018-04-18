import DS from 'ember-data';

export default DS.Model.extend({
    crop: DS.belongsTo('crop'),
    beds: DS.hasMany('bed', { async: true, inverse: null }),
    variety: DS.belongsTo('variety'),
    inGround: DS.attr(), // datum i jorden
    type: DS.attr(), // "planted", "seeded"
    daysToPlanting: DS.attr('number'),
    plantSpacing: DS.attr('number'),
    rowsPerBed: DS.attr('number'),
    seedsPerMeter: DS.attr('number'),
    plantContainer: DS.attr('string'),

    plantSeedDate: Ember.computed('daysToPlanting', 'inGround', function () {
        return moment(this.get('inGround')).subtract(this.get('daysToPlanting'),'days').format('YYYY-MM-DD');
    })



});
