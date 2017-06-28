express = require('express');
app = express();
var Jimp = require("jimp");
var pix = require("pixel-js");
var Tesseract = require('tesseract.js');
var async = require('async');
var pro;

app.get('/ocr', function(req, res) {
    console.log(__dirname);
    var imagePath = __dirname + '/img/img59.jpg';
    var processedImagePath = __dirname + '/processed/';

    Jimp.read(imagePath).then(function(result) {
        console.log(result.bitmap.data) // set greyscale // save 
        var wid = result.bitmap.width;
        var height = result.bitmap.height;
        console.log(wid)
        console.log(height)
        return new Promise((resolve, reject) => {
                result.scan(0, 0, result.bitmap.width, result.bitmap.height, function(i, j, idx) {
                    var red = this.bitmap.data[idx + 0];
                    var green = this.bitmap.data[idx + 1];
                    var blue = this.bitmap.data[idx + 2];
                    var alpha = this.bitmap.data[idx + 3];
                    var avg = (red + green + blue) / 3;
                    if (avg > 110) {
                        this.bitmap.data[idx] = 255
                        this.bitmap.data[idx + 1] = 255
                        this.bitmap.data[idx + 2] = 255
                    } else {
                        this.bitmap.data[idx] = 0
                        this.bitmap.data[idx + 1] = 0
                        this.bitmap.data[idx + 2] = 0
                    }
                    resolve("done");
                })

            })
            .then(function(data) {
                console.log(data);
                result.write(processedImagePath + "new.jpg");
                console.log("Completed");
                res.json({
                    success: true,
                    payload: data
                });
            }).catch(function(err) {
                console.log('Vision api error', err)
                res.json({
                    success: false,
                    payload: 'internal server error'
                });
            });
    })
});

function loop(filename, index, data) {
    var fileName = 'image' + index + '.jpg';
    var processedImagePath = __dirname + '/processed/';
    Jimp.read(filename).then(function(image) {
        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(i, j, idx) {
            var red = this.bitmap.data[idx + 0];
            var green = this.bitmap.data[idx + 1];
            var blue = this.bitmap.data[idx + 2];
            var alpha = this.bitmap.data[idx + 3];
            var avg = (red + green + blue) / 3;
            if (avg > 110) {
                this.bitmap.data[idx] = 255
                this.bitmap.data[idx + 1] = 255
                this.bitmap.data[idx + 2] = 255
            } else {
                this.bitmap.data[idx] = 0
                this.bitmap.data[idx + 1] = 0
                this.bitmap.data[idx + 2] = 0
            }
        })
        image.crop(parseInt(data.x), parseInt(data.y), data.width, data.height);
        image.write(processedImagePath + fileName);
    }).catch(function(err) {
        console.log(err);
    });
}


app.get('/crop', function(req, res) {
    var imagePath = __dirname + '/img/2.jpg';
    var processedImagePath = __dirname + '/processed/';
    var cropPositions = [
        { "x": 18, "y": 111, "width": 422, "height": 78 },
        { "x": 716, "y": "135", "width": 205, "height": 44 },
        { "x": 315, "y": 346, "width": 256, "height": 52 },
        { "x": 209, "y": 78, "width": 241, "height": 34 }
    ];
    for (var i = 0; i < cropPositions.length; i++) {
        console.log(i);
        loop(imagePath, i, cropPositions[i]);
    }
    res.send({ "status": "true" });

})



function observe(filename) {
    pro = new Promise((resolve, reject) => {
        var res;
        console.log('scan');
        Tesseract.recognize(filename)
            .then(function(result) {
                console.log(result.text);
                res = result.text;
                resolve(res);
            })
    })
}



app.get('/fetchdata', function(req, res) {
    var pathArray = [];
    var payload = [];
    for (var i = 0; i <= 3; i++) {
        var path = __dirname + '/processed/image' + i + '.jpg';
        pathArray.push(path);
    }
    console.log(pathArray);
    new Promise((resolve, reject) => {
        var count = 0;
        for (var j = 0; j < pathArray.length; j++) {
            Tesseract.recognize(pathArray[j])
                .then(function(result) {
                    console.log(result.text);
                    ocrText = result.text;
                    payload.push(ocrText);
                    count++;
                    if (count == pathArray.length) {
                        resolve("Completed");
                    }
                })
        }
    }).then((e) => {
        console.log(e);
        res.send({ "payload": payload });

    })
});





app.listen(3002, function() {
    console.log('App is listening on port 3002');
})
