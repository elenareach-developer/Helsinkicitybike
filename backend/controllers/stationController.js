let {data, addData} = require('../tempData/data');

// @desc GEt Stations info
// @route GET/api/stations
// @access Private
const getStations = (req, res) => {
        res.send(data)
}

const paginationsStations =  (req, res) => {
    let start = req.params.start
    let perPage = req.params.perPage
    let end =  start+perPage-1
     if( end>data.lenght){
        end = data.lenght
     }
     //res.send(end)
    res.send(data.slice(start,end))
}

const postStations = (req, res) => {
    consolr.log(req.body)
    res.status(200).jason({message: 'Stations'})
}

const getStationById = (req, res) => {
    let id = req.params.id
    //console.log(id)
    //res.send("id:"+id)
    res.send(data.find(el=>el._id == id))
}

const deletStationbyId = (req,res)=>{
    let id = req.params.id
    data = data.filter(el=>el._id!= id)
    res.send(data)

}
const updateStation = (req,res)=>{
    data.push(addData)
    res.send(data)

}
module.exports = {
    getStations,
    postStations,
    getStationById,
    paginationsStations,
    deletStationbyId,
    updateStation
}