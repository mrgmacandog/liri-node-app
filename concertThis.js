// Include the axios npm package
const axios = require("axios");

// Function 
function concertThis() {
    console.log("In concertThis.js")

    // Save the fourth value in the array as the artist
    let artist = process.argv[3];

    // If there are is a space in the artist name, loop through the rest of the names
    for (let i = 4; i < process.argv.length; i++) {
        // Adds a "%20" as the space
        artist += `%20${ process.argv[i]}`;
    }

    // URL for API endpoint with the artist name
    let queryUrl = `https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`;

    // TEMP LOGGING URL AND MANUALLY CHECKING IF LINK IS CORRECT
    console.log(queryUrl);
};

// Export the concertThis function so that it can be included in other files
module.exports = concertThis;