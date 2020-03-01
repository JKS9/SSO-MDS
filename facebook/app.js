
const express = require("express");
const app = express();
const server = require('http').createServer(app);
const passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

const config = require('./oauth.js');
passport.use('facebook', new FacebookStrategy({
    clientID        : config.facebook.clientid,
    clientSecret    : config.facebook.clientSecret,
    callbackURL     : config.facebook.callbackUrl,
    },

    function(access_token, refresh_token, profile, done) {
        process.nextTick(function() {
            return done(JSON.stringify(profile));
        });
    }
));


// Router
const routes = require('./routes/routes');
app.use('/', routes);


server.listen(3000, () => {
    console.log(`Listening to requests on http://localhost:3000`);
});