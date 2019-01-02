const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

const PORT = process.env.PORT || 3001;

//Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Static Assets

 app.use(express.static("client/build"));


//Routing, both API and view
app.use(routes);

//Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/portfolio", function(err) {
  if (err) throw err;
})

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});