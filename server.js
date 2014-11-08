require('./config/config.js');

var restify = require('restify'),
    restifyValidation = require('node-restify-validation');

var server = restify.createServer({
    name: 'ldl',
    version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.jsonp());
server.use(restifyValidation.validationPlugin({ errorsAsArray: false }));

server.get('/', function (req, res, next) {
    res.send({success: true, response: "welcome to the ass end of ldl"});
    return next();
});
/////////////////////////////////////////////////////
// ROUTES
/////////////////////////////////////////////////////

/********** CMS **********/
var cms = require('./app/cms/cmsController.js');
server.get({url: '/cms/home',
    validation: {

    }
}, cms.getHome);

/********** USER **********/

var user = require('./app/user/userController.js');

server.post({url: '/user/register',
    validation: {
        email: {isRequired: true, scope: "body", isEmail: true},
        password: {isRequired: true, scope: "body"}
    }
}, user.register);

server.post({url: '/user/login',
    validation: {
        email: {isRequired: true, scope: "body", isEmail: true},
        password: {isRequired: true, scope: "body"},
        hash: {isRequired: false, scope: "body"}
    }
}, user.login);

server.put('/user/:id', function() {});

/********** LOUNGE **********/
var lounge = require('./app/lounge/loungeController.js');
server.get('/lounge/video', function() {});
server.get('/lounge/music', function() {});

/********** EVENTS **********/
var events = require('./app/events/eventsController.js');
server.get('/events', events.getEvents);
server.get('/events/:numEvents', events.getEvents);
server.post('/events/', events.createEvent);



/********** LISTENER **********/
server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});
