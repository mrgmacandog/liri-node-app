// Include the axios npm package
const axios = require("axios");

// Include the moment npm package
const moment = require("moment");

/**
 * Looks up events for the passed in artist
 * @param {string} artist 
 */
function concertThis(artist) {
    // If user includes artist name
    if (artist !== "") {
        getEvents(artist);
    } else {  // If user doesn't inlclude artist name
        console.log("\nError: Please include an artist name.\n")
    }
};

/**
 * Requests events from the API for the passed in artist
 * @param {string} artist 
 */
function getEvents(artist) {
    // Print the artist name
    console.log(`\n${artist.toUpperCase()}`);

    // Save the artist name spaced by "%20"
    let artistFormatted = artist.replace(" ", "%20");

    // URL for API endpoint with the artist name
    let queryUrl = `https://rest.bandsintown.com/artists/${artistFormatted}/events?app_id=codingbootcamp`;

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
        console.log(`\nVenue:    ${event.venue.name}`);

        // If there is no region
        if (event.venue.region === "") {
            // Print event city and country
            console.log(`Location: ${event.venue.city}, ${event.venue.country}`);
        } else {  // If there is a region
            // Print event city, region, and country
            console.log(`Location: ${event.venue.city}, ${event.venue.region} ${event.venue.country}`);
        }

        // Save event data and time as a moment object and print it
        let momentEvent = moment(event.datetime, "YYYY-MM-DDTHH:mm:ss");
        let momentEventDate = momentEvent.format("MM/DD/YYYY");
        let momentEventTime = momentEvent.format("h:mm A");
        console.log(`Date:     ${momentEventDate}`);
        console.log(`Time:     ${momentEventTime}`);
    }
    console.log();
}

// Export the concertThis function so that it can be included in other files
module.exports = concertThis;