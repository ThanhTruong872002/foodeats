
const { StatusCodes } = require('http-status-codes')

const errorHandlerMiddleWare = (err, req, res, next) => {
    let customError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something was wrong, please try later'
    }
    console.log(err.name)
    console.log(err.code)
    if (err.name === 'ValidationError') {
        customError.msg = Object.values(err.errors)
            .map((item) => item.message)
            .join(', ')
        customError.statusCode = StatusCodes.BAD_REQUEST
    }
    if (err.code && err.code === 11000) {
        customError.msg = `Duplicate value entered for ${Object.keys(err.keyValue)} field, please choose another value`
        customError.statusCode = StatusCodes.BAD_REQUEST
    }
    return res.status(customError.statusCode).json({ msg: customError.msg })
}

module.exports = errorHandlerMiddleWare
