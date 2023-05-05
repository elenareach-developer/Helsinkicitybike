// @desc GEt Stations info
// @route GET/api/stations
//  accwss Private

let {data, addData} = require('../tempData/data');

const getStations = (req, res) => {
        res.send(data)
}


module.exports = {
    getStations
}