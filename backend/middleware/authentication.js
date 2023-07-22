
const User = require('../models/User')
const { UnauthenticatedError } = require('../errors')
const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new UnauthenticatedError('Authentication invalid')
    }
    const token = authHeader.split(' ')[1]
    try {
        const { userid, username } = jwt.verify(token, process.env.JWT_SECRET)
        next()
    }
    catch (err) {
        throw new UnauthenticatedError('Authentication invalid')
    }

}

module.exports = auth
