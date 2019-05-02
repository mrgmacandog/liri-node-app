// Include the axios npm package
const axios = require("axios");

// Include the moment npm package
const moment = require("moment");

/**
 * Looks up events for artist if an artist is given
 */
function concertThis() {
    // If user includes artist name
    if (process.argv.length > 3) {
        getEvents();
    } else {  // If user doesn't inlclude artist name
        console.log("\nError: Please include an artist name.\n")
    }
};

/**
 * Requests events from the API for an artist
 */
function getEvents() {
    // Print the artist name
    console.log(`\n${process.argv.slice(3).join(" ").toUpperCase()}`);

    // Save the artist name spaced by "%20"
    let artist = process.argv.slice(3).join("%20");

    // URL for API endpoint with the artist name
    let queryUrl = `https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`;

    // Create request with axios with URL to the API
    axios.get(queryUrl)
        // Once successful
        .then(function (response) {
            // If there are events
            if (response.data.length > 0) {
                // Print event info
                printEvents(response.data);
            } else {  // No events
                console.log("\nNo events...\n")
            }
        })
        // If there is an error
        .catch(function (error) {
            console.log(error);
        });
}

/**
 * Prints event info including venue name, location, and time from an array of event objects
 * @param {Object[]} events 
 */
function printEvents(events) {
    // Iterate through all events
    for (let i = 0; i < events.length; i++) {
        // Save the current event object
        let event = events[i];

        // Print venue name
        console.log(`\n${event.venue.name}`);

        // Print event city, region, and country
        console.log(`${event.venue.city}, ${event.venue.region} ${event.venue.country}`);

        // Save event time as a moment object and print it as "MM/DD/YYYY h:mm A"
        let momentEventTime = moment(event.datetime, "YYYY-MM-DDTHH:mm:ss");
        let momentEventTimeFormatted = momentEventTime.format("MM/DD/YYYY h:mm A");
        console.log(momentEventTimeFormatted);
    }
    console.log();
}

// Export the concertThis function so that it can be included in other files
module.exports = concertThis;