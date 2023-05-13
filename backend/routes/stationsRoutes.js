
const express = require('express');
const router = express.Router();



const {getStation, getStationByIdFin, createOrUpdateStation} = require("../controllers/stationController")



router.get('/', getStation);

router.post('/', createOrUpdateStation);

router.get('/:fid', getStationByIdFin)

module.exports = router