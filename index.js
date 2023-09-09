// contants
const slackName = document.getElementById("slackUserName");
const slackProfileImage = document.getElementById("slackDisplayImage");
const CurrentDayOfTheWeek = document.getElementById("currentDayOfTheWeek");
const CurrentUTCTime = document.getElementById("currentUTCTime");
const track = document.getElementById("myTrack");
const GithubURL = document.getElementById("githubURL");

// to isplay the profile image
const imgElement = document.createElement("img");

imgElement.src =`./images/slackProfilePicture.jpg`;
imgElement.alt =" Richard Udeh";


// to find the day of the week
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const dayWeek = new Date();
const DayOfTheWeek = weekday[dayWeek.getDay()];
// to get the current UTC 
const now = new Date();

const year = now.getUTCFullYear();
const month = now.getUTCMonth() + 1;
const day = now.getUTCDate();
const hours = now.getUTCHours();
const minutes = now.getUTCMinutes();
const seconds = now.getUTCSeconds();
const milliseconds = now.getUTCMilliseconds();



// DOM manipulation
slackName.innerText=`Name: Richard Udeh`
slackProfileImage.innerHTML = imgElement.outerHTML;
CurrentDayOfTheWeek .innerText = `Day of the week : ${DayOfTheWeek} `;
CurrentUTCTime.innerHTML=`Time in UTC : ${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
track.innerText = `Track:Frontend`;
GithubURL.innerHTML = `<a href="http://github.com/Richardudeh4"> GitHub Url</a>`
