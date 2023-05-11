
const mongoose = require('mongoose');

const stationModel = mongoose.Schema({
    id_fin:{
        type: Number,
        required: [true, "Pls add text value"]
    },
    name_id:{
        type: Number,
        required: [true, "Pls add text value"]
    },
    company_id:{
        type: String
    },
    location: {
        type: {
          type: String,
          default: 'Point',
        },
        coordinates: [Number], //[longitude, latitude]
      }
}, {
    timepstamps: true,
})

module.exports = mongoose.model('station', stationModel);