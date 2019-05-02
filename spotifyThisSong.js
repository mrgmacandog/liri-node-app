// Include the axios npm package
const axios = require("axios");

// Include the keys package
const keys = require("./keys.js");

// Include the node-spotify-api npm package
const Spotify = require("node-spotify-api");

// Create Spotify object and save it into a variable
const spotify = new Spotify(keys.spotify);

/**
 * Looks up information for a song
 */
function spotifyThisSong() {
    console.log("In spotifyThisSong.js");
    console.log(spotify);
}
// Export the spotifyThisSong function so that it can be included in other files
module.exports = spotifyThisSong;