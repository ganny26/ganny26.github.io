const express = require('express');
const vision = require('@google-cloud/vision');

const projectId = 'oao-india';

var app = express();

/**Google Vision Client */
const visionClient = vision({
    projectId: projectId,
    keyFilename: 'application_default_credentials.json'
});


function scan(req, res) {
    var passportNumber;
    var status;
    visionClient.detectText('img/passport2.jpg')
        .then((results) => {
            const detections = (results[0] + '').split('\n');
            const regexPassport = '^([A-Z]{1})([0-9]{7})$';
            for (var i = 0; i < detections.length; i++) {
                var validPassport = detections[i].replace(/\s/g, '');
                console.log(validPassport);
                if (validPassport.match(regexPassport)) {
                    console.log('matched');
                    passportNumber = validPassport;
                    status = true;
                    break;
                } else {
                    passportNumber = "not found";
                    status = false;
                    console.log('Error');
                }
            };


            res.json({
                success: status,
                payload: passportNumber
            });
        }).catch(function (err) {
            console.log('vision api error', err)
            res.json({
                success: false,
                payload: 'internal server error'
            });
        });
}

app.get('/', function (req, res) {
    scan(req, res);
});


app.listen(8656);
