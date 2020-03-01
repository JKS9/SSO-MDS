const express = require('express')
const app = express()
const server = require('http').createServer(app)
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy

const routes = require('./routes/routes');
app.use('/', routes);

const config = require('./oauth.js');
passport.use('google', new GoogleStrategy({
    clientID : config.google.clientid,
    clientSecret : config.google.clientSecret,
    callbackURL : config.google.callbackUrl,
    profileFields : ['id','emails','name']
    },
    function (accesToken, refreshToken, profile, done) {
        process.nextTick(function(){
            return done(JSON.stringify(profile))
        })
    }
));


server.listen(3000, function () {
    console.log('Exemple app listening on port 3000')
})