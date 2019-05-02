// Include the fs npm package to read files
var fs = require("fs");

// Include the concertThis package
const concertThis = require("./concertThis.js");

// Include the spotifyThisSong package
const spotifyThisSong = require("./spotifyThisSong.js");

// Include the movieThis package
const movieThis = require("./movieThis.js");

/**
 * Reads in random.txt and performs the command with the search item
 *     random.txt must be formatted: {command},{search item}
 */
function doWhatItSays() {
    // Read random.txt
    fs.readFile("random.txt", "utf8", function (err, data) {
        // If there is an error, return it
        if (err) {
            return console.log(err);
        }

        // Split the command and input
        data = data.split(",");

        // Decide which command will run
        switch (data[0]) {
            case "concert-this":
                concertThis(data[1]);
                break;

            case "spotify-this-song":
                spotifyThisSong(data[1]);
                break;

            case "movie-this":
                movieThis(data[1]);
                break;

            default:
                console.log("\nError: First item in the file is missing or an incorrect command.");
                console.log("    Please use one of the following commands:");
                console.log("        concert-this");
                console.log("        spotify-this-song");
                console.log("        movie-this\n");
        }
    });
}

// Export the doWhatItSays function so that it can be included in other files
module.exports = doWhatItSays;