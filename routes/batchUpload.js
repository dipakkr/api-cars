const express = require('express');
const router  = express.Router();
const request = require('request');
const removd = require('removd');
const fs = require('fs');

router.post('/upload', (req, res)=>{

    request.post({
        url: 'https://api.remove.bg/v1.0/removebg',
        formData: {
        image_file: fs.createReadStream('/home/deepak/Documents/HQ/api-pr1/cars/car1.jpg'),
        size: 'auto',
    },
  
    headers: {
        'X-Api-Key': 'gCcJBhduqahFN1yziJdJJ8Xu'
    },
  
    encoding: null
  }, function(error, response, body) {
    
    if(error) return res.send(error);
    if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
    
    fs.writeFileSync("no-bg.png", body);
    
  });
})

module.exports = router;