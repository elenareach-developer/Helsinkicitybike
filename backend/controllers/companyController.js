let {data, addData} = require('../tempData/data');
const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');

const Company = require('../models/companyModel')

// @desc GET Company info
// @route GET/api/company
// @access Private
const getCompany = asyncHandler(async (req, res) => {
        const company = await Company.find();
        res.send(company)
})

// @desc POST Company info
// @route POST/api/company
// @access Private
const createCompany = asyncHandler(async (req, res) => {
    if(!req.body.name && !req.body.id_fin ){
        res.status(400)
        throw new Error("Name field is reqired");
    }
    const company = await Company.create({
        id_fin: req.body.id_fin,
        name: req.body.name
    })
    res.status(200).json(company)
})



// @desc GEt Company record by Id
// @route GET/api/company/:id
// @access Private
const getCompanyByIdFin = asyncHandler(async (req, res) => {
    console.log(req.params)
    const company = await Company.find({id_fin: req.params.id_fin})
    res.status(200).json(company)
})

// @desc DELETE Company record by Id
// @route DELETE/api/company/:id
// @access Private
const deleteCompanybyId = asyncHandler(async (req, res) => {
    if(!req.params._id){
        res.status(400)
        throw new Error("ID field is reqired");
    }
    const company = await Company.findByIdAndRemove({_id: mongoose.Types.ObjectId(req.body._id)})
    if(!company){
        res.send('Company not found')
    } else{
        company.remove()
        res.send('Company deleted')
    }
})

// @desc PUT Company info
// @route PUT/api/company/:name
// @access Private
const updateCompany = asyncHandler(async (req, res) => {
    if(!req.body.name_old||req.body.name_new){
        res.status(400)
        throw new Error("Old name or New name  field is reqired");
    }
    const myquery = { name: req.body.name_old };
    const newvalues = { $set: {name: req.body.name_new} };
    const company = await Company.updateOne(myquery, newvalues, (err)=>{
        if(err) return res.status(200).json({
            error: true,
            code: 115,
            message: "Erro to update user!"
        })
    })
    res.status(200).json(company)

})
module.exports = {
    getCompany,
    createCompany,
    getCompanyByIdFin,
    deleteCompanybyId,
    updateCompany,
}