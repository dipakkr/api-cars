const express = require('express');
const mongoose = require('mongoose')
const morgan = require('morgan');
const bodyParser = require('body-parser');

const singleUpload = require('./routes/singleUpload');


const PORT = 3000;    
const app = express();

//Middleware
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.use(morgan('dev'));

// // DB Connection
// mongoose.connect('mongodb://dipakkr:a12345678@ds117848.mlab.com:17848/api-cars', { useNewUrlParser : true});

//routes
app.use('/images', singleUpload);

app.listen(PORT, (req, res)=>{
    console.log('Server started at PORT 3000');
});