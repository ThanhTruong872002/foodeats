
const passport = require('passport')
const GooglePlusTokenStrategy = require('passport-google-plus-token')
const FacebookTokenStrategy = require('passport-facebook-token')

passport.serializeUser((user, next) => {
    next(null, user);
});

passport.use(new GooglePlusTokenStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    passReqToCallback: true
}, function (req, accessToken, refreshToken, profile, next) {
    try {
        return next(null, profile)
    }
    catch (err) {
        return next(err)
    }
}))

passport.use(new FacebookTokenStrategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRECT,
    fbGraphVersion: 'v3.0'
}, function (accessToken, refreshToken, profile, done) {
    try {
        return done(null, profile)
    }
    catch (err) {
        return done(err)
    }
}))

module.exports = passport
