const express = require('express');

const {getAllRegisters,
    getRegisterById,
    createRegister,
    updateRegister,
    delateRegister} = require('../controllers/register.controller');

const router = express.Router();

router.get('/',getAllRegisters);
router.post('/',createRegister);
router
.route('/:id')
.get(getRegisterById)
.patch(updateRegister)
.delete(delateRegister);

module.exports = {registerRouter:router};