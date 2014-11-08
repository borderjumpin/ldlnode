var controller = require('../controller.js'),
    _ = require('underscore');

exports.getEvents = function (req, res, next) {
    if(_.isEmpty(req.params)) {
        res.send(userController.successfulResponse('events'));
    } else if (_.isNumber(Number(req.params.numEvets))) {
        res.send(userController.successfulResponse(req.params.numEvents + ' events'));
    }
    next();
};

exports.createEvent = function (req, res, next) {
    if(_.isEmpty(req.params)) {
        res.send(userController.successfulResponse('events'));
    } else if (_.isNumber(Number(req.params.numEvets))) {
        res.send(userController.successfulResponse(req.params.numEvents + ' events'));
    }
    next();
};