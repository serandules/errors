var util = require('util');

var errors = {
    serverError: {status: 500, code: 'server-error', message: 'Internal server error'},
    unauthorized: {status: 401, code: 'unauthorized', message: 'Unauthorized'},
    conflict: {status: 409, code: 'conflict', message: 'Conflict'},
    unsupportedAuth: {status: 401, code: 'unsupported-auth', message: 'Unsupported authorization scheme'},
    notFound: {status: 404, code: 'not-found', message: 'Not found'},
    badRequest: {status: 400, code: 'bad-request', message: 'Bad request'},
    unsupportedMedia: {status: 415, code: 'unsupported-media', message: 'Unsupported media type'},
    unprocessableEntiy: {status: 422, code: 'unprocessable-entity', message: 'Unprocessable entity'}
};

Object.keys(errors).forEach(function (key) {
    module.exports[key] = function () {
        var error = errors[key];
        var args = Array.prototype.slice.call(arguments);
        if (!args[0]) {
            args[0] = error.message;
        }
        return {
            status: error.status,
            data: {
                code: error.code,
                message: util.format.apply(null, args)
            }
        };
    };
});