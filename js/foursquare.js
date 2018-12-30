/* Foursquare api */
let clientID = "NNJPH2TSHWCDQM5T4KLADPREOKVVZZYA0BWL4FBEOGZ1WKTC";
let clientSecret = "JXX45EHZNRK31OPUBOHVTW4HDFNTESIJJ5LLTIHBWQ3IHCMY";
let url = "https://api.foursquare.com/v2/venues/search" +
    "?ll=52.0892494,4.2798414" +
    "&query=Omniversum" +
    "&client_id=" + clientID +
    "&client_secret=" + clientSecret +
    "&v=20181229";

// Search for Venues
$.ajax({
    type: "GET",
    dataType: "json",
    cache: false,
    url: url,
    success: function (result) {
        console.log(result);
        let venueID = result.response.venues[0].id;
        getVenueDetails(venueID)
    },
    error: function(xhr, status, error) {
        console.log(xhr);
        console.log(status);
        console.log(error);
        alert("Unable to complete the Fourqure API request for \"Search for Venues\"!")
    }
})

// Get Details of Venue
function getVenueDetails(venueID) {
    let newURL = "https://api.foursquare.com/v2/venues/" + venueID +
    "?client_id=" + clientID +
    "&client_secret=" + clientSecret +
    "&v=20181229";
    $.ajax({
        type: "GET",
        dataType: "json",
        cache: false,
        url: newURL,
        success: function(result) {
            console.log(result);
        },
        error: function(xhr, status, error) {
            console.log(xhr);
            console.log(status);
            console.log(error);
            alert("Unable to complete the Fourqure API request for \"Details of Venue\"!")
        }
    })
}