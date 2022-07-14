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
                .addClass("p-2 m-3 border-4 border-gray-700 cursor-pointer hover:bg-slate-400")
                .attr("data-rfc", h.number)
                .text(h.date + ": RFC " + h.number))
    });
};

// button handler to return to start page
var returnButtonHandler = function () {
    location.assign("./index.html")
};

// handler for old rfc entries
var oldRFCHandler = function(event) {
    var oldRFC = event.target.getAttribute("data-rfc");
    location.assign("./index.html?rfc=" + oldRFC);
};

// main function
var main = function () {
    // register handlers
    returnButtonEl.on("click", returnButtonHandler);
    historyListEl.on("click", "li", oldRFCHandler);
    // function calls to load/display conetent
    displayHistory(historyListEl);
};

// start
main();