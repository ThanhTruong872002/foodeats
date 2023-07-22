
require('dotenv').config()
const express = require('express')
const router = express.Router()
const passport = require('../middleware/passport')

const {
    register,
    login,
    registerGoogle,
    loginGoogle,
    registerFacebook,
    loginFacebook
} = require('../controllers/auth')

router.route('/register').post(register)
router.route('/register/google')
    .post(passport.authenticate('google-plus-token', { session: false }), registerGoogle)
router.route('/register/facebook')
    .post(passport.authenticate('facebook-token', { session: false }), registerFacebook)

router.route('/login').post(login)
router.route('/login/google')
    .post(passport.authenticate('google-plus-token', { session: false }), loginGoogle)
router.route('/login/facebook')
    .post(passport.authenticate('facebook-token', { session: false }), loginFacebook)

module.exports = router
