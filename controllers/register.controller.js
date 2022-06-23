const {Registration} = require('../models/registration.model');
const getAllRegisters = async (req,res) => {
    try {
        const register = await Registration.findAll();
        res.status(200).json({register})
    } catch (error) {
        console.log(error)
    }
};
const getRegisterById = async (req,res) => {
    try {
        const {id} = req.params;
        const register = await Registration.findOne({where:{id}})
        if(!register){
            return res.status(404).json({
                status:'error',
                message:'dont find register with that id'
            });
        }
        res.ststus(200).json({register})
    } catch (error) {
        console.log(error)
    }
};
const createRegister = async (req,res) => {
    try {
        const newRegister = await Registration.create({entranceTime:Date});
        res.status(200).json({newRegister})
    } catch (error) {
        console.log(error)
    }
};
const updateRegister = async (req,res) => {
    try {
        const {id} = req.params;
        const register = await Registration.findOne({where:{id}})
        if(!register){
            return res.status(404).json({
                status:'error',
                message:'dont find register with that id'
            });
        }
        register.update({exitTime:Date,status:'Out'})
        res.status(200).json({status:'success'})
    } catch (error) {
        console.log(error)
    }
};
const delateRegister = async (req,res) => {
    const {id} = req.params;
    const register = await Registration.findOne({where:{id}})
    if(!register){
        return res.status(404).json({
            status:'error',
            message:'dont find register with that id'
        });
    }
    register.update({status:'afired'})
    res.status(200).json({status:'success'})
}

module.exports = {getAllRegisters,getRegisterById,createRegister,updateRegister,delateRegister};