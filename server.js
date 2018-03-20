const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./models/all-models');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const models = require("./models/all-models");

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

module.exports = app;
