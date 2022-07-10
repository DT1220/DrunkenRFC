// elements
var rfcEl = $("#rfcContainer");
var wikipediaEl = $("#wikipediaContainer");
var githubEl = $("#githubContainer");
var historyButtonEl = $("#historyButton");


// button handler function 
// todo....

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
        parentEl.empty();
        parentEl.append(
            $("<div>")
                .addClass("h-full bg-rose-500 flex items-center justify-center")
                .text("Error: Cannot Display"));
    }
};

// main
var main = async function () {
    // register handlers
    // todo for button....

    // get random rfc number
        var rfcNumber = await getRFC();

    // display info
    tryDisplaying(displayRFC, rfcEl, rfcNumber);
    tryDisplaying(displayWikipedia, wikipediaEl, rfcNumber);
    tryDisplaying(displayGithub, githubEl, rfcNumber);
};

// start
main();