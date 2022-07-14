var datatracker = "https://datatracker.ietf.org"

var getRFC = async function () {
    var history = load();
    var todayRFC = history[0];
    var today = new Date();
    var todayFormated = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();

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
    };

    var paramRFC = new URLSearchParams(location.search);
    var paramRFCnumber = parseInt(paramRFC.get("rfc"));

    // if there is an rfc param, use that
    if (paramRFCnumber && todayRFC && todayFormated === todayRFC.date) {
        console.log('here');
        return paramRFCnumber;
    }
    // if there is an rfc param, but it is a new day, reload the page to clear out the param and continue
    else if (paramRFCnumber && todayRFC && todayFormated !== todayRFC.date) {
        location.assign("./index.html");
    }
    // if we already have an RFC for today, return that, otherwise go get one.
    else if (todayRFC && todayFormated === todayRFC.date) {
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


var displayRFC = async function (parentEl, rfcNumber) {
    var rfcDataUrl = function (rfcNumber) {
        return datatracker + "/doc/rfc" + rfcNumber + "/doc.json"
    };
    var rfcPageUrl = function (rfcNumber) {
        return "https://rfc-editor.org/rfc/rfc" + rfcNumber + ".html";
    };

    var rfcDisplay = fetch(rfcDataUrl(rfcNumber))
        .then(response => {
            return response.json();
        })
        .then(json => {
            return {
                number: rfcNumber,
                title: json.title,
                abstract: json.abstract,
                url: rfcPageUrl(rfcNumber)
            }
        }).then(rfcData => {
            // elements
            var rfcContainerEl = $("<div>")
                .addClass("h-full flex flex-col group cursor-pointer");
            var rfcHeaderEl = $("<h2>")
                .addClass("bg-slate-500 p-2 text-center text-white group-hover:bg-slate-600")
                .text("RFC " + rfcData.number);
            var rfcContentEl = $("<div>")
                .addClass("h-full group-hover:bg-slate-400");
            var rfcTitleEl = $("<h3>")
                .addClass("text-center p-2 font-bold")
                .text(rfcData.title);
            var rfcAbstractEl = $("<p>")
                .addClass("text-center px-3 pb-2")
                .text(rfcData.abstract);

            // add handler
            rfcContainerEl.on("click", () => {
                window.open(rfcData.url, "_blank")
            })

            // add to parents
            rfcContentEl.append(rfcTitleEl, rfcAbstractEl);
            rfcContainerEl.append(rfcHeaderEl, rfcContentEl);
            parentEl.empty();
            parentEl.append(rfcContainerEl);
        })

    return rfcDisplay;
};