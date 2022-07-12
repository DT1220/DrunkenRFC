// elements
var rfcEl = $("#rfcContainer");
var wikipediaEl = $("#wikipediaContainer");
var githubEl = $("#githubContainer");
var historyButtonEl = $("#historyButton");
var mainEl = $("main");


// button handler function 
// define the handler function
var buttonHandler = function() {
    
    location.assign("./history.html"); 
};

historyButtonEl.on("click", buttonHandler);

var displayError = function (parentEl, message) {
    parentEl.empty();
    parentEl.append(
        $("<div>")
            .addClass("h-full bg-rose-500 flex items-center justify-center")
            .text("Error: " + message));
};

// generic error handling
var tryDisplaying = async function (displayFunction, parentEl, rfcNumber) {
    try {
        await displayFunction(parentEl, rfcNumber);
    }
    catch (error) {
        console.log("DISPLAY ERROR in " + displayFunction.name + ": ", error);
        displayError(parentEl, "Cannot Display");
    }
};

// main
var main = async function () {
    // register handlers
    // todo for button....

    try {
        // get random rfc number
        var rfcNumber = await getRFC();

        // display info
        tryDisplaying(displayRFC, rfcEl, rfcNumber);
        tryDisplaying(displayWikipedia, wikipediaEl, rfcNumber);
        tryDisplaying(displayGithub, githubEl, rfcNumber);
    }
    catch (error) {
        console.log("SETUP ERROR: ", error);
        displayError(mainEl, "Cannot Get RFC Information");
    }
};

// start
main();