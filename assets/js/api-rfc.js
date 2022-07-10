var datatracker = "https://datatracker.ietf.org"

var getRFC = async function () {
    var history = load();
    var todayRFC = history[0];
    var today = new Date();
    var todayFormated = today.getMonth() + "/" + today.getDay() + "/" + today.getFullYear();

    var rfcListUrl = function (offset) {
        return datatracker + "/api/v1/doc/docevent/" +
            "?format=" + "json" +
            "&type=" + "published_rfc" +
            "&order_by=" + "id" +
            "&limit=" + 1 +
            "&offset=" + offset;
    };

    var rfcDocUrl = function (docPath) {
        return datatracker + docPath;
    }

    // if we already have an RFC for today, return that, otherwise go get one.
    if (todayRFC && todayFormated === todayRFC.date) {
        return todayRFC.number;
    }
    else {
        var randomRfcIndex = await fetch(rfcListUrl(0))
            // get json
            .then(response => {
                return response.json();
            })
            // extract info from json
            .then(json => {
                return json.meta.total_count;
            })
            // pick a random index 
            .then(rfcLength => {
                // build a set of all the RFC's indexes
                var rfcSet = new Set([...Array(rfcLength).keys()]);
                // remove used indexes (so we don't "add" the rfc back to the deck of rfcs)
                history.forEach(x => rfcSet.delete(x.index));
                // pick a random index for the Set of RFC Indexes...
                var randomIndex = Math.floor(Math.random() * rfcSet.size)
                // get the random rfc index
                var randomRfcIndex = [...rfcSet][randomIndex];
                return randomRfcIndex;
            });

        // lookup document number (rfc number isn't always in the document path)
        var rfcDocument = await fetch(rfcListUrl(randomRfcIndex))
            .then(response => {
                return response.json();
            })
            .then(json => {
                return json.objects[0].doc;
            });

        var rfcNumber = await fetch(rfcDocUrl(rfcDocument))
            .then(response => {
                return response.json();
            })
            .then(json => {
                return parseInt(json.rfc);
            });

        // save the rfc information for today
        save({
            number: rfcNumber,
            index: randomRfcIndex,
            date: todayFormated
        });

        return rfcNumber;
    };
};


// TODO: flesh out the function below to dyn create elements under parentEl, 
// the function should return the promise chain built off your fetch call
// displayGithub :: (parentEl : Jquery-Element) && (rfcNumber: Int) -> Promise
var displayRFC = function (parentEl, rfcNumber) {
    console.log("todo: displayRFC");
    // don't return this dummy promise...
    return new Promise((resolve, reject) => {"dummy"});
};