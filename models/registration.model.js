const {DataTypes} = require('sequelize');
const {db} = require('../utils/database');

const Registration = db.define('registration',{
    id:{
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
        type: DataTypes.INTEGER
    },
    entranceTime:{
        type: DataTypes.DATE,
        allowNull:false
    },
    exitTime:{
        type:DataTypes.DATE,
    },
    status:{
        type:DataTypes.DATE,
        allowNull:false,
        defaultValue:'Working'
    }
});

module.exports = {Registration};