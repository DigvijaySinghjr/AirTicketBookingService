const {} = require('http-status-codes');

class ServiceError extends Error {
    constructor(
        message = 'Something went wrong',
        expalination = 'Service layer error',
        statusCodes = StatusCodes.INTERNAL_SERVER_ERROR
    ){
        this.name = 'ServiceError';
        this.message = message;
        this.expalination = expalination;
        this.statusCodes = statusCodes;
    }
}

module.exports = ServiceError;