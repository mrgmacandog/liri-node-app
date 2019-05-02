// Include the axios npm package
const axios = require("axios");

/**
 * Looks up info for a movie
 */
function movieThis() {
    // Initialize movie to default "Mr. Nobody"
    let movie = "Mr.%20Nobody,";
    
    // If the user inputted a movie name
    if (process.argv.length > 3) {
        // Change movie to the input movie name
        movie = process.argv.slice(3).join("%20");
    }

    // Get info for the movie
    getMovieInfo(movie);
}

/**
 * Get movie info from the the given movie name string
 * @param {string} movie 
 */
function getMovieInfo(movie) {
    // OMDB API endpoint URL
    let queryUrl = `http://www.omdbapi.com/?apikey=trilogy&t=${movie}`

    // Request using URL
    axios.get(queryUrl)
        // On success
        .then(function (response) {
            console.log(JSON.stringify(response.data, null, 2));
        })
        // If there's an error
        .catch(function (error) {
            console.log(error);
        })
}

// Export the movieThis function so that it can be included in other files
module.exports = movieThis;