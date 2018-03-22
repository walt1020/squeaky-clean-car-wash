const passport = require('../../config/passport');
const express  = require('express');
const User = require('../../models/users');
const bcrypt = require('bcrypt');
const authenticate = require('../../middleware/authentication');

const router = express.Router();
router.get('/test',(req,res)=>{
    return res.sendStatus(200);
});

router.get('/logintest', authenticate, (req,res)=>{
    return res.sendStatus(200);
});

router.post('/login', passport.authenticate("local"), (req, res)=>{
    return res.send('Successfully logged in.');
});

router.post('/logout', (req, res)=>{
    req.logout();
    console.log('logged out');
    return res.send('Successfully logged out.');
});

router.post('/register', (req, res)=>{
    if (!req.body) return res.sendStatus(400);
    bcrypt.hash(req.body.password, 10, (err, hash)=>{
        User.create({'username':req.body.username,'password':hash}, (err,u)=>{
            if(err){
                return res.sendStatus(400);
            }
            else{
                req.login(u, (err)=>{
                    if(err){
                        return res.sendStatus(400);
                    }
                    else{
                        console.log("success");
                        return res.sendStatus(200);
                    }
                });
            }
        })
    });
});

module.exports = router;
