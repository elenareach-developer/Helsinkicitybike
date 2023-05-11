const mongoose = require('mongoose');

const journeyStatisticModel = mongoose.Schema({
    month_year: {Data, required:true},
    departure_station_id: {Number, required:true},
    return_station_id: {Number, required:true},
    total_distance_per_month: {Number, required:true},
    total_journey_per_month: {Number, required:true},
}, {
    timepstamps: true,
})

module.exports = mongoose.model('journeyStatistic', journeyStatisticModel);