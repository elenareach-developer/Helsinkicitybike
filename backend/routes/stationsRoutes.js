
let {data, addData} = require("../tempData/data")
const express = require('express');
const router = express.Router();



const {getStations, updateStation, postStations, getStationById, paginationsStations, deletStationbyId} = require("../controllers/stationController")



router.get('/', getStations);

router.get('/:id', getStationById)

router.get('/list/:start&:perPage', paginationsStations)

router.delete('/:id', deletStationbyId)

router.post("/post", postStations)

router.put('/', updateStation)

module.exports = router