
let {data, addData} = require("../tempData/data")
const express = require('express');
const router = express.Router();



const {getCompany, updateCompany, deleteCompanybyId, getCompanyByIdFin, createCompany} = require("../controllers/companyController")



router.get('/', getCompany);



router.delete('/:_id', deleteCompanybyId)

router.post('/', createCompany)

router.put('/:name', updateCompany)
router.get('/:id_fin', getCompanyByIdFin)

module.exports = router