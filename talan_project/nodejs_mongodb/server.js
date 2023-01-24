// import the express package
const express = require('express');
const bodyParser = require('body-parser');

const router = require('./network/routes');

// start the express web application
var app = express();
app.use(bodyParser.json());
// app.use(router);

router(app);

// define the route where the application will listen
// define the function that contains the req and
// the response
/* app.use('/', function (req, response) {
    response.send('Hola');
}); */


app.use('/app', express.static('public'));
// define the port where the app will listen
app.listen(3000);

// show on console a string when the application its on
console.log('The app is listening at http://localhost:3000');
