// elements
var returnButtonEl = $("#returnButton");
var historyListEl = $("#historyList");

// load from history in localstorage and display
var displayHistory = function (parentEl) {
    // load from history
    var history = load();
    // for testing puposes:
    // var history = [{ number: 1, date: "08/08/2000" }, { number: 1, date: "08/08/2000" }, { number: 1, date: "08/08/2000" }];

    // loop through history and display on page
    history.forEach(h => {
        parentEl.append(
            $("<li>")
                .addClass("p-2 m-3 border-4 border-gray-700")
                .text(h.date + ": RFC " + h.number))
    });
};

// button handler to return to start page
// todo....

// main function
var main = function () {
    // register handlers
    // todo....
    console.log("todo: main");
    // function calls to load/display conetent
    displayHistory(historyListEl);
};

// start
main();