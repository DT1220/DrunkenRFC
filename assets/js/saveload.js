

// load up saved history from localstorage
var load = function () {
    var history = localStorage.getItem("rfchistory");
    return JSON.parse(history) || [];
};
// save and object to localstorage
var save = function (item) {
    var history = load();
    var x = [item].concat(history);
    localStorage.setItem("rfchistory", JSON.stringify(x));



    // load() the currently saved values (that is an array) and assign it to a variable.
    // make a new array where the new item is in front of the elements of the loaded array (hint: https://stackoverflow.com/questions/3975170/javascript-how-to-join-combine-two-arrays-to-concatenate-into-one-array)
    // convert that to JSON
    // finally store that to localstorage (and return nothing)
};