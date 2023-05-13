let {data, addData} = require('../tempData/data');
const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');

const Station = require('../models/stationModel')


// @desc GET Station info
// @route GET/api/station
// @access Private
const getStation = asyncHandler(async (req, res) => {
        const station = await Station.find();
        console.log(station)    
        res.send(station)
})


// @desc POST Station info create Or Update
// @route POST/api/station
// @access Private
const createOrUpdateStation = asyncHandler(async (req, res) => {
     if(!req.body.FID && !req.body.ID && !req.body.name){
        res.status(400)
        throw new Error("FID, ID and name fields are reqired");
     }
     
    // const newStation = {
    //     FID: req.body.FID,
    //     ID: req.body.ID,
    //     Nimi:req.body.Nimi,
    //     Namn:req.body.Namn,
    //     Name:req.body.Name,
    //     Osoite:req.body.Osoite,
    //     Adress: req.body.Adress,
    //     Kaupunki: req.body.Kaupunki,
    //     Stad: req.body.Stad,
    //     Operaattor: req.body.Operaattor,
    //     Kapasiteet: req.body.Kapasiteet,
    //     x:req.body.x,
    //     y:req.body.y
    // }
    const newStation = {
             fid: req.body.FID,
             id: req.body.ID,
             Name:req.body.Name,
             Address: req.body.Address,
             x:req.body.x,
             y:req.body.y
        }
    const myquery = { fid: req.body.FID, };
    const newvalues = { $set: newStation };
    const options = { upsert: true };
    const stations = await Station.updateOne(myquery, newvalues, options)
    res.status(200).json(stations)
})



// @desc GEt Station record by Id
// @route GET/api/Station/:id
// @access Private
const getStationByIdFin = asyncHandler(async (req, res) => {
    console.log(req.params)
    const station = await Station.find({FID: req.params.FID})
    res.status(200).json(station)
})

module.exports = {
    getStation,
    createOrUpdateStation,
    getStationByIdFin
}