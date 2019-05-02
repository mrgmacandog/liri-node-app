// Include the axios npm package
const axios = require("axios");


const moment = require("moment");
// moment().format();

// Function 
function concertThis() {
    // console.log("In concertThis.js")

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
    // console.log(queryUrl);

    // Create request with axios with URL to the API
    axios.get(queryUrl)
        .then(function (response) {
            console.log(JSON.stringify(response.data, null, 4));

            let events = response.data;

            for (let i = 0; i < events.length; i++) {
                let event = events[i];

                console.log();
                console.log(event.venue.name);
                console.log(`${event.venue.city}, ${event.venue.region} ${event.venue.country}`)
                // console.log(event.datetime);
                let momentEventTime = moment(event.datetime, "YYYY-MM-DDTHH:mm:ss");
                let momentEventTimeFormatted = momentEventTime.format("MM/DD/YYYY h:mm a");
                console.log(momentEventTimeFormatted);

            }
        })
        .catch(function (error) {
            console.log(error);
        });
};

// Export the concertThis function so that it can be included in other files
module.exports = concertThis;