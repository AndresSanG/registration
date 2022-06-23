const express = require('express');

const {registerRouter} = require('./routes/register.routes');

const {db} = require('./utils/database')

const app = express();

app.use('/api/v1/register',registerRouter);

app.use(express.json());

db.authenticate()
.then(()=>{console.log('database authenticated')})
.catch(err=>{console.log(err)})

const PORT = 4000;
app.listen(PORT,() =>{
    console.log(`Express runing on port: ${PORT}`)
})