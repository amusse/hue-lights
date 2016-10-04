var express = require('express');
var app = express();
var router = express.Router();
var bunyan = require('bunyan');
let huejay = require('huejay');

let bridgeId = '';
let bridgeIP = '';

let client = new huejay.Client({
  host:     bridgeIP,
  port: 	80,
  username: ''
});

var logger = bunyan.createLogger({name: "Lights", src: true});
var port = process.env.PORT || 8080;

app.use('/api', router);
app.listen(port);
logger.info('Listening on port: ' + port);



//========================API ROUTES=====================//
router.get('/', function(req, res) {
    res.json({ message: 'Welcome to the api!' });   
});

router.get('/light/on', function(req, res) {
	client.lights.getById(3)
	  .then(light => {

	    light.on = true;

	    res.json({ message: 'Turned on the light' });  
	    return client.lights.save(light);
	  });
});

router.get('/light/off', function(req, res) {
	client.lights.getById(3)
	  .then(light => {

	    light.on = false;

	    res.json({ message: 'Turned off the light' });  
	    return client.lights.save(light);
	  });
});