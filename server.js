var express = require('express');
var app = express();
var router = express.Router();
var bunyan = require('bunyan');
var huejay = require('huejay');
var bodyParser = require('body-parser');

var bridgeId = '25CF16';
var bridgeIP = '10.0.21.5';

var client = new huejay.Client({
  host:     bridgeIP,
  port: 	80,
  username: 'daDn5D2sqZYJbD0c7lI173FwpWd1iwOWqVxeT0VP'
});

var colors = {
	red: 0,
	pink: 3000,
	yellow: 11000,
	green: 25500,
	white: 35000,
	blue: 46920,
	purple: 55000,
}

var logger = bunyan.createLogger({name: "Lights", src: true});
var port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/api', router);

app.listen(port);
logger.info('Listening on port: ' + port);

//====================================API ROUTES===============================//
router.get('/', function(req, res) {
    res.json({ message: 'Welcome to the api!' });   
});

router.post('/alexa/home', function(req, res) {
	console.log(req.event);
	res.sendStatus(200);
	// logger.info({message: req}, 'Request received');
});

function turnOnLights(color) {
	client.lights.getById(1)
	  .then(light => {
	  	light.hue = colors[color];
	  	// light.hue = color;
	  	light.brightness = 254;
	    light.on = true;
	    return client.lights.save(light);
	  });
	client.lights.getById(2)
	  .then(light => {
	  	light.hue = colors[color];
	  	// light.hue = color;
	  	light.brightness = 254;
	    light.on = true;
	    return client.lights.save(light);
	  });
	client.lights.getById(3)
	  .then(light => {
	  	light.hue = colors[color];
	  	// light.hue = color;
	  	light.brightness = 254;
	    light.on = true;
	    return client.lights.save(light);
	  });
	 client.lights.getById(4)
	  .then(light => {
	  	light.hue = colors[color];
	  	// light.hue = color;
	  	light.brightness = 254;
	    light.on = true;
	    return client.lights.save(light);
	  });
}

function nightMode() {
	client.lights.getById(1)
	  .then(light => {
	  	light.hue = colors['yellow'];
	  	// light.hue = color;
	  	light.brightness = 70;
	  	light.effect = 'none';
	    light.on = true;
	    return client.lights.save(light);
	  });
	client.lights.getById(2)
	  .then(light => {
	  	light.hue = colors['yellow'];
	  	// light.hue = color;
	  	light.brightness = 70;
	    light.on = true;
	    return client.lights.save(light);
	  });
	client.lights.getById(3)
	  .then(light => {
	  	light.hue = colors['yellow'];
	  	// light.hue = color;
	  	light.brightness = 70;
	    light.on = true;
	    return client.lights.save(light);
	  });
	client.lights.getById(4)
	  .then(light => {
	  	light.hue = colors['yellow'];
	  	// light.hue = color;
	  	light.brightness = 70;
	    light.on = true;
	    return client.lights.save(light);
	  });
}

function vikingsMode() {
	client.lights.getById(1)
	  .then(light => {
	  	light.hue = colors['purple'];
	  	// light.hue = color;
	  	light.brightness = 254;
	  	light.effect = 'none';
	    light.on = true;
	    return client.lights.save(light);
	  });
	client.lights.getById(2)
	  .then(light => {
	  	light.hue = colors['purple'];
	  	// light.hue = color;
	  	light.brightness = 254;
	    light.on = true;
	    return client.lights.save(light);
	  });
	client.lights.getById(3)
	  .then(light => {
	  	light.hue = colors['yellow'];
	  	// light.hue = color;
	  	light.brightness = 254;
	    light.on = true;
	    return client.lights.save(light);
	  });
	client.lights.getById(4)
	  .then(light => {
	  	light.hue = colors['purple'];
	  	// light.hue = color;
	  	light.brightness = 254;
	    light.on = true;
	    return client.lights.save(light);
	  });
}

function sexyMode() {
	client.lights.getById(1)
	  .then(light => {
	  	light.hue = colors['purple'];
	  	// light.hue = color;
	  	light.brightness = 70;
	  	light.effect = 'colorloop';
	    light.on = true;
	    return client.lights.save(light);
	  });
	client.lights.getById(2)
	  .then(light => {
	  	light.hue = colors['red'];
	  	// light.hue = color;
	  	light.brightness = 70;
	    light.on = true;
	    light.effect = 'colorloop';
	    return client.lights.save(light);
	  });
	client.lights.getById(3)
	  .then(light => {
	  	light.hue = colors['pink'];
	  	// light.hue = color;
	  	light.brightness = 70;
	    light.on = true;
	    light.effect = 'colorloop';
	    return client.lights.save(light);
	  });
	client.lights.getById(4)
	  .then(light => {
	  	light.hue = colors['yellow'];
	  	// light.hue = color;
	  	light.brightness = 70;
	    light.on = true;
	    light.effect = 'colorloop';
	    return client.lights.save(light);
	  });
}

function giantsMode() {
	client.lights.getById(1)
	  .then(light => {
	  	light.hue = colors['blue'];
	  	// light.hue = color;
	  	light.brightness = 254;
	  	light.effect = 'none';
	    light.on = true;
	    return client.lights.save(light);
	  });
	client.lights.getById(2)
	  .then(light => {
	  	light.hue = colors['blue'];
	  	// light.hue = color;
	  	light.brightness = 254;
	    light.on = true;
	    return client.lights.save(light);
	  });
	client.lights.getById(3)
	  .then(light => {
	  	light.hue = colors['red'];
	  	// light.hue = color;
	  	light.brightness = 254;
	    light.on = true;
	    return client.lights.save(light);
	  });
	client.lights.getById(4)
	  .then(light => {
	  	light.hue = colors['blue'];
	  	// light.hue = color;
	  	light.brightness = 254;
	    light.on = true;
	    return client.lights.save(light);
	  });
}

function setScene(mode) {
	switch (mode) {
		case 'night': 
			nightMode();
			break;
		case 'vikings': 
			vikingsMode();
			break;
		case 'giants':
			giantsMode();
			break;
		case 'sexy':
			sexyMode();
		default:
			turnOnLights(white);
	}
}

router.post('/light/', function(req, res) {
	var body = req.body;
	var color = body.color;
	if (color) {
		turnOnLights(color);
		logger.info({color: color}, 'Set light color');
		res.json({ message: 'Set the lights to ' + color }); 
	} else {
		res.sendStatus(404);
	}
});

router.post('/light/scene', function(req, res) {
	var body = req.body;
	var scene = body.scene;
	if (scene) {
		setScene(scene);
		logger.info({scene: scene}, 'Set scene');
		res.json({ message: 'Set the scene to ' + scene});
	} else {
		res.sendStatus(404);
	}
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