// Include the fs npm package to read files
var fs = require("fs");

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
    });
}

// Export the doWhatItSays function so that it can be included in other files
module.exports = doWhatItSays;