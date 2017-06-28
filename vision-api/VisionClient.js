const vision = require('@google-cloud/vision');

const projectId = 'oao-india';

/**Google Vision Client */
const visionClient = vision({
    projectId: projectId,
    keyFilename: 'application_default_credentials.json'
});


var licenseArray = [];

module.exports = {
    scan: function(req, res, callback) {
        visionClient.detectText('img/2.jpg')
            .then((results) => {
                var visionResult = results[0];
                var data = visionResult[0];
                licenseArray.push(data.split('\n'));
                callback(licenseArray[0]);
            }).catch(function(err) {
                console.log('vision api error', err)
                res.json({
                    success: false,
                    payload: 'internal server error'
                });
            });
    },

    scanMedicare: function(req, res) {
        var medicareNumber;
        var status;
        visionClient.detectText('img/medicare1.jpg')
            .then((results) => {
                const detections = (results[0] + '').split('\n');
                const regexMedicare = '^([0-9]{10})$';
                const regexValidToDate = "[0-9]{2}" + "\/" + "[0-9]{4}$";
                for (var i = 0; i < detections.length; i++) {
                    var validMedicare = detections[i].replace(/\s/g, '');
                    console.log(validMedicare);
                    if (validMedicare.match(regexMedicare)) {
                        console.log('matched');
                        var identifier = validMedicare.substring(0, 9);
                        var issueNumber = validMedicare.substring(9, 10);
                        medicareNumber = {
                            identifier: identifier,
                            reference: issueNumber
                        };
                        status = true;
                        break;
                    } else {
                        medicareNumber = "not found";
                        status = false;
                        console.log('Error');
                    }
                };


                res.json({
                    success: status,
                    payload: medicareNumber
                });
            }).catch(function(err) {
                console.log('vision api error', err)
                res.json({
                    success: false,
                    payload: 'internal server error'
                });
            });
    },

    scanDrivingLicense: function(req, res) {
        var drivingLicenseNumber;
        var status;
        visionClient.detectText('img/driving1.jpg')
            .then((results) => {
                const detections = (results[0] + '').split('\n');
                const regexLicense = '(^[0-9]{9})$';
                for (var i = 0; i < detections.length; i++) {
                    var validDL = detections[i].replace(/\s/g, '');
                    console.log(validDL);
                    if (validDL.match(regexLicense)) {
                        console.log('matched');
                        drivingLicenseNumber = validDL;
                        status = true;
                        break;
                    } else {
                        drivingLicenseNumber = "not found";
                        status = false;
                        console.log('Error');
                    }
                };


                res.json({
                    success: status,
                    payload: drivingLicenseNumber
                });
            }).catch(function(err) {
                console.log('vision api error', err)
                res.json({
                    success: false,
                    payload: 'internal server error'
                });
            });

    }
}
