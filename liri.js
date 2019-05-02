// Include the dotenv npm package and run the config function
require("dotenv").config();

// // Include the keys package
// const keys = require("./keys.js");

// Include the concertThis package
const concertThis = require("./concertThis.js");

// Include the spotifyThisSong package
const spotifyThisSong = require("./spotifyThisSong.js");

// // Include the node-spotify-api npm package
// const Spotify = require("node-spotify-api");

// // Create Spotify object and save it into a variable
// const spotify = new Spotify(keys.spotify);

let command = process.argv[2];

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
        console.log("\nError: Missing or incorrect command.");
        console.log("    Please use one of the following commands:");
        console.log("        concert-this");
        console.log("        spotify-this-song");
        console.log("        movie-this");
        console.log("        do-what-it-says\n");
}

// function concertThis() {
//     console.log("In concertThis");
// }

// function spotifyThisSong() {
//     console.log("In spotifyThisSong");
// }

// function movieThis() {
//     console.log("In movieThis");
// }

// function doWhatItSays() {
//     console.log("In doWhatItSays");
// }