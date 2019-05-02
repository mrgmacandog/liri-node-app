// Include the axios npm package
const axios = require("axios");

// Include the keys package
const keys = require("./keys.js");

// Include the node-spotify-api npm package
const Spotify = require("node-spotify-api");

// Create Spotify object and save it into a variable
const spotify = new Spotify(keys.spotify);

/**
 * Looks up and prints information for the passed in song
 * @param {string} song 
 */
function spotifyThisSong(song) {
    // If the user includes a song name
    if (song !== "") {
        // Search the API for the song name given
        spotify.search({ type: 'track', query: song }, function (err, data) {
            // If there is an error, print it
            if (err) {
                return console.log('Error occurred: ' + err);
            } else {  // No error
                // Print song info
                printSongInfo(data.tracks.items[0]);
            }
        });
    } else {  // If the user doesn't include a song name
        // Get info from the API for The Sign by Ace of Base
        //     Track id for The Sign by Ace of Base: 0hrBpAOgrt8RXigk83LLNE
        spotify.request('https://api.spotify.com/v1/tracks/0hrBpAOgrt8RXigk83LLNE')
            // If successful
            .then(function (data) {
                // Print song info
                printSongInfo(data);
            })
            // If there's an error
            .catch(function (err) {
                console.error('Error occurred: ' + err);
            });
    }
}

/**
 * Prints song, album, and artist name(s). Also prints a link to a 30 second preview of the song
 * @param {Object} songInfo 
 */
function printSongInfo(songInfo) {
    // Print song name
    console.log(`\nSong:      ${songInfo.name}`);

    // Print album name
    console.log(`Album:     ${songInfo.album.name}`);

    // Print artist(s) names
    let artists = songInfo.artists[0].name;
    for (let i = 1; i < songInfo.artists.length; i++) {
        artists += `, ${songInfo.artists[i].name}`;
    }
    console.log(`Artist(s): ${artists}`);

    // Print song preview url
    console.log(`Preview:   ${songInfo.preview_url}\n`);
}

// Export the spotifyThisSong function so that it can be included in other files
module.exports = spotifyThisSong;