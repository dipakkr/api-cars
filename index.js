const express = require('express');
const mongoose = require('mongoose')
const morgan = require('morgan');
const bodyParser = require('body-parser');

const batchUpload = require('./routes/batchUpload');

const PORT = 3000;    
const app = express();

//Middleware
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.use(morgan('dev'));

//routes

app.use('/images', batchUpload);

app.listen(PORT, (req, res)=>{
    console.log('Server started at PORT 3000');
});