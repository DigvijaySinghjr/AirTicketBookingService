class AppError extends Error {
    constructor(
        name,
        message,
        explaination,
        statusCode
    ){
        super();
        this.name = name;
        this.messasge = message;
        this.explaination = explaination;
        this.statusCode = statusCode;
    }
}

module.exports = AppError;