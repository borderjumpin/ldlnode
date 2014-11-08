exports.successfulResponse = function(response) {
    return {success: true, response: response}
};

exports.failedResponse = function(error) {
    return {success: false, response: error}
};
