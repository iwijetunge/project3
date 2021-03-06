const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
var mongoose = require("mongoose");
const db = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//mongoose.connect("mongodb://localhost/animaltracks", { useNewUrlParser: true });

mongoose.connect("mongodb://iwijetunge:nagano1s@ds019829.mlab.com:19829/heroku_qmgsg6qc", { useNewUrlParser: true });

mongoose.set('useCreateIndex', true);
mongoose.connection.on('connected', function(){console.log("Mongoose Connected")});

const seeds     = require('./sightingSeeds.json');

seeds.map(sighting => db.Sighting.create(sighting));


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(require('./routes'));
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
