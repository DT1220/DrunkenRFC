// save :: rfcObj : { number: Int, title: string, abstract: string } -> undefined
var save = function(rfcObj) {
    var myObject = [];
    var myJSON = JSON.stringify(myObject);
   // localStorage = 
    console.log(myObject);
};


// load :: () -> [{rfcObj}]
var load = function() {
    console.log("  ");
    return [load];


       function load() {
        if (localStorage.getItem("Load") != null) {
            var LOAD = JSON.parse(localStorage.getItem("Load"));
    
            for (var i = 0; i < LOAD.length; i++) {
                var LOAD = LOAD[i];
                newLOADItem(LOAD.task, LOAD.completed);
                load();
            }
        }
    } 
};

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        // Save text in local storage
        localStorage.setItem(save);
    })
}




/* var timeEntries = []; // initialize list of log entries

getTimeEntries(); // See if there are entries in localstorage and load them

$(".saveBtn").click(saveClick); // Set event handler for all save buttons

const timeEntriesName = "workDaySchedulerList"; // name used for localstorage
const firstEntry = 9; // first displayed time block, relative to hourMap (9AM)
const lastEntry = 17; // last display time block, relative to hourMap (5PM)
const hourMap = ["12AM","1AM","2AM","3AM","4AM","5AM","6AM","7AM","8AM","9AM","10AM","11AM","12PM",
                "1PM","2PM","3PM","4PM","5PM","6PM","7PM","8PM","9PM","10PM","11PM"]; // map of military hours

// onClick event for all buttons
function saveClick() {
    var hourBlock = $(this).val(); // get which hour block we're in from button's value
    var entryFound = false;
    var newEntryIndex = timeEntries.length; // where in the timeEntries array the new object goes
    // create new timeEntries object
    var newEntry = {day: currentDate, time: hourBlock, text: $("#text"+hourBlock).val()}; 


        // check the timeEntries array to see if there is already an entry for this hour
    for (let i=0; i<timeEntries.length; i++) {
        if (timeEntries[i].day == currentDate) {
            if (timeEntries[i].time == hourBlock) {
                timeEntries[i].text = newEntry.text; // If entry already exists, just update text
                entryFound = true; // entry already exists
                break;
            }
            // entry does not exist - insert it when you reach the first hour that is greter
            else if (timeGreater(timeEntries[i].time, hourBlock)) {
                newEntryIndex = i;
                break;
            }
        }
        // no entries exist for current day - insert when you reach first day that is greater
        else if (timeEntries[i].day > currentDate) {
            newEntryIndex = i;
            break;
        }
    }

    // If the entry didn't already exist, add it to the array in the appropriate place
    if (!entryFound) {
        timeEntries.splice(newEntryIndex, 0, newEntry);
    }

    // store in local storage
    localStorage.setItem(timeEntriesName, JSON.stringify(timeEntries));
}
    */)