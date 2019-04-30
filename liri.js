// Initialize dotenv library
require("dotenv").config();

// Save keys into a variable
var keys = require("./keys.js");

// Save Spotify object into a variable
var spotify = new Spotify(keys.spotify);