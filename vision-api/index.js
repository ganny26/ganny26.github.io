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
  //res.render( 'index' );
  visionClient.scan();
});


app.post('/fileupload',upload.single('avatar'),function(req,res,next){
    console.log('calling file upload');
    console.log('File >>>',req.file);
})
app.listen(8656,function(){
    console.log("server running on http://localhost:8656");
});
