// Include the dotenv npm package and run the config function
require("dotenv").config();

// Include the concertThis package
const concertThis = require("./concertThis.js");

// Include the spotifyThisSong package
const spotifyThisSong = require("./spotifyThisSong.js");

// Include the movieThis package
const movieThis = require("./movieThis.js");

// Include the doWhatItSays package
const doWhatItSays = require("./doWhatItSays.js");

let command = process.argv[2];

let searchItem = process.argv.slice(3).join(" ");

// Decide which command will run
switch (command) {
    case "concert-this":
        concertThis(searchItem);
        break;

    case "spotify-this-song":
        spotifyThisSong(searchItem);
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