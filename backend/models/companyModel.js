const mongoose = require('mongoose');

const companyModel = mongoose.Schema({
    id_fin:{
        type: Number,
        required: [true, "Pls add text value"]
    },
    name:{
        type: String,
        required: [true, "Pls add text value"]
    },
}, {
    timepstamps: true,
})

module.exports = mongoose.model('company', companyModel);