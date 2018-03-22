//Imports
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const db = require('./models/all-models');

//Import passport configuration
const passport = require('./config/passport');

//Setting for switching ports
const PORT = process.env.PORT || 3001;

//Initialize application
const app = express();
//Initialize database handler

// mongoose.connect('mongodb://localhost/merntemplate');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: "GUNDAM", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


const routes = require("./routes/api/index.js");
app.use("/api", routes);


// Serve up static assets for production
if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });
}

app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});

