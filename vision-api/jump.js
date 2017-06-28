express = require('express');
app = express();
var Jimp = require("jimp");
var pix = require("pixel-js");
console.log("check");




app.get('/ocr', function(req, res) {
    console.log(__dirname);
    var imagePath = __dirname + '/img/driving1.jpg';
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
                    payload:data
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


app.listen(3002, function() {
    console.log('App is listening on port 3002');
})
