var controller = require('../controller.js'),
    _ = require('underscore'),
    bcrypt = require('bcrypt'),
    user = require('./user');

exports.register = function (req, res, next) {
    bcrypt.hash(req.params.password, 10, function(err, hash) {
        res.send(userController.successfulResponse({hash: hash}));
    });
    next();
};

exports.login = function (req, res, next) {
    bcrypt.compare(req.params.password, 'hash', function(err, response) {
        if(err) {
            res.send(userController.failedResponse(err));
        }
        var now = new Date();
        res.send(userController.successfulResponse([response, now]));
    });
    next();
};
