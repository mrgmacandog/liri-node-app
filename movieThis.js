// Include the axios npm package
const axios = require("axios");

/**
 * Looks up info for a movie
 */
function movieThis() {
    console.log("In movieThis.js");
}

// Export the movieThis function so that it can be included in other files
module.exports = movieThis;