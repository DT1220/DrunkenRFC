// TODO: flesh out the function below to dyn create elements under parentEl, 
// the function should return the promise chain built off your fetch call
//displayGithub :: (parentEl : Jquery-Element) && (rfcNumber: Int) -> Promise

// what we want to see is a list of anyone's repo that might be related to the rfc,
// like what you see when you go to: https://github.com/search?q=rfc4122 (read github api docs to figure what the appropriate api call is)
const GITHUBURL = "https://api.github.com/users/DT1220/repos";

// see you are figuring out async/await keywords, 
// this gets overriden by in line 32 so don't need this.
async function getUserRepos(){
    const response = await fetch(GITHUBURL);
    const displayGithub = await response.json();
    return displayGithub;
}

// fetch returns a promise, dont really need this.
var response = fetch ("https://api.github.com/users/DT1220/repos");
console.log(response);

// see you are figuring out the behavior of promises
fetch ("https://api.github.com/users/DT1220/repos").then(function(response){
    console.log("inside",response);
});
console.log("outside");

// let's not use jquery ajax stuff
$.ajax("https://api.github.com/users/DT1220/repos").done(function(data){
    console.log(data);
});

// this one has the right start.
// after you pick out the info you need out of data and return that,
// add one more .then(function(info){ code to create elements and add to page })
// and that will be able to take the info from your api call and add elements to the page.
// (you'll also need to replace the could in displayGithub function with this code)
var getUserRepos = function(user){
    var apiURL = "https://api.github.com/users/" + user + "/repos";

    fetch(apiURL).then(function(response){
        response.json().then(function(data){
            console.log(data);
        });
    });
};

var displayGithub = function (parentEl, rfcNumber) {
    // yea just delete the code in here and move the code you started in getUserRepos inside of here
    // parentEL will be the jquery element you will be adding elements to (it is already supplied when this function gets called in main-start.js)
    // rfcNumber will be just an integer (like 4122) that you'll use in your fetch call (it is already supplied when this functiong ets called in main-start.js)
    console.log("todo: display Github");
    // don't return this dummy promise...
    function listrepos(username, listelement){
        return new Promise((resolve, reject) => {
            repocount = 0;
            repourl = "https://api.github.com/users/" + username + "/repo"
            fetch(apiurl)

            
        });

    }


};

//return todayRFC.number;