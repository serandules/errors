var util = require('util');

var errors = {
    serverError: {status: 500, code: 'server-error', message: 'Internal Server Error'},
    unauthorized: {status: 401, code: 'unauthorized', message: 'Unauthorized'},
    conflict: {status: 409, code: 'conflict', message: '%s Conflict'},
    unsupportedAuth: {status: 401, code: 'unsupported-auth', message: 'Unsupported Authorization Scheme'},
    notFound: {status: 404, code: 'not-found', message: '%s Not Found'},
    badRequest: {status: 400, code: 'bad-request', message: 'Bad Request'},
    unsupportedMedia: {status: 415, code: 'unsupported-media', message: 'Unsupported Media Type'},
    unprocessableEntiy: {status: 422, code: 'unprocessable-entity', message: 'Unprocessable Entity'}
};

Object.keys(errors).forEach(function (key) {
    module.exports[key] = function () {
        var error = errors[key];
        var args = Array.prototype.slice.call(arguments);
        var params = [error.message].concat(args);
        return {
            status: error.status,
            data: {
                code: error.code,
                message: util.format.apply(null, params)
            }
        };
    };
});