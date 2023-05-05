
let {data, addData} = require("../tempData/data")
const express = require('express');
const router = express.Router();

const {getStations} = require("../controllers/stationController")



router.get('/', getStations);

router.get('/withFunc', function(req, res){
        res.status(200).json(data)
})

router.get('/:id', (req, res) => {
    let id = req.params.id
    //console.log(id)
    //res.send("id:"+id)
    res.send(data.find(el=>el._id == id))
})

router.get('/list/:start&:perPage', (req, res) => {
    let start = req.params.start
    let perPage = req.params.perPage
    let end =  start+perPage-1
     if( end>data.lenght){
        end = data.lenght
     }
     //res.send(end)
    res.send(data.slice(start,end))
})

router.delete('/:id', (req,res)=>{
    let id = req.params.id
    data = data.filter(el=>el._id!= id)
    res.send(data)

})

router.put('/', (req,res)=>{
    data.push(addData)
    res.send(data)

})

module.exports = router