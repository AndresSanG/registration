const express = require('express');

const {db} = require('./utils/database')

const app = express();

app.use(express.json());

db.authenticate()
.then(()=>{console.log('database authenticated')})
.catch(err=>{console.log(err)})

const PORT = 4000;
app.listen(PORT,() =>{
    console.log(`Express runing on port: ${PORT}`)
})