const express = require('express');
const async = require('async');
const fs = require('fs');
const multer  = require('multer');
var exphbs   =  require( 'express-handlebars' );
const visionClient = require('./VisionClient');

var app = express();

app.engine( '.hbs', exphbs( { extname: '.hbs' } ) );

app.set('view engine', '.hbs');
app.set('views', __dirname + '/views');

var upload = multer({ dest: 'uploads/' });


app.get('/', function(req, res,next) {
  visionClient.scan(req,res,function(result){
     var scanData = {
                "status":true,
                "payload":{
                    "name":result[3],
                    "license_number":result[5],
                    "license_expiry":result[10],
                    "dob":result[15]
                }
            }
        res.send(scanData);
  });
});


app.post('/fileupload',upload.single('avatar'),function(req,res,next){
    console.log('calling file upload');
    console.log('file uploaded succcesfully',req.file);
})
app.listen(8656,function(){
    console.log("server running on http://localhost:8656");
});
