var util = require('util');
var mongoose = require('./mongoose');

var Error = function (o) {
    this.status = o.status;
    this.data = o.data;
};

module.exports.Error = Error;

module.exports.mongoose = mongoose;

var errors = {
    serverError: {status: 500, code: 'server-error', message: 'Internal server error'},
    unauthorized: {status: 401, code: 'unauthorized', message: 'Unauthorized'},
    forbidden: {status: 403, code: 'forbidden', message: 'Forbidden'},
    conflict: {status: 409, code: 'conflict', message: 'Conflict'},
    unsupportedAuth: {status: 401, code: 'unsupported-auth', message: 'Unsupported authorization scheme'},
    notFound: {status: 404, code: 'not-found', message: 'Not found'},
    badRequest: {status: 400, code: 'bad-request', message: 'Bad request'},
    payloadTooLarge: {status: 415, code: 'payload-too-large', message: 'Payload too large'},
    unsupportedMedia: {status: 415, code: 'unsupported-media', message: 'Unsupported media type'},
    unprocessableEntity: {status: 422, code: 'unprocessable-entity', message: 'Unprocessable entity'},
    tooManyRequests: {status: 429, code: 'too-many-requests', message: 'Too many requests'},
    serviceUnavailable: {status: 503, code: 'service-unavailable', message: 'Service unavailable'}
};

Object.keys(errors).forEach(function (key) {
    module.exports[key] = function (message, data) {
        var error = errors[key];
        return new Error({
            status: error.status,
            data: {
                code: error.code,
                message: message || error.message,
                data: data || {}
            }
        });
    };
});
