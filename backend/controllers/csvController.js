const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
const stationsController = require("./stationController.js")

exports.create = async (req, res) => {
  console.log(req.file);
  const totalRecords = [];
try{
console.log(path.join(__dirname, '../', '/public/csv/' + req.file.filename))
  fs.createReadStream(path.join(__dirname, '../', '/public/csv/' + req.file.filename))
    .pipe(csv.parse({ headers: true }))
    .on('error', error => console.error(error))
    .on('data', async rowCount => {
      try{
        let stations = await stationsController.createOrUpdateStation(rowCount);
        
        res.json(stations);
      }catch(err){
        res.status(400).json(err);
      }
    })
    .on('end', function(){
        console.log("stations was updated")
    })


  }catch(error){
    res.status(400).json(error)
  }
};