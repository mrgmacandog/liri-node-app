// Include the axios npm package
const axios = require("axios");

/**
 * Looks up info for the passed in movie
 * @param {string} movie
 */
function movieThis(movie) {
    // If the movie is blank
    if (movie === "") {
        // Set movie to Mr. Nobody
        movie = "Mr.%20Nobody,";
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
            // Print movie info
            printMovieInfo(response.data);
        })
        // If there's an error
        .catch(function (error) {
            console.log(error);
        })
}

/**
 * Using the movieInfo obect, prints:
 *     Title of the movie.
 *     Year the movie came out.
 *     Actors in the movie.
 *     IMDB Rating of the movie.
 *     Rotten Tomatoes Rating of the movie.
 *     Country where the movie was produced.
 *     Language of the movie.
 *     Plot of the movie.
 * @param {Object} movieInfo 
 */
function printMovieInfo(movieInfo) {
    // Print title
    console.log(`\nTitle:                  ${movieInfo.Title}`);

    // Print actors
    console.log(`Actors:                 ${movieInfo.Actors}`);

    // Print year filmed
    console.log(`Year:                   ${movieInfo.Year}`);

    // Iterate through all the differet rating sources
    for (let i = 0; i < movieInfo.Ratings.length; i++) {
        // Save current rating source
        let rating = movieInfo.Ratings[i];

        // Switch case between the rating sources
        switch (rating.Source) {
            // If IMDB
            case "Internet Movie Database":
                // Print IMDB rating
                console.log(`IMDB Rating:            ${rating.Value}`);
                break;
            // If Rotten Tomatoes
            case "Rotten Tomatoes":
                // Print Rotten Tomatoes rating
                console.log(`Rotten Tomatoes Rating: ${rating.Value}`);
        }
    }

    // Print country
    console.log(`Country:                ${movieInfo.Country}`);

    // Print language
    console.log(`Language:               ${movieInfo.Language}`);

    // Print plot
    console.log(`\nPlot: ${movieInfo.Plot}\n`);
}

// Export the movieThis function so that it can be included in other files
module.exports = movieThis;