var controller = require('../controller.js');

exports.getHome = function (req, res, next) {
    res.send(userController.successfulResponse('home'));
    next();
};