import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    type: DS.attr('string'), // "seeded", "transplantet"
    rows_per_bed: DS.attr('number'),
    spacing_in_row: DS.attr('DS.number'),
    seeds_per_row: DS.attr('number'),
    crop: DS.belongsTo('crop', { async: true, inverse: null })
});
