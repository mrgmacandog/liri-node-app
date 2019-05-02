// Include the fs npm package to read files
var fs = require("fs");

// Include the concertThis package
const concertThis = require("./concertThis.js");

// Include the spotifyThisSong package
const spotifyThisSong = require("./spotifyThisSong.js");

// Include the movieThis package
const movieThis = require("./movieThis.js");

/**
 * 
 */
function doWhatItSays() {
    // Read random.txt
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            return console.log(err);
        }

        // Split the command and input
        data = data.split(",");

        console.log(data);

        // Decide which command will run
        switch (data[0]) {
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
    });
}

// Export the doWhatItSays function so that it can be included in other files
module.exports = doWhatItSays;