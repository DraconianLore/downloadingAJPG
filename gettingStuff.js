var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
    .on('error', function(err) {
        throw err;
    })
    .on('response', function(response) {
        console.log('Response Code is ', response.statusCode);
        console.log('Response Message is ', response.statusMessage);
        console.log('Response Content Type is ', response.headers['content-type'])
        console.log('Starting Download . . .')
    })
    .pipe(fs.createWriteStream('./future.jpg'))
    .on('finish', function() {
        console.log('Download complete');
    });