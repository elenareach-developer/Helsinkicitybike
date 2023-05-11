const mongoose = require('mongoose');

const journeyModel = mongoose.Schema({
    start_time: {Number, required:true},
    return_time: {Number, required:true},
    departure_station_id: {Number, required:true},
    return_station_id: {Number, required:true},
    distance: {Number, required:true},
    duration: {Number, required:true},
}, {
    timepstamps: true,
})

module.exports = mongoose.model('journey', journeyModel);