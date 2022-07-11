// TODO: flesh out the function below to dyn create elements under parentEl, 
// the function should return the promise chain built off your fetch call
//displayGithub :: (parentEl : Jquery-Element) && (rfcNumber: Int) -> Promise

const GITHUBURL = "https://api.github.com/users/DT1220/repos";

async function getUserRepos(){
    const response = await fetch(GITHUBURL);
    const displayGithub = await response.json();
    return displayGithub;
}
var response = fetch ("https://api.github.com/users/DT1220/repos");
console.log(response);

fetch ("https://api.github.com/users/DT1220/repos").then(function(response){
    console.log("inside",response);
});
console.log("outside");

$.ajax("https://api.github.com/users/DT1220/repos").done(function(data){
    console.log(data);
});

var getUserRepos = function(user){
    var apiURL = "https://api.github.com/users/" + user + "/repos";

    fetch(apiURL).then(function(response){
        response.json().then(function(data){
            console.log(data);
        });
    });
};

var displayGithub = function (parentEl, rfcNumber) {
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