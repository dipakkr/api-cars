const express = require('express');
const router  = express.Router();
const request = require('request');
const fs = require('fs');

const multer = require('multer');

// const storage = multer.diskStorage({
//     destination : function(req, file, cb){
//         cb(null, './uploads/');
//     },
//     filename : function(req, file, cb){
//         cb(null, new Date().toISOString() + file.originalname);
//     }
// })

const upload = multer({ dest : 'uploads/' });


router.post('/upload', upload.any(), (req, res, next)=>{

    //1. Get the list of files
    //2. Save it in the array 
    //3. Make the BG removal request call equal to the number of length of array
    //4. Keep uploading the response image of BG removal on cloud DB.  

    // SINGLE IMAGE REQUEST

    console.log(req.files);

    var paths = [];
    
    for( var i=0;i<req.files.length; i++){
      paths.push(req.files[i].path);
    }

    console.log(paths);

    request.post({
        url: 'https://api.remove.bg/v1.0/removebg',
        formData: {
          image_file: fs.createReadStream(''),
          size: 'auto',
    },
  
    headers: {
        'X-Api-Key': 'cEgMCSUN8QFY8tPbKfMSooES'
    },
  
    encoding: null
  }, function(error, response, body) {
    
    if(error) return res.send(error);
    if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
    
    fs.writeFileSync("no-bg-1.png", body);
   

  });
})



module.exports = router;