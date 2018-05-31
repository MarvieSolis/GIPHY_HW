// Variables
var topics = ["Iron man", "Captain America", "Spiderman", "Thor", "Black Panther", "Batman", "Superman", "Wonderwoman", "Aquaman", "Green Lantern"];
var currentTopic = "";
var limit = 10;

// Functions

// Generate initial buttons on page
function generateButtons() {
    $("#gifButtons").empty();
    for (var i = 0; i < topics.length; i++) {
        var gifButton = $("<button>");
        gifButton.attr("data-name", topics[i]);
        gifButton.text(topics[i]);
        gifButton.addClass("btn btn-dark");
        gifButton.addClass("topic");
        $("#gifButtons").append(gifButton);
    }
}

// Create new button from user entry
function newButton() {
    $("#submitButton").on("click", function () {
        var topic = $("#userEntry").val().trim();
        var check = topics.indexOf(topic);
        if (topic === "") {
            return false;
        }
        else if (check === -1) {
            topics.push(topic);
            generateButtons();
            $("#userEntry").val("");
            return false;
        }
        else if (check !== -1) {
            return false;
        }
    });
}


// Display related movies based on chosen topic
function displayMovies() {
    var queryURL = "http://www.omdbapi.com/?s=" + currentTopic + "&apikey=trilogy";
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .done(function (response) {
            console.log(response);
            $("#movies").empty();
            var results = response.Search;
            if (results === "") {
                alert("Sorry, no movies can be retrieved regarding this topic ):");
            }
            for (var i = 0; i < 5; i++) {

                var movie = $("<div style='float:left'</div>");
                $(movie).addClass("movieBox");

                var movieImage = $("<img>");
                $(movieImage).attr("src", results[i].Poster);
                $(movieImage).attr("height", "300px");
                $(movieImage).addClass("selectionMovie");
                $(movie).append(movieImage);

                var movieTitle = $("<p>").text(results[i].Title);
                movie.append(movieTitle);

                $("#movies").prepend(movie);
            }
        })
}


// Change amount of GIFs displayed
function changeLimit() {
    $("#limit10").on("click", function () {
        limit = 10;
        generateGifs2();
        return false;
    });

    $("#limit15").on("click", function () {
        limit = 15;
        generateGifs2();
        return false;
    });

    $("#limit20").on("click", function () {
        limit = 20;
        generateGifs2();
        return false;
    });
}


// Generate GIFS
function generateGifs() {
    var topic = $(this).attr("data-name");
    currentTopic = topic;
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=QLUSm2ZMGrc72Cc5OEDoaca1NuLZCb7v" + "&limit=" + limit;
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .done(function (response) {
            console.log(response);
            $("#gifDisplay").empty();
            $("#movies").empty();
            var results = response.data;
            if (results === "") {
                alert("Sorry, no GIFs can be retrieved regarding this topic ):");
            }
            for (var i = 0; i < results.length; i++) {

                var gif = $("<div style='float:left'</div>");
                $(gif).addClass("gifBox");

                var gifImage = $("<img>");
                $(gifImage).attr("src", results[i].images.fixed_height_small_still.url);
                $(gifImage).attr("data-still", results[i].images.fixed_height_small_still.url);
                $(gifImage).attr("data-animate", results[i].images.fixed_height_small.url);
                $(gifImage).attr("data-state", "data-still");
                $(gifImage).addClass("selection");
                $(gif).append(gifImage);

                var gifRating = $("<p>").text("Rating: " + results[i].rating);
                gif.append(gifRating);

                $("#gifDisplay").prepend(gif);
            }
        })
}

function generateGifs2() {
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + currentTopic + "&api_key=QLUSm2ZMGrc72Cc5OEDoaca1NuLZCb7v" + "&limit=" + limit;
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .done(function (response) {
            console.log(response);
            $("#gifDisplay").empty();
            $("#movies").empty();
            var results = response.data;
            if (results === "") {
                alert("Sorry, no GIFs can be retrieved regarding this topic ):");
            }
            for (var i = 0; i < results.length; i++) {

                var gif = $("<div style='float:left'</div>");
                $(gif).addClass("gifBox");

                var gifImage = $("<img>");
                $(gifImage).attr("src", results[i].images.fixed_height_small_still.url);
                $(gifImage).attr("data-still", results[i].images.fixed_height_small_still.url);
                $(gifImage).attr("data-animate", results[i].images.fixed_height_small.url);
                $(gifImage).attr("data-state", "data-still");
                $(gifImage).addClass("selection");
                $(gif).append(gifImage);

                var gifRating = $("<p>").text("Rating: " + results[i].rating);
                gif.append(gifRating);

                $("#gifDisplay").prepend(gif);
            }
        })
}


// Change GIF to animate or still
function changeState() {
    var currentState = $(this).attr("data-state");
    if (currentState === "data-still") {
        $(this).attr("src", $(this).data("animate"));
        $(this).attr("data-state", "data-animate");
    }
    else if (currentState === "data-animate") {
        $(this).attr("src", $(this).data("still"));
        $(this).attr("data-state", "data-still");
    }
}



// Function Calls
generateButtons();
generateGifs();
newButton();
changeLimit();


// On Click call functions
$(document).on("click", ".topic", generateGifs);

$(document).on("click", ".selection", changeState);

$("#movieButton").on("click", displayMovies);



