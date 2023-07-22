
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'Please provide first name'],
        match: /^[\p{L}\s]+$/u,
        minlength: 2
    },
    lastname: {
        type: String,
        required: [true, 'Please provide last name'],
        minlength: 2,
        match: /^[\p{L}\s]+$/u
    },
    email: {
        type: String
    },
    authType: {
        type: String,
        enum: ['local', 'google', 'facebook'],
        default: 'local'
    },
    password: {
        type: String,
        minlength: 6
    },
})

UserSchema.pre('save', async function () {
    if (this.authType === 'local') {
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
    }
})

UserSchema.methods.createJWT = function () {
    return jwt.sign({
        userid: this._id,
        email: this.email
    }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME })
}

UserSchema.methods.comparePassword = async function (condidatePassword) {
    const isMatch = await bcrypt.compare(condidatePassword, this.password)
    return isMatch
}

module.exports = mongoose.model('User', UserSchema)
