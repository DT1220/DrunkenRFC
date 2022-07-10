// TODO: flesh out the function below to dyn create elements under parentEl, 
// the function should return the promise chain built off your fetch call
// displayGithub :: (parentEl : Jquery-Element) && (rfcNumber: Int) -> Promise



//fetch https://api.github.com/users

const [username, setUsername] = useState("");
const [userData, setUserData] = useState({});
  
useEffect(() => {
     getUserData();
 }, [username]);



 var gitHubUrl = `https://api.github.com/users/${username}`;
  
const getUserData = async () => {
        const response = await fetch(gitHubUrl);
        const jsonData = await response.json();
        if (jsonData && jsonData.message !== "Not Found") {
            setUserData(jsonData);
            console.log(jsonData)
        }
        else if (username !== "") {
            console.log('Username does not exist');
        }
        else {
            setUserData({})
        }
    };


    import React, { useState, useEffect } from "react";
  
function Main() {
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(Object);
      
    useEffect(() => {
        getUserData();
    }, [username]);
  
    var gitHubUrl = `https://api.github.com/users/${username}`;
  
    const getUserData = async () => {
        const response = await fetch(gitHubUrl);
        const jsonData = await response.json();
        if (jsonData && jsonData.message !== "Not Found") {
            setUserData(jsonData);
            console.log(jsonData)
        }
        else if (username !== "") {
            console.log('Username does not exist');
        }
        else {
            setUserData({})
        }
    };
    
};

var displayGithub = function (parentEl, rfcNumber) {
    console.log("todo: display Github");
    // don't return this dummy promise...
    return new Promise((resolve, reject) => {"dummy"});




    
};
