// Initialize dotenv library
require("dotenv").config();

// Save keys into a variable
const keys = require("./keys.js");

// Save node-spotify-api libray into a variable
const Spotify = require('node-spotify-api');

// Create Spotify object and save it into a variable
const spotify = new Spotify(keys.spotify);

const command = process.argv[2];

// Decide which command will run
switch (command) {
    case "concert-this":
        concertThis();
        break;

    case "spotify-this-song":
        spotifyThisSong();
        break;

    case "movie-this":
        movieThis();
        break;

    case "do-what-it-says":
        doWhatItSays();
        break;
    default:
        console.log("\n------------------ERROR------------------");
        console.log("Please use one of the following commands:");
        console.log("    concert-this");
        console.log("    spotify-this-song");
        console.log("    movie-this");
        console.log("    do-what-it-says");
}

function concertThis() {
    console.log("In concertThis");
}

function spotifyThisSong() {
    console.log("In spotifyThisSong");
}

function movieThis() {
    console.log("In movieThis");
}

function doWhatItSays() {
    console.log("In doWhatItSays");
}