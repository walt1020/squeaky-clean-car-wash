const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require('../models/users');
var bcrypt = require('bcrypt');

passport.use(new LocalStrategy(function(username, password, done) {
    // When a user tries to sign in this code runs
    User.findOne({'username': username}, (err, user)=>{
        if(err){
            return done(null, false, {
                message: "Incorrect email."
            });
        }
        else{
            bcrypt.compare(password, user.password, function(err, res) {
                if(res){
                    return done(null, user);
                }
                else{
                    return done(null, false, {
                        message: "Incorrect password."
                    });
                }
            });
        }
    });
}));
  
passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

module.exports = passport;